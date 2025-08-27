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
        <div className="flex flex-col gap-2 justify-evenly absolute right-0 bottom-0">
          <div className="flex gap-1 items-center justify-end text-[#ccccccff]">
            <svg width="25" height="22" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill="#ccccccff"/>
            </svg>
            {game.rating}
          </div>
          <PriceTag isOnSale={game.isOnSale} basePrice={game.basePrice} salePercentage={game.salePercentage} onClick={() => {}}/>
        </div>
      </div>
    </div>
  );
}