"use client";

import { useEffect, useState } from "react";
import CarouselArrow from "./CarouselArrow";
import SpecialOfferCard from "./SpecialOfferCard";
import { IGame } from "@/app/lib/types/store.types";
import CarouselPagination from "./CarouselPagination";
import CalloutButton from "./CalloutButton";

interface TriOffsetCarouselProps {
  gameList: IGame[];
}

export default function TriOffsetCarousel({ gameList }: TriOffsetCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0); // the center card
  const [isAnimating, setIsAnimating] = useState(false);
  const [cards, setCards] = useState(gameList.slice(0, 3));

  // Set initial positions when component mounts
  useEffect(() => {
    // Position the cards initially (without animation)
    positionCards(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Function to set card positions via direct DOM manipulation
  const positionCards = (animate = false) => {
    // Center card (elevated pyramid top)
    const centerCard = document.getElementById(`card${cards[0].id}`);
    if (centerCard) {
      centerCard.style.zIndex = "10";

      if (animate) {
        centerCard.style.transition = "transform 500ms ease";
      } else {
        centerCard.style.transition = "none";
      }

      centerCard.style.transform = "translateX(100%) translateY(-20%)";
    }

    // Left card
    const leftCard = document.getElementById(`card${cards[1].id}`);
    if (leftCard) {
      leftCard.style.zIndex = "5";

      if (animate) {
        leftCard.style.transition = "transform 500ms ease";
      } else {
        leftCard.style.transition = "none";
      }

      leftCard.style.transform = "translateX(-80%) translateY(0%)";
    }

    // Right card
    const rightCard = document.getElementById(`card${cards[2].id}`);
    if (rightCard) {
      rightCard.style.zIndex = "5";

      if (animate) {
        rightCard.style.transition = "transform 500ms ease";
      } else {
        rightCard.style.transition = "none";
      }

      rightCard.style.transform = "translateX(-20%) translateY(0%)";
    }
  };

  // Navigate to next card (right button)
  const nextCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Get the cards
    const centerCard = document.getElementById(`card${cards[0].id}`);
    const leftCard = document.getElementById(`card${cards[1].id}`);
    const rightCard = document.getElementById(`card${cards[2].id}`);

    // Animate with transitions
    if (centerCard && leftCard && rightCard) {
      // First, remove active styles from current center card
      centerCard.style.filter = "blur(3px)";
      centerCard.style.opacity = "0.85";
      leftCard.style.filter = "none";
      leftCard.style.opacity = "1";
      rightCard.style.filter = "blur(3px)";
      rightCard.style.opacity = "0.85";
      // Add transitions
      centerCard.style.transition = "transform 500ms ease";
      leftCard.style.transition = "transform 500ms ease";
      rightCard.style.transition = "transform 500ms ease";

      // Update z-index
      centerCard.style.zIndex = "5";
      leftCard.style.zIndex = "10";
      rightCard.style.zIndex = "5";

      // Move center card to right
      centerCard.style.transform = "translateX(175%) translateY(0%)";

      // Move left card to center (and up)
      leftCard.style.transform = "translateX(0%) translateY(-20%)";

      // Move right card to left
      rightCard.style.transform = "translateX(-175%) translateY(0%)";

      // Update the state after animation completes
      setTimeout(() => {
        const nextIndex = currentIndex + 1;
        if (nextIndex > gameList.length -1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        setIsAnimating(false);
      }, 500);
    }
  };

  // Navigate to previous card (left button)
  const prevCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Get the cards
    const centerCard = document.getElementById(`card${cards[0].id}`);
    const leftCard = document.getElementById(`card${cards[1].id}`);
    const rightCard = document.getElementById(`card${cards[2].id}`);

    // Animate with transitions
    if (centerCard && leftCard && rightCard) {
      centerCard.style.filter = "blur(3px)";
      centerCard.style.opacity = "0.85";
      leftCard.style.filter = "blur(3px)";
      leftCard.style.opacity = "0.85";
      rightCard.style.filter = "none";
      rightCard.style.opacity = "1";
      // Add transitions
      centerCard.style.transition = "transform 500ms ease";
      leftCard.style.transition = "transform 500ms ease";
      rightCard.style.transition = "transform 500ms ease";

      // Update z-index
      centerCard.style.zIndex = "5";
      leftCard.style.zIndex = "5";
      rightCard.style.zIndex = "10";

      // Move center card to left
      centerCard.style.transform = "translateX(20%) translateY(0%)";

      // Move left card to right
      leftCard.style.transform = "translateX(80%) translateY(0%)";

      // Move right card to center (and up)
      rightCard.style.transform = "translateX(-100%) translateY(-20%)";

      // Update the state after animation completes
      setTimeout(() => {
        if (currentIndex === 0){
          setCurrentIndex(gameList.length-1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const centerCard = gameList[currentIndex] // always same
    let leftCard = gameList[currentIndex + 1]; //can change
    let rightCard = gameList[currentIndex + 2] // can Change
    // 3 -> length is 5
    if (currentIndex === gameList.length - 2){
       rightCard = gameList[0]
    }
    // 1 before end
    if (currentIndex === gameList.length -1){
      leftCard = gameList[0]
      rightCard = gameList[1]
    }
    // end
    if (currentIndex === gameList.length){
      leftCard = gameList[0];
      rightCard = gameList[1]
    }

    const newCards = [centerCard, leftCard, rightCard];
    setCards(newCards)

  }, [currentIndex, gameList]);

  return (
    <div className="w-full flex flex-col">
      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 z-20">
          <CarouselArrow
            direction="left"
            onClick={prevCard}
            isActive={!isAnimating}
          />
        </div>
        {cards.map((card, i) => (
          <SpecialOfferCard
            card={card}
            styles={{
              // Initial styling - actual positioning is done in useEffect via DOM manipulation
              transition: "none",
              transform: i === 0 ? "translateX(100%) translateY(-20%)" :
                          i === 1 ? "translateX(-80%) translateY(0%)" :
                                  "translateX(-20%) translateY(0%)",
              filter: i === 0 ? "" : "blur(3px)",
              opacity: i === 0 ? 1 : 0.85,
              zIndex: i === 0 ? 10 : 5
            }}
            key={card.id}
          />
        ))}

        <div className="absolute right-0 z-20">
          <CarouselArrow
            direction="right"
            onClick={nextCard}
            isActive={!isAnimating}
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-between pl-24 mt-[30px]">
        <CarouselPagination
          pageCount={gameList.length}
          currentPage={currentIndex}
        />
        <CalloutButton text="See all special offers" />
      </div>
    </div>
  );
}