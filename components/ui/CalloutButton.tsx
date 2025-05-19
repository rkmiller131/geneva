interface CalloutButtonProps {
  text: string;
}
// @TODO Make this an actual button that links to a real page, accept more props
export default function CalloutButton({ text }: CalloutButtonProps) {
  return (
    <div className="cursor-not-allowed font-ember px-4 py-1 rounded-sm gradient-sky drop-shadow-[-2px_2px_2px_rgba(0,49,128,0.5)] hover:opacity-75 text-sm">
      {text}
    </div>
  );
}