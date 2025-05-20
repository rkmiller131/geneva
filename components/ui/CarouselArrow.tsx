"use client";

import Image from "next/image";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  isActive: boolean;
}

export default function CarouselArrow({ direction, onClick, isActive }: CarouselArrowProps) {
  if (!isActive) {
    return (
      <div className="px-1 py-6">
        <div className="w-[50px] h-[50px]"/>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
    >
      {direction === "left" ? (
        <div className="cursor-pointer bg-[#003180] hover:bg-[#01245E] px-1 py-6 rounded-lg border border-gray-400 shadow-[inset_-10px_10px_10px_rgba(0,0,0,0.3)]">
          <Image
            src="/icons/left-caret.png"
            alt="slide left"
            width={50}
            height={50}
            className="w-[30px] h-auto"
          />
        </div>
      ) : (
        <div className="cursor-pointer bg-[#003180] hover:bg-[#01245E] px-1 py-6 rounded-lg border border-gray-400 shadow-[inset_10px_10px_10px_rgba(0,0,0,0.3)]">
          <Image
            src="/icons/right-caret.png"
            alt="slide right"
            width={50}
            height={50}
            className="w-[30px] h-auto"
          />
        </div>
      )
      }
    </button>
  );
}