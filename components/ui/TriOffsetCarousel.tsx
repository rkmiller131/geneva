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
    const prevIndex = (currentIndex + 1) % gameList.length;
    setCurrentIndex(prevIndex);
  };

  // Navigate to previous card
  const prevCard = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const newIndex = (currentIndex + 1) % gameList.length;
    const lastIndex = newIndex + 1 === gameList.length ? 0 : newIndex + 1 === gameList.length + 1 ? newIndex : newIndex + 1;
    const firstIndex = newIndex - 1 >= 0 ? newIndex - 1 : gameList.length - 1;

    const newCards = [gameList[firstIndex], gameList[newIndex], gameList[lastIndex]];
    setCards(newCards);

    gsap.fromTo(`#card${newCards[0].id}`,
        {
            x: '45%',
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
            x: '85%',
            y: '0%'
        },
        {
            x: '-85%',
            y: '0%',
            duration: 1,
            ease: 'cubic.out'
        }
    )
    // gsap.fromTo(`#card${newCards[2].id}`,
    //     {
    //         x: '-100%',
    //         y: '0%'
    //     },
    //     {
    //         x: '-20%',
    //         y: '0%',
    //         duration: 1,
    //         ease: 'cubic.out'
    //     }
    // );
    gsap.fromTo(`#card${newCards[2].id}`,
      {
          x: '-45%',
          y: '-20%'
      },
      {
          x: '-20%',
          y: '0%',
          duration: 1,
          ease: 'cubic.out'
      }
    )

  }, [currentIndex, gameList]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <CarouselArrow
          direction="left"
          onClick={prevCard}
          isActive={true}
        />
        {cards.map((card, i) => (
          <SpecialOfferCard key={card.id} card={card} cardIndex={i} currentIndex={currentIndex}/>
        ))}

        <CarouselArrow
          direction="right"
          onClick={nextCard}
          isActive={true}
        />
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