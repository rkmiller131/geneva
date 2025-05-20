interface FilterListSectionProps {
  header: string;
  items: string[]; // @TODO eventually this can be an arr of objects with the title, link, or filter function in it
  isUnderlined?: boolean;
}

export default function FilterListSection({ header, items, isUnderlined = false }: FilterListSectionProps) {
  return (
    <div className="flex flex-col gap-2 w-max">
      <span className={`font-header text-lg text-accent ${isUnderlined && "px-4"}`}>
        {header}
      </span>

      <div className="font-body flex flex-col gap-1 text-primary">
        {items.map((item, i) => {
          return (
            <span
              className={isUnderlined ? "border-b border-gray-300 px-4 py-1" : ""}
              key={i}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}