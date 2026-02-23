"use client";
import React, { useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from 'react-icons/si';

export default function TechLogos() {
    const items: { name: string; Icon: React.ComponentType<any> }[] = [
        { name: 'JavaScript', Icon: SiJavascript },
        { name: 'TypeScript', Icon: SiTypescript },
        { name: 'React', Icon: SiReact },
        { name: 'Next.js', Icon: SiNextdotjs },
        { name: 'Node', Icon: SiNodedotjs },
        { name: 'Tailwind', Icon: SiTailwindcss },
    ];

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = (clientX - innerWidth / 2) / innerWidth;
    const y = (clientY - innerHeight / 2) / innerHeight;

    setPosition({ x, y });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="mt-4 flex items-center justify-center gap-6 flex-wrap"
            >
 {items.map(({ name, Icon }, index) => (
  <div
    key={name}
    className="flex items-center justify-center w-14 h-14"
    style={{
      animation: `
        float-${index} ${3 + index * 0.3}s ease-in-out infinite,
        waveColorStrong 4s ease-in-out infinite
      `,
      animationDelay: `${index * 0.5}s`
    }}
    title={name}
    aria-label={name}
  >
    <Icon className="w-8 h-8 text-current transition-colors duration-300" />
  </div>
))}
        </div>
    );
}
