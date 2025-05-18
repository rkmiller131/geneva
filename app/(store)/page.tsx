import GeneralStoreFilters from "@/components/GeneralStoreFilters";
import GlobalSearchbar from "@/components/ui/GlobalSearchbar";
import Image from "next/image";

export default function Store() {

  return (
    <div className="flex flex-col gap-8">
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
        <div className="flex flex-col mt-8 grow border border-red-500 items-end">
          SECOND PANEL
        </div>

      </div>
    </div>
  );
}
