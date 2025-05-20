"use client";

import { IGame } from "@/app/lib/types/store.types";
import GoToButton from "./GoToButton";
import PriceTag from "./PriceTag";

interface SpecialOfferCardProps {
  card: IGame;
  cardIndex: number;
}

// Selected/highlighted card will be at index 0 (first one in the list)
export default function SpecialOfferCard({ card, cardIndex }: SpecialOfferCardProps) {
  const saleEndDate = new Date(Number(card.saleEndDate));
  const saleEndMonth = saleEndDate.getMonth();
  const saleEndDay = saleEndDate.getDate();
  const saleEnd = `${saleEndMonth + 1}/${saleEndDay}`;

  const styles = {
    filter: cardIndex === 0 ? "" : "blur(3px)",
    opacity: cardIndex === 0 ? 1 : 0.85,
    zIndex: cardIndex ===0 ? 1 : 0
  }

  // id property is used in gsap to target animations
  return (
    <div
      id={`card${card.id}`}
      style={styles}
      className="w-[45%] h-[350px] border border-[0.3px] border-gray-300 bg-[rgba(0,83,185,0.5)] rounded-md p-3"
    >
      <div className="flex flex-col h-full">
        {/* CARD IMAGE */}
        <div
          className="w-[100%] h-[150px] rounded-t-md bg-cover bg-center cursor-pointer overflow-hidden relative"
        >
          <div
            className="absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-105 bg-cover bg-center"
            style={{ backgroundImage: `url(${card.bannerUrl})` }} // Have to use style tag for dynamically loaded images
          />
        </div>
        {/* CHARCOAL PART */}
        <div className="flex flex-col gap-2 grow justify-between bg-charcoal p-3 rounded-b-md">
          <span className="font-header">
            {card.title}
          </span>
          <p className="text-xs font-body">
            {card.description.length > 100 ?
              `${card.description.slice(0,99)}...` :
              card.description
            }
          </p>
          <div className="w-full flex items-center justify-end gap-2">
            <span className="text-sm text-primary">
              Offer ends {saleEnd}
            </span>
            <GoToButton onClick={() => {}}/>
          </div>
        </div>

        <div className="absolute top-10 right-0">
          <PriceTag isOnSale={true} basePrice={card.basePrice} salePercentage={card.salePercentage} displayGoTo={false}/>
        </div>
      </div>
    </div>
  )
}