"use client";

import TopFilterTabs from "@/components/ui/TopFilterTabs";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  }

  return (
    <div className="flex flex-col gap-4">
      <TopFilterTabs
        tabs={[
          {
            text: "Monthly",
            onClick: () => handleTabChange(0)
          },
          {
            text: "Daily",
            onClick: () => handleTabChange(1)
          },
          {
            text: "Weekly",
            onClick: () => handleTabChange(2)
          },
          {
            text: "YTD",
            onClick: () => handleTabChange(3)
          },
          {
            text: "Lifetime",
            onClick: () => handleTabChange(4)
          },
        ]}
        selectedTab={selectedTab}
      />
      <div className="cursor-not-allowed flex gap-2 items-start border-b border-gray-500 pb-2 w-max">
        <span className="">
          Cyberpunk 2077
        </span>
        <Image
          src="/icons/down-caret.png"
          alt="Dropdown icon"
          width={12}
          height={12}
          className="pt-1"
        />
      </div>

      <Image
        src="/images/Revenue.png"
        alt="Mock Revenue Graph"
        width={1049}
        height={393}
      />

      <span className="font-header self-end">Monthly Installs: <span className="text-accent">X</span></span>

      <Image
        src="/images/Downloads.png"
        alt="Mock Downloads Graph"
        width={1049}
        height={393}
      />

    </div>
  );
}