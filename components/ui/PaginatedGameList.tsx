"use client";

import FilterListSection from "../text-content/FilterListSection";
import Image from "next/image";
import TopFilterTabs from "./TopFilterTabs";
import CalloutButton from "./CalloutButton";
import StarIcon from "../icons/StarIcon";
import { useState } from "react";
import SaleIcon from "../icons/SaleIcon";
import GameListItem from "./GameListItem";
import { IGame } from "@/app/lib/types/store.types";

// @TODO these should really be props passed down from the parent
const filters = [
  {
    id: 7824632874368,
    header: "GENRE",
    items: [
      "Early Access",
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Massively Multiplayer",
      "Racing",
      "RPG",
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    id: 109238091238902,
    header: "TRENDING",
    items: [
      "Top Sellers",
      "Popular Upcoming",
      "Newly Added"
    ]
  },
  {
    id: 74738284,
    header: "GAME MODE",
    items: [
      "Couch Play",
      "Single Player",
      "Multiplayer",
      "Controller Friendly"
    ]
  }
]

interface PaginatedGameListProps {
  gameList: IGame[]
}

export default function PaginatedGameList ({ gameList }: PaginatedGameListProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredGames, setFilteredGames] = useState<IGame[]>(gameList);

  const handleAZFilter = () => {
    setSelectedTab(0);
    setFilteredGames(gameList.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 5));
  }
  const handleRatingsFilter = () => {
    setSelectedTab(1);
    setFilteredGames(gameList.sort((a, b) => b.rating - a.rating).slice(0, 5));
  }
  const handleSaleFilter = () => {
    setSelectedTab(2);
    setFilteredGames(gameList.filter((game) => game.isOnSale === true).slice(0, 5).sort((a, b) => b.salePercentage - a.salePercentage));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex bg-charcoal py-6 rounded-lg border border-gray-400">
        <TopFilterTabs
          tabs={[
            {
              text: "A-Z",
              onClick: handleAZFilter
            },
            {
              icon: <StarIcon isActive={selectedTab === 1}/>,
              onClick: handleRatingsFilter
            },
            {
              icon: <SaleIcon isActive={selectedTab === 2}/>,
              onClick: handleSaleFilter
            }
          ]}
          selectedTab={selectedTab}
        />
        <Image
          src="/images/cloud-major.webp"
          alt="large cloud texture"
          width={1080}
          height={1080}
          className="absolute scale-125 rotate-[27deg] top-[-25px] z-[-1]"
        />
        <div className="flex flex-col gap-6 cursor-not-allowed bg-charcoal">
          {filters.map((filterSection) =>
            <FilterListSection
              header={filterSection.header}
              items={filterSection.items}
              isUnderlined={true}
              key={filterSection.id}
            />
          )}
        </div>
        <div className="relative w-full overflow-x-hidden overflow-y-clip h-[745px]">
          <Image
            src="/images/cloud-major.webp"
            alt="large cloud texture"
            width={1080}
            height={1080}
            className="scale-130 rotate-[27deg] mt-[25px]"
          />
          <div className="absolute w-full top-0 z-5 flex flex-col gap-2">
            {filteredGames.map((game) => (
              <GameListItem game={game} key={game.id}/>
            ))}
          </div>
        </div>
      </div>
      <div className="self-end">
        <CalloutButton text="More Games"/>
      </div>
    </div>
  );
}
