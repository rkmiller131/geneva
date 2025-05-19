export default function GameTag({ text }: { text: string }) {
  return (
    <span className="bg-charcoal py-1 px-3 rounded-full text-xs font-callout">
      {text}
    </span>
  );
}