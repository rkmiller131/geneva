"use client";
import { startGame } from "@/app/actions";

export default function PlayNowButton({ text }: { text: string }) {
  const handlePlayNow = () => {
    startGame();
  };
  return (
    <div
      className="cursor-pointer w-max font-ember px-4 py-1 rounded-sm gradient-sky drop-shadow-[-2px_2px_2px_rgba(0,49,128,0.5)] hover:opacity-75 text-sm"
      onClick={handlePlayNow}
    >
      {text}
    </div>
  );
}