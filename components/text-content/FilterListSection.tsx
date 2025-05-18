interface FilterListSectionProps {
  header: string;
  items: string[]; // @TODO eventually this can be an arr of objects with the title, link, or filter function in it
}

export default function FilterListSection({ header, items }: FilterListSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-header text-lg text-accent">
        {header}
      </span>

      <div className="font-body flex flex-col gap-1 text-primary">
        {items.map((item, i) => {
          return (
            <span key={i}>{item}</span>
          )
        })}
      </div>
    </div>
  );
}