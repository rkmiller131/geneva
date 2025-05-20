import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { IItem } from "@/app/lib/types/store.types";

interface SlidingNavListItemProps {
  item: IItem;
  isCollapsed: boolean;
}

export default function SlidingNavListItem({ item, isCollapsed }: SlidingNavListItemProps) {
  const currentRoute = usePathname();
  const isActive = currentRoute === item.href;
  const textRef = useRef<HTMLSpanElement>(null);
  const [rightPosition, setRightPosition] = useState("0px");

  useEffect(function calcTranslation() {
    if (isActive && textRef.current) {
      if (isCollapsed) {
        // Fixed position for icon mode
        setRightPosition("40px");
      } else {
        // Dynamic calculation for text mode
        const containerWidth = 300; // active container width (w-[300px])
        const padding = 16; // right padding (pr-4 = 1rem = 16px)
        const textWidth = textRef.current.offsetWidth;

        const translateX = containerWidth - textWidth - padding;
        setRightPosition(`${translateX}px`);
      }
    }

  }, [isActive, isCollapsed]);

  return (
    <Link
      className={`relative block overflow-hidden ${isCollapsed ? "py-1" : "py-2 pr-4"}
        ${isActive
          ? isCollapsed
            ? "border border-gray-500 w-[75px] ml-[-30px] bg-[rgba(0,49,128,0.5)]"
            : "border border-gray-500 w-[300px] ml-[-60px] bg-[rgba(0,49,128,0.5)]"
          : "border-b border-gray-400" + (isCollapsed ? " w-[45px]" : "")
        }
      `}
      href={item.href}
    >
      <div className="relative w-full">
        <span
          ref={textRef}
          className="inline-block transition-transform duration-600 ease-in-out"
          style={{
            transform: isActive ? `translateX(${rightPosition})` : 'translateX(0)'
          }}
        >
          {isCollapsed ? item.icon : item.text}
        </span>
      </div>
    </Link>
  );
}