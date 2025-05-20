"use client";

import { useState } from "react";
import Image from "next/image";
import SlidingNavListItem from "../text-content/SlidingNavListItem";

// @TODO really the href should be dynamic for organization too like /dashboard/[organization]/overview
const navItems = [
  { id: "Overview", text: "Overview", icon: '📊', href: "/dashboard" },
  { id: "Engagement", text: "Engagement", icon: '👤', href: "/dashboard/engagement" },
  { id: "Revenue & Monetization", text: "Revenue & Monetization", icon: '⚙️', href: "/dashboard/revenue-&-monetization" },
  { id: "Cloud Streaming Metrics", text: "Cloud Streaming Metrics", icon: '📈', href: "/dashboard/streaming-metrics" },
  { id: "Upload & Publish", text: "Upload & Publish", icon: '💬', href: "/dashboard/upload" }
];

export default function SlidingNavbar () {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex flex-col gap-12 pl-4 pt-4 transition-[width] duration-300 ease-in-out bg-[#16151C] rounded-l-lg shadow-lg/50 justify-between ${isCollapsed ? "w-[75px]" : "w-[300px]"}`}>
      <div className="flex flex-col gap-12">
        <div className={`flex ${isCollapsed ? "justify-center" : "justify-between"}`}>
          {/* GENEVA LOGO */}
          <div className={isCollapsed ? "hidden" : "flex flex-col w-full pb-4 border-b border-gray-400"}>
            <div className="flex flex-col">
              <h1 className="font-logo text-4xl">
                GENEVA
              </h1>
              <span className="font-callout">
                Play Without Borders.
              </span>
            </div>
          </div>
          {/* Collapsible Icon */}
          <div
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-4 cursor-pointer"
          >
            {isCollapsed ? (
              <Image
                src="/icons/open-panel.png"
                alt="Open sidebar"
                width={29}
                height={26}
              />
            ) : (
              <Image
                src="/icons/close-panel.png"
                alt="Close sidebar"
                width={29}
                height={26}
              />
            )}
          </div>
        </div>

        {/* Nav List Item Content */}
        <div className="relative flex flex-col pr-12 gap-4">
          {navItems.map((item) => (
            <SlidingNavListItem item={item} isCollapsed={isCollapsed} key={item.id}/>
          ))}
        </div>

      </div>

      {/* Mock Organization Account Info */}
      <div className="">
      </div>

    </div>
  );
}