import { IGame } from "@/app/lib/types/store.types";
import Image from "next/image";
import GameTag from "../text-content/GameTag";
import PriceTag from "./PriceTag";

export default function GameListItem({ game }: { game: IGame }) {
  return (
    <div className="p-4 bg-[rgba(0,83,185,0.5)]">
      <div className="relative flex gap-2">
        <Image
          src={game.bannerUrl}
          alt="Game Banner"
          width={1920}
          height={1080}
          className="w-[200px] h-auto"
        />
        <div className="flex flex-col gap-4 justify-evenly">
          <span>{game.title}</span>
          <div className="flex gap-1 flex-wrap">
            {game.tags.map((tag, i) => (
              <GameTag text={tag} key={i} />
            ))}
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <PriceTag isOnSale={game.isOnSale} basePrice={game.basePrice} salePercentage={game.salePercentage} onClick={() => {}}/>
        </div>
      </div>
    </div>
  );
}