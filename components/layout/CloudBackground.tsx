import Image from "next/image";

export default function CloudBackground() {
  return (
    <div className="absolute w-full min-h-[145vh] z-[-1]">
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