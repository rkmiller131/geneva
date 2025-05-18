"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";

interface NavigationEntry {
  path: string;
  id: string; // UUID for duplicate path entries
}

interface NavigationContextType {
  canGoBack: boolean;
  canGoForward: boolean;
  goBack: () => void;
  goForward: () => void;
  history: NavigationEntry[];
  currentPosition: number;
}

const NavigationContext = createContext<NavigationContextType>({
  canGoBack: false,
  canGoForward: false,
  goBack: () => {},
  goForward: () => {},
  history: [],
  currentPosition: 0
});

// Generate a unique ID for each navigation entry (example: nav_1747578783878_fl11nit)
const generateId = () => `nav_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

export function NavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [history, setHistory] = useState<NavigationEntry[]>([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [initialized, setInitialized] = useState(false);
  // This tracks whether we're using the nav buttons so we don't modify history
  const isUsingNavButtons = useRef(false);
  // Track the navigation target to prevent duplicate handling
  const navigationTarget = useRef("");

  useEffect(function initAndTrackFromLocalStorage() {
    // Skip during SSR where we don't have window
    if (typeof window === "undefined" || initialized) return;

    // If there's a direct URL entry (page reload or new tab)
    // we can detect it using the document's referrer
    const referrer = document.referrer;
    const currentHost = window.location.host;

    // If referrer is empty or from a different host, it might be a direct entry
    // and we should clear the existing history
    if (!referrer || !referrer.includes(currentHost)) {
      localStorage.removeItem('navigationHistory');
      localStorage.removeItem('navigationPosition');
    }

    try {
      const savedHistory = JSON.parse(localStorage.getItem("navigationHistory") || "[]");
      const savedPosition = Number(localStorage.getItem("navigationPosition") || "0");

      if (savedHistory.length > 0) {
        setHistory(savedHistory);
        setCurrentPosition(savedPosition);
      } else {
        // initialize the history with the current path
        const initialEntry = { path: pathname || '/', id: generateId() };
        setHistory([initialEntry]);
        setCurrentPosition(0);
      }
    } catch (error) {
      // Handle potential JSON parse errors
      console.error('Error restoring navigation history:', error);
      const initialEntry = { path: pathname || '/', id: generateId() };
      setHistory([initialEntry]);
      setCurrentPosition(0);
    }

    setInitialized(true);
  }, [initialized, pathname]);

  useEffect(function updateLocalStorageOnPositionChange() {
    if (typeof window === "undefined" || !initialized) return;

    localStorage.setItem("navigationHistory", JSON.stringify(history));
    localStorage.setItem("navigationPosition", currentPosition.toString());

  }, [history, currentPosition, initialized]);

  useEffect(function trackNavChangesAndUpdateHistory() {
    if (!initialized || !pathname) return;

    // Skip updating history if we're using the navigation buttons
    // Clicking the buttons set the ref current to true
    if (isUsingNavButtons.current && pathname === navigationTarget.current) {
      isUsingNavButtons.current = false;
      navigationTarget.current = "";
      return;
    }

    // Reset the navigation flags if path changed unexpectedly
    if (navigationTarget.current && pathname !== navigationTarget.current) {
      navigationTarget.current = "";
      isUsingNavButtons.current = false;
    }

    // Do nothing if the nav path is clicked twice (and we're already there)
    if (history[currentPosition]?.path === pathname) {
      return;
    }

    // Check if browser back/forward buttons were used
    let backIndex = -1;
    let forwardIndex = -1;

    // Look for matches in the backward direction
    if (currentPosition > 0) {
      for (let i = currentPosition - 1; i >= 0; i--) {
        if (history[i].path === pathname) {
          backIndex = i;
          break;
        }
      }
    }

    // Look for matches in the forward direction
    if (currentPosition < history.length - 1) {
      for (let i = currentPosition + 1; i < history.length; i++) {
        if (history[i].path === pathname) {
          forwardIndex = i;
          break;
        }
      }
    }

    // Determine if this is a back or forward navigation
    if (backIndex !== -1 || forwardIndex !== -1) {
      // If we have matches in both directions, we need to determine which is more likely
      if (backIndex !== -1 && forwardIndex !== -1) {
        // We can use the distance from current position to determine direction
        // The smaller distance is more likely the actual navigation
        const backDistance = currentPosition - backIndex;
        const forwardDistance = forwardIndex - currentPosition;

        if (backDistance <= forwardDistance) {
          setCurrentPosition(backIndex);
        } else {
          setCurrentPosition(forwardIndex);
        }
      }
      // Only back match found
      else if (backIndex !== -1) {
        setCurrentPosition(backIndex);
      }
      // Only forward match found
      else {
        setCurrentPosition(forwardIndex);
      }
      return;
    }

    // Regular navigation - add new entry
    setHistory(prev => {
      // If we're not at the end of the history, truncate the forward history
      const newHistory = currentPosition < prev.length - 1
        ? prev.slice(0, currentPosition + 1)
        : [...prev];

      // Add the new path
      const newEntry = { path: pathname, id: generateId() };
      newHistory.push(newEntry);

      // Update position to the end
      setCurrentPosition(newHistory.length - 1);

      return newHistory;
    });
  }, [pathname, initialized, currentPosition, history]);

  // Navigation button handlers
  const goBack = () => {
    if (currentPosition > 0) {
      const newPosition = currentPosition - 1;
      const targetPath = history[newPosition].path;

      isUsingNavButtons.current = true;
      navigationTarget.current = targetPath;

      setCurrentPosition(newPosition);
      router.push(targetPath);
    }
  }

  const goForward = () => {
    if (currentPosition < history.length - 1) {
      const newPosition = currentPosition + 1;
      const targetPath = history[newPosition].path;

      isUsingNavButtons.current = true;
      navigationTarget.current = targetPath;

      setCurrentPosition(newPosition);
      router.push(targetPath);
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        canGoBack: currentPosition > 0,
        canGoForward: currentPosition < history.length - 1,
        goBack,
        goForward,
        history,
        currentPosition,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);