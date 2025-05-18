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
    if (isUsingNavButtons.current) {
      console.log('skipping updating history, using nav buttons')
      isUsingNavButtons.current = false;
      return;
    }

    // Do nothing if the nav path is clicked twice (and we're already there)
    if (history[currentPosition]?.path === pathname) {
      console.log('already at desired path');
      return;
    }

    // Regular navigation - add new entry
    setHistory(prev => {
      const newHistory = [...prev];

      // Add the new path
      const newEntry = { path: pathname, id: generateId() };
      newHistory.push(newEntry);
      console.log('adding new entry')

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