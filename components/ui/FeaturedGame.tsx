"use client";

import { IGame } from "@/app/lib/types/store.types";
import GameTag from "../text-content/GameTag";
import AutoPlayVideo from "./AutoPlayVideo";
import PriceTag from "./PriceTag";
import { startGame } from "@/app/actions";

interface FeaturedGameProps {
  game: IGame
}

// @TODO a lot of logic for tags/recommended left unsaid

export default function FeaturedGame({ game }: FeaturedGameProps) {
  const goToGameDetailsPage = async () => {
    // use the game id to create a dynamic route for the game details page
    console.log("click to details on ", game.title);
    // but for now just handle the play of cyberpunk only!!
    if (game.title === "Cyberpunk 2077") {
      await startGame();
    }
  }

  return (
    <div className="flex gap-3 w-full justify-between cursor-pointer">
      <div
        className="w-[55%] max-h-[350px] border border-3 border-gray-300 rounded-md bg-cover bg-center cursor-pointer overflow-hidden relative"
        onClick={goToGameDetailsPage}
      >
        <div
          className="absolute inset-0 transition-transform duration-300 ease-in-out hover:scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.bannerUrl})` }} // Have to use style tag for dynamically loaded images
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="relative mt-8 flex flex-col w-[45%] border border-gray-400 p-4 gap-3 bg-[rgba(0,83,185,0.5)] rounded-md">
        <span className="font-header text-lg">
          {game.title}
        </span>
        <AutoPlayVideo videoUrl={game.videoUrl} type="video/webm" />
        <p>
          <span className="font-body text-accent">Recommended </span>
          because you played games tagged with:
        </p>
        {/* TAGS */}
        <div className="flex gap-1 flex-wrap mb-4">
          {game.tags.map((tag, i) => (
            <GameTag text={tag} key={i} />
          ))}
        </div>

        <div className="self-end mt-[-16px]">
          <PriceTag vanilla={true} isOnSale={game.isOnSale} basePrice={game.basePrice} salePercentage={game.salePercentage} onClick={goToGameDetailsPage}/>
        </div>
      </div>

    </div>
  );
}