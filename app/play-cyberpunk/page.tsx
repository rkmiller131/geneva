"use client";

import { useEffect, useRef } from "react";
import { endGame, getGameStreamUrl } from "../actions";
import { useRouter } from "next/navigation";

export default function PlayCyberpunk() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const loadGameUrl = async () => {
    try {
      const result = await getGameStreamUrl();
      if (result.success && iframeRef.current && result.url) {
        iframeRef.current.src = result.url;
      }
    } catch (error) {
      console.error('Error loading game URL:', error);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  const handleBack = async () => {
    await endGame("/");
  };

  useEffect(() => {
    // Disable scrolling on the body when component mounts
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    loadGameUrl();

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-charcoal">
      <button
        className="fixed top-0 left-0 z-[60] bg-black/75 p-4 text-white rounded-md"
        onClick={handleBack}
      >
        &#8592; <span className="underline">Exit Stream</span>
      </button>
      <iframe
        ref={iframeRef}
        className="fixed inset-0 z-[55] w-screen h-screen border-none"
        title="GENEVA"
        src="about:blank"
        allowFullScreen
        allow="autoplay; encrypted-media;"
      />
    </div>
  );
}