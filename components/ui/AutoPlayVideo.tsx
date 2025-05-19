interface AutoPlayVideoProps {
  videoUrl: string;
  type: "video/webm" | "video/mp4"
}

export default function AutoPlayVideo ({ videoUrl, type }: AutoPlayVideoProps) {
  return (
    <div className="w-[100%]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      >
        <source src={videoUrl} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}