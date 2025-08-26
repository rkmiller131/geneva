import Image from "next/image";

export default function StreamingMetrics() {
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

      <Image
        src="/images/CloudMetricsGraphs.svg"
        alt="Mock User Engagement Graph"
        width={855}
        height={720}
      />
    </div>
  )
}