"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CloudBackground() {
  const path = usePathname();

  return (
    <div className={`absolute w-full min-h-[145vh] ${path !== "/" && "overflow-hidden"} z-[-1]`}>
      <div className="absolute top-[-525px] left-[-570px] rotate-[137deg]">
        <Image
          src="/images/cloud-minor.webp"
          alt="small cloud texture"
          width={1080}
          height={1080}
        />
      </div>
      <div className="absolute bottom-[-250px] right-[-525px] rotate-[23deg]">
        <Image
          src="/images/cloud-major.webp"
          alt="large cloud texture"
          width={1080}
          height={1080}
        />
      </div>
    </div>
  );
}