"use client";

import { useEffect, useState } from "react";
import { gsap } from 'gsap';
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
  const [cards, setCards] = useState(gameList.slice(0, 3));

  // Navigate to next card
  const nextCard = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex > gameList.length -1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Navigate to previous card
  const prevCard = () => {
    if (currentIndex === 0){
      setCurrentIndex(gameList.length-1);
    } else {
      setCurrentIndex(currentIndex - 1);
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

    gsap.fromTo(`#card${newCards[0].id}`,
      {
          x: '0%',
          y: '0%'
      },
      {
          x: '100%',
          y: '-20%',
          duration: 1,
          ease: 'cubic.out'
      }
    )
    gsap.fromTo(`#card${newCards[1].id}`,
        {
            x: '0%',
            y: '0%'
        },
        {
            x: '-80%',
            y: '0%',
            duration: 1,
            ease: 'cubic.out'
        }
    )
    gsap.fromTo(`#card${newCards[2].id}`,
        {
            x: '-150%',
            y: '-20%'
        },
        {
            x: '-20%',
            y: '0%',
            duration: 1,
            ease: 'cubic.out'
        }
    );

  }, [currentIndex, gameList]);

  return (
    <div className="w-full flex flex-col">
      <div className="relative flex items-center justify-between">
        <div className="absolute">
          <CarouselArrow
            direction="left"
            onClick={prevCard}
            isActive={true}
          />
        </div>
        {cards.map((card, i) => (
          <SpecialOfferCard key={card.id} card={card} cardIndex={i} />
        ))}

        <div className="absolute right-0">
          <CarouselArrow
            direction="right"
            onClick={nextCard}
            isActive={true}
          />
        </div>
      </div>
      {/* Pagination */}
      <div className="w-full flex items-center justify-between pl-24 mt-[30px]">
        <CarouselPagination
          pageCount={gameList.length}
          currentPage={currentIndex}
        />
        <CalloutButton text="See all special offers ->"/>
      </div>
    </div>
  );
}