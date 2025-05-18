import Image from "next/image";

export default function NavArrow({ side, disabled }: { side: "left" | "right", disabled: boolean }) {
  if (disabled) {
    return (
      <Image
        src="/icons/leftnav-disabled.png"
        alt="Left nav arrow disabled"
        width={42}
        height={42}
        className={side === "right" ? "scale-x-[-1]": ""}
      />
    );
  }
  return (
    <Image
      src="/icons/leftnav-enabled.png"
      alt="Left nav arrow enabled"
      width={42}
      height={42}
      className={side === "right" ? "scale-x-[-1] w-[42px] h-auto": "w-[42px] h-auto"}
    />
  );
}