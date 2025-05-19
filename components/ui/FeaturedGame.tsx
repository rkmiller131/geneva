import GameTag from "../text-content/GameTag";

interface FeaturedGameProps {
  game: {
    id: number;
    title: string;
    bannerUrl: string;
    videoUrl: string;
    tags: string[];
  }
}

// @TODO a lot of logic for tags/recommended left unsaid

export default function FeaturedGame({ game }: FeaturedGameProps) {
  return (
    <div className="flex gap-3 w-full justify-between">
      <div className={`w-[55%] border border-3 border-gray-300 rounded-md bg-[url(${game.bannerUrl})] bg-cover bg-center`} />

      {/* RIGHT SIDE */}
      <div className="mt-10 flex flex-col w-[45%] border border-[0.3px] border-gray-300 p-3 gap-3 bg-[rgba(0,83,185,0.5)] rounded-md">
        <span className="font-header text-lg">
          {game.title}
        </span>
        <div className="w-[100%]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src={game.videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p>
          <span className="font-body text-accent">Recommended </span>
          because you played games tagged with:
        </p>
        {/* TAGS */}
        <div className="flex gap-1 flex-wrap">
          {game.tags.map((tag, i) => (
            <GameTag text={tag} key={i} />
          ))}
        </div>
      </div>

    </div>
  );
}