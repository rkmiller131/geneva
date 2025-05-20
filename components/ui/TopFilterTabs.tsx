import { IFilterTab } from "@/app/lib/types/store.types";

interface TopFilterTabsProps {
  tabs: IFilterTab[]
  selectedTab: number;
}

export default function TopFilterTabs({ tabs, selectedTab }: TopFilterTabsProps) {
  return (
    <div className="absolute top-[-43px] right-[10px] flex gap-1">
      {tabs.map((tab, i) => (
        <button
          className={`p-2 cursor-pointer border-b ${selectedTab === i ? "gradient-sky" : "bg-charcoal"}`}
          onClick={tab.onClick}
          key={i}
        >
          {tab.icon && (
            <>
              {tab.icon}
            </>
          )}
          {tab.text && (
            <span className={`font-header hover:text-primary ${selectedTab === i ? "text-charcoal": "text-white"}`}>
              {tab.text}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}