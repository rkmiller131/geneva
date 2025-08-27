// import SignUp from "../(auth)/sign-up/page";
import PlayNowButton from "@/components/ui/PlayNowButton";
import Image from "next/image";

export default function Library() {
  return (
    <div className="min-h-screen mt-[4%] flex flex-col gap-8 p-12 bg-[#16151C] rounded-lg">
      <h1 className="text-3xl font-logo">
        GENEVA
      </h1>
      <div className="flex flex-col gap-4">
        <span>Your Library</span>
        <div className="flex gap-6 p-5 bg-[#192131] rounded-md w-max border border-gray-400 drop-shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
          <Image
            src="/images/cyberpunk2077-boxart.jpg"
            alt="Cyberpunk 2077 Boxart"
            width={2048}
            height={2048}
            className="rounded-md w-[150px] h-auto"
          />
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-header text-xl">
                Cyberpunk 2077
              </span>
              <span className="text-gray-400">107.3 hours played</span>
              <span className="font-body text-xs text-accent">
                Purchased Jun 15, 2025
              </span>
            </div>
            <PlayNowButton text="Play Now" />
          </div>
        </div>
      </div>
    </div>
  )
}