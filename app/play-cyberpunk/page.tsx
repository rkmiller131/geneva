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
    loadGameUrl();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <button
        className="absolute z-20 bg-black/75 p-4 text-white rounded-md"
        onClick={handleBack}
      >
        &#8592; <span className="underline">Exit Stream</span>
      </button>
      <iframe
        ref={iframeRef}
        className="absolute z-10 w-full h-full border-none top-0 left-0"
        title="GENEVA"
        src="about:blank"
        allowFullScreen
        allow="autoplay; encrypted-media;"
      />
    </div>
  );
}