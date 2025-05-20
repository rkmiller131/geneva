import FilterListSection from "../text-content/FilterListSection";
import Image from "next/image";

const filters = [
  {
    id: 7824632874368,
    header: "GENRE",
    items: [
      "Early Access",
      "Action",
      "Adventure",
      "Casual",
      "Indie",
      "Massively Multiplayer",
      "Racing",
      "RPG",
      "Simulation",
      "Sports",
      "Strategy"
    ]
  },
  {
    id: 109238091238902,
    header: "TRENDING",
    items: [
      "Top Sellers",
      "Popular Upcoming",
      "Newly Added"
    ]
  },
  {
    id: 74738284,
    header: "GAME MODE",
    items: [
      "Couch Play",
      "Single Player",
      "Multiplayer",
      "Controller Friendly"
    ]
  }
]

export default function PaginatedGameList () {
  return (
    <div className="relative flex bg-charcoal py-6 rounded-lg border border-[0.3px] border-gray-300">
      <Image
        src="/images/cloud-major.webp"
        alt="large cloud texture"
        width={1080}
        height={1080}
        className="absolute scale-125 rotate-[27deg] top-[-25px] z-[-1]"
      />
      <div className="flex flex-col gap-6 cursor-not-allowed bg-charcoal">
        {filters.map((filterSection) =>
          <FilterListSection
            header={filterSection.header}
            items={filterSection.items}
            isUnderlined={true}
            key={filterSection.id}
          />
        )}
      </div>
      <div className="w-full overflow-x-hidden overflow-y-clip">
        <Image
          src="/images/cloud-major.webp"
          alt="large cloud texture"
          width={1080}
          height={1080}
          className="scale-130 rotate-[27deg] mt-[25px]"
        />
      </div>
    </div>
  );
}

// const PaginatedGameList = () => {
//   const [selectedGenre, setSelectedGenre] = useState() // not sure what default should be
//   // content lives here
//   // row span
//   return <div>
//     {/* This top div should have an absolutely positioned a-z, star, purchase icon above it */}\
//     {/* The top three buttons shoudl be absolutely positioned. The main div should be relative */}
//     {/* Absolutely positioned divs should be a negative value that is equal to expected height */}
//     {/* scss: display: row; flex-grow:1 */}
//   {/* 2 part row span with cols display: flex; flex-grow: 1*/}
//   {/* left column */}
//   <div>
//     {/* Genre Left nav tabs */}

//   </div>
//   {/* col:  display: flex; flex-grow: 1*/}
//   <div>


//   {/* this should be the list page */}
//   <GamesList games={}/>
//   </div>





//   </div>
// }
