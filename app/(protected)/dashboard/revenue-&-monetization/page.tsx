import Image from "next/image";

export default function RevenueMonetization() {
  return (
    <div className="flex flex-col gap-4">
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

      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/ARPU.png"
            alt="ARPU"
            width={332}
            height={181}
          />
          <Image
            src="/images/ARPPU.png"
            alt="ARPPU"
            width={331}
            height={180}
          />
          <Image
            src="/images/viewsToPurchases.png"
            alt="Views to Purchases"
            width={329}
            height={202}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="/images/Map.png"
            alt="Revenue and Installs Geo"
            width={710}
            height={367}
          />
          <div className="flex gap-4">
            <Image
              src="/images/revenue-sm.png"
              alt="Revenue"
              width={329}
              height={205}
            />
            <Image
              src="/images/Installs.png"
              alt="Installs"
              width={329}
              height={205}
            />
          </div>
        </div>
      </div>
      <Image
        src="/images/playerConversion.png"
        alt="Conversion to Player"
        width={1046}
        height={272}
      />
    </div>
  )
}