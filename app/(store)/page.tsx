import Carousel from "@/components/ui/Carousel";
import FeaturedGame from "@/components/ui/FeaturedGame";
import GeneralStoreFilters from "@/components/ui/GeneralStoreFilters";
import GlobalSearchbar from "@/components/ui/GlobalSearchbar";
import TriOffsetCarousel from "@/components/ui/TriOffsetCarousel";
import Image from "next/image";
import { IGame } from "../lib/types/store.types";
import games from "../lib/mock-db/storeGames.json";

export default function Store() {
  const featuredGames: Array<IGame> = games.slice(0, 3);
  const specialOffers: Array<IGame> = games.filter((game) => game.isOnSale === true).reverse();

  return (
    <div className="flex flex-col gap-4">
      <GlobalSearchbar />

      {/* Main content panels */}
      <div className="flex">
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-6 mr-6 mt-[-10px]">
          {/* GENEVA LOGO */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col">
              <h1 className="font-logo text-6xl">
                GENEVA
              </h1>
              <span className="font-callout">
                Play Without Borders.
              </span>
            </div>
            <div className="bg-charcoal w-max py-1 rounded-full">
              <span className="font-callout font-bold px-4 py-2 w-max text-sm bg-gradient-to-r from-[#2eaae8] to-[#02fddc] bg-clip-text text-transparent border border-l-[#2eaae8] border-b-[#2eaae8] border-r-[#02fddc] border-t-[#02fddc] rounded-full">
                CLOUD GAMING
              </span>
            </div>
          </div>

          <Image
            src="/images/geneva-info.png"
            alt="How it works"
            width={170}
            height={167}
            className="ml-[-15px]"
          />

          <GeneralStoreFilters />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-6 mt-8 grow items-end">
          <div className="cursor-not-allowed flex gap-4 self-start ml-18 font-header">
            <span className="border-b">Featured & Recommended</span>
            <span>New & Noteworthy</span>
          </div>
          <Carousel>
            {featuredGames.map((game: IGame) => (
              <FeaturedGame
                game={game}
                key={game.id}
              />
            ))}
          </Carousel>

          <div className="w-full mt-48">
            <TriOffsetCarousel gameList={specialOffers}/>
          </div>
        </div>

      </div>
    </div>
  );
}
