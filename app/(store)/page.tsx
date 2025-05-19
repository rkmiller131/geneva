import Carousel from "@/components/ui/Carousel";
import FeaturedGame from "@/components/ui/FeaturedGame";
import GeneralStoreFilters from "@/components/ui/GeneralStoreFilters";
import GlobalSearchbar from "@/components/ui/GlobalSearchbar";
import Image from "next/image";

export default function Store() {

  return (
    <div className="flex flex-col gap-4">
      <GlobalSearchbar />

      {/* Main content panels */}
      <div className="flex">
        {/* LEFT PANEL */}
        <div className="flex flex-col gap-6 mr-6">
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
          />

          <GeneralStoreFilters />
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col mt-8 grow items-end">
          <div className="cursor-not-allowed flex gap-4 self-start ml-18 mb-6 font-header">
            <span className="border-b">Featured & Recommended</span>
            <span>New & Noteworthy</span>
          </div>
          <Carousel>
            <FeaturedGame
              game={{
                id: 1,
                title: "Cyberpunk 2077",
                bannerUrl: "https://cdn.glitch.global/c4f540ac-7f7c-41b2-ae89-9e2617351aa6/cyberpunk2077.jpg?v=1747626449153",
                videoUrl: "https://cdn.glitch.global/c4f540ac-7f7c-41b2-ae89-9e2617351aa6/cyberpunk2077.mp4?v=1747627386347",
                tags: ["ADVENTURE", "RPG", "SHOOTER"],
                originalPrice: 59.99,
                salePercentage: 60,
                isOnSale: true
              }}
            />
            <FeaturedGame
              game={{
                id: 2,
                title: "FIFA26",
                bannerUrl: "https://cdn.glitch.global/c4f540ac-7f7c-41b2-ae89-9e2617351aa6/fifa-banner2.png?v=1747643507636",
                videoUrl: "https://cdn.glitch.me/c4f540ac-7f7c-41b2-ae89-9e2617351aa6/banner-trailer.webm?v=1742318229191",
                tags: ["SPORTS", "SIMULATION"],
                originalPrice: 59.99,
                isOnSale: false
              }}/>
            <FeaturedGame
              game={{
                id: 3,
                title: "The Witcher 3: Wild Hunt",
                bannerUrl: "https://cdn.glitch.global/c4f540ac-7f7c-41b2-ae89-9e2617351aa6/witcher3.jpg?v=1747644013655",
                videoUrl: "https://cdn.glitch.me/c4f540ac-7f7c-41b2-ae89-9e2617351aa6/witcher3.mp4?v=1747644048528",
                tags: ["ACTION", "RPG", "OPEN WORLD"],
                originalPrice: 39.99,
                isOnSale: false
              }}/>
          </Carousel>
        </div>

      </div>
    </div>
  );
}
