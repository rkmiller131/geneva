interface CarouselPaginationProps {
  pageCount: number;
  currentPage: number;
}

export default function CarouselPagination({ pageCount, currentPage }: CarouselPaginationProps) {
  const pagesArray = Array.from({ length: pageCount }, (_, i) => i);

  return (
    <div className="flex gap-1">
      {pagesArray.map((pageIndex, i) => (
        <div key={i} className={`w-[35px] h-[12px]
          ${pageIndex === currentPage ? "bg-accent" : "bg-gradient-to-b from-[#C0C0C0] to-[#FFFFFF]"}`}
        />
      ))}
    </div>
  );
}