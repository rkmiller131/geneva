import FilterListSection from "../text-content/FilterListSection";

const sectionOne = ["Sports", "Simulation", "Football", "Action"];
const sectionTwo = ["Top Sellers", "New Releases", "Upcoming", "On Sale Now", "Controller Friendly"];
const sectionThree = ["Early Access", "Action", "Adventure", "Casual", "Indie", "Massively Multiplayer", "Racing", "RPG", "Simulation", "Sports", "Strategy"];

export default function GeneralStoreFilters() {
  return (
    <div className="flex flex-col gap-6 cursor-not-allowed">
      <FilterListSection header={"YOUR TAGS"} items={sectionOne}/>
      <FilterListSection header={"BROWSE CATEGORIES"} items={sectionTwo}/>
      <FilterListSection header={"BROWSE BY GENRE"} items={sectionThree}/>
    </div>
  );
}