"use client";

import { ReactNode, useState, useCallback } from "react";
import CarouselArrow from "./CarouselArrow";
import CarouselPagination from "./CarouselPagination";

type CarouselProps = {
  children: ReactNode[];
  slideTransition?: string;
};

export default function Carousel({
  children,
  slideTransition = "transform duration-500 ease-in-out",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = children.length;

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex < itemCount - 1 ? currentIndex + 1 : currentIndex;
    setCurrentIndex(nextIndex);
  }, [currentIndex, itemCount]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    setCurrentIndex(prevIndex);
  }, [currentIndex]);

  // Check if we're at the first or last slide for arrow states
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === itemCount - 1;

  return (
    <div className="w-full flex flex-col">
      <div className="relative flex gap-3 items-center">
        <CarouselArrow
          direction="left"
          onClick={prevSlide}
          isActive={!isFirstSlide}
        />
        {/* Carousel Content */}
        <div className="flex-1 overflow-hidden">
          <div
            className={`flex ${slideTransition}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children.map((child, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                aria-hidden={index !== currentIndex}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        <CarouselArrow
          direction="right"
          onClick={nextSlide}
          isActive={!isLastSlide}
        />
      </div>

      {/* Pagination */}
      <div className="mt-4 ml-24">
        <CarouselPagination
          pageCount={itemCount}
          currentPage={currentIndex}
        />
      </div>
    </div>
  );
}