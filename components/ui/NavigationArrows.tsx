import { useNavigation } from "@/contexts/NavigationContext";
import NavArrow from "./NavArrow";


export default function NavigationArrows() {
  const { canGoBack, canGoForward, goBack, goForward } = useNavigation();
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={goBack}
        disabled={!canGoBack}
        className="cursor-pointer"
        aria-label="Go back"
      >
        <NavArrow side={"left"} disabled={!canGoBack} />
      </button>
      <button
        onClick={goForward}
        disabled={!canGoForward}
        className="cursor-pointer"
        aria-label="Go forward"
      >
        <NavArrow side={"right"} disabled={!canGoForward} />
      </button>
    </div>
  );
}