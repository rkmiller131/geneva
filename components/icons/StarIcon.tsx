"use client";

import { CSSProperties, useState } from "react";

export default function StarIcon({ isActive }: { isActive: boolean }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const hoverColor = "#4081C4";
  const activeColor = "#0D0C15";
  const baseColor = "#fff";

  const svgStyles: CSSProperties = {
    transition: 'stroke 0.3s',
  };

  return (
    <div
      role="button"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <svg width="25" height="22" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyles}>
        <path d="M16 0L19.5922 11.0557H31.2169L21.8123 17.8885L25.4046 28.9443L16 22.1115L6.59544 28.9443L10.1877 17.8885L0.783095 11.0557H12.4078L16 0Z" fill={isActive ? activeColor : isHovered ? hoverColor : baseColor}/>
      </svg>
    </div>
  );
}