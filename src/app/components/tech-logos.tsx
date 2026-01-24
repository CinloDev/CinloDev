import React from 'react';
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

  return (
    <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
      {items.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 hover:scale-105 transition-transform"
          title={name}
          aria-label={name}
        >
          <Icon className="w-5 h-5 md:w-8 md:h-8 text-current" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}
