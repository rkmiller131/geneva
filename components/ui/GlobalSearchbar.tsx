"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function GlobalSearchbar() {
  const [searchInput, setSearchInput] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  // @TODO Make search bar functional and maybe not italic when typing
  return (
    <div className="flex justify-end w-full">
      <div className="flex gap-2 w-[25%] rounded-full py-2 px-4 border border-[0.5px] border-gray-300 bg-[rgba(11,65,166,0.9)]">
        <Image
          src="/icons/search.png"
          alt="search icon"
          width={20}
          height={26}
        />
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleOnChange}
          className="font-[var(--font-body)] italic outline-none ring-0 focus:outline-none focus:ring-0 bg-transparent text-white"
        />
      </div>
    </div>
  );
}