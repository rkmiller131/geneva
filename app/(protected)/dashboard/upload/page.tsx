import CalloutButton from "@/components/ui/CalloutButton";

export default function Upload() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex items-center justify-end">
        <CalloutButton text="Add Game" />
      </div>
      <span className="w-full pb-4 border-b-2">Published Games</span>
      <span className="w-full text-center mb-6">No Published Games</span>
      <span className="w-full pb-4 border-b-2">Unreleased Games</span>
      <div className="pl-[90px] w-full text-sm text-gray-400 flex justify-around">
        <span>Game Name</span>
        <span>Build Version</span>
        <span>Status</span>
        <span>Release Date</span>
      </div>
      <div className="w-full flex p-4 items-center bg-[#16151C] rounded-md">
        <div className="bg-[#0D0C15] w-[90px] py-4 rounded-md text-center shadow-[inset_8px_8px_4px_rgba(0,0,0,0.25)]">
          <span className="text-[32px] text-black font-extrabold">?</span>
        </div>
        <div className="w-full flex justify-around text-white">
          <span className="">Cyberpunk 2</span>
          <span className="">1.0.6</span>
          <span className="text-amber-200">Incomplete</span>
          <span className="text-red-400">Unset</span>
        </div>
      </div>
    </div>
  );
}