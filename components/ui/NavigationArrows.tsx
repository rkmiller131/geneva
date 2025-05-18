import { useNavigation } from "@/contexts/NavigationContext";


export default function NavigationArrows() {
  const { canGoBack, canGoForward, goBack, goForward } = useNavigation();
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={goBack}
        disabled={!canGoBack}
        className="cursor-pointer"
        aria-label="Go back"
      >
        {"<-"}
      </button>
      <button
        onClick={goForward}
        disabled={!canGoForward}
        className="cursor-pointer"
        aria-label="Go forward"
      >
        {"->"}
      </button>
    </div>
  );
}