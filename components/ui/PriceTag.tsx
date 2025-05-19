import GoToButton from "./GoToButton";

interface PriceTagProps {
  isOnSale: boolean;
  basePrice: number;
  salePercentage?: number;
  displayGoTo?: boolean;
  onClick?: () => void;
  vanilla?: boolean;
}

export default function PriceTag({ isOnSale, basePrice, salePercentage, onClick, vanilla, displayGoTo = true }: PriceTagProps) {
  const salePrice = salePercentage ? ((100 - salePercentage) / 100 * basePrice).toFixed(2) : 0;

  if (vanilla) {
    return (
      <div>
        {isOnSale && salePrice ? (
            <div className="flex  gap-2 items-center">
              <span className="relative text-sm text-gray-300">
                <span className="inline-block">{`$${basePrice}`}</span>
                <span className="absolute left-0 top-1/2 w-full h-0.5 bg-accent transform -rotate-12 origin-center"></span>
              </span>
              <span className="text-md">
                {`$${salePrice}`}
              </span>
            </div>
          ) : (
            <div className="text-md">
              {`$${basePrice}`}
            </div>
          )
        }
      </div>
    );
  }

  return (
    <div className="flex rounded-md items-center bg-charcoal pr-2 w-max">
      {isOnSale && salePercentage && (
        <div className="px-2 py-3 bg-[#003180] shadow-[inset_6px_6px_6px_rgba(0,0,0,0.3)] rounded-tl-md rounded-bl-md text-sm">
          {`${salePercentage}%`}
        </div>
      )}

      {isOnSale && salePrice ? (
          <div className="flex flex-col items-center px-4">
            <span className="relative text-xs text-gray-300">
              <span className="inline-block">{`$${basePrice}`}</span>
              <span className="absolute left-0 top-1/2 w-full h-0.5 bg-accent transform -rotate-12 origin-center"></span>
            </span>
            <span className="text-sm">
              {`$${salePrice}`}
            </span>
          </div>
        ) : (
          <div className="px-4 py-3 text-sm">
            {`$${basePrice}`}
          </div>
        )
      }
      {displayGoTo && onClick && (
        <GoToButton onClick={onClick} />
      )}
    </div>
  );
}