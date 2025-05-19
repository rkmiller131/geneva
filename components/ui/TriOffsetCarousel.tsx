"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import CarouselArrow from "./CarouselArrow";

const specialOffers = [
  {
    id: 432,
    title: "",
    bannerUrl: "",
    videoUrl: "",
    tags: [],
    originalPrice: 39.99,
    salePercentage: 20,
    isOnSale: true
  },
  {
    id: 982,
    title: "",
    bannerUrl: "",
    videoUrl: "",
    tags: [],
    originalPrice: 39.99,
    salePercentage: 20,
    isOnSale: true
  },
  {
    id: 146,
    title: "",
    bannerUrl: "",
    videoUrl: "",
    tags: [],
    originalPrice: 39.99,
    salePercentage: 20,
    isOnSale: true
  },
  // {
  //   id: 375,
  //   title: "",
  //   bannerUrl: "",
  //   videoUrl: "",
  //   tags: [],
  //   originalPrice: 39.99,
  //   salePercentage: 20,
  //   isOnSale: true
  // },
]

export default function TriOffsetCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // the center card
  const [cards, setCards] = useState(specialOffers.slice(0, 3));

  // Navigate to next card
  // const nextCard = useCallback(() => {
  //   const prevIndex = (currentIndex + 1) % specialOffers.length;
  //   setCurrentIndex(prevIndex);
  // }, [currentIndex]);
  const nextCard = () => {
    const prevIndex = (currentIndex + 1) % specialOffers.length;
    setCurrentIndex(prevIndex);
  };

  // Navigate to previous card
  // const prevCard = useCallback(() => {
  //   const prevIndex = (currentIndex - 1) % specialOffers.length;
  //   setCurrentIndex(prevIndex);
  // }, [currentIndex]);
  const prevCard = () => {
    const prevIndex = (currentIndex - 1) % specialOffers.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const newIndex = (currentIndex + 1) % specialOffers.length;
    const lastIndex = newIndex + 1 === specialOffers.length ? 0 : newIndex + 1 === specialOffers.length + 1 ? newIndex : newIndex + 1;
    const firstIndex = newIndex - 1 >= 0 ? newIndex - 1 : specialOffers.length - 1;

    const newCards = [specialOffers[firstIndex], specialOffers[newIndex], specialOffers[lastIndex]];
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
            x: '55%',
            y: '0%'
        },
        {
            x: '-55%',
            y: '0%',
            duration: 1,
            ease: 'cubic.out'
        }
    )
    gsap.fromTo(`#card${newCards[2].id}`,
        {
            x: '-100%',
            y: '20%'
        },
        {
            x: '-45%',
            y: '0%',
            duration: 1,
            ease: 'cubic.out'
        }
    );

  }, [currentIndex]);

  return (
    <div className="flex items-center justify-between">
      <CarouselArrow
        direction="left"
        onClick={prevCard}
        isActive={true}
      />
      {cards.map((card) => (
        <div id={`card${card.id}`} key={card.id} className="w-[400px] h-[420px] border">{card.id}</div>
      ))}

      <CarouselArrow
        direction="right"
        onClick={nextCard}
        isActive={true}
      />
    </div>
  );
}