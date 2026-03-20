"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ImgPill = { src: string; label: string }; // always has src
type IconPill = { icon: string; label: string }; // always has icon
type Pill = ImgPill | IconPill;

const SKILL_BARS = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
    percent: 90,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React.js",
    percent: 88,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
    percent: 82,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
    name: "NestJS",
    percent: 78,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    name: "TypeScript",
    percent: 80,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    percent: 85,
  },
];

const SKILL_PILLS = {
  Frontend: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      label: "Next.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      label: "React.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      label: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      label: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      label: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      label: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      label: "CSS3",
    },
  ],
  Backend: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      label: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
      label: "NestJS",
    },
    { icon: "fa-plug", label: "REST APIs" },
    { icon: "fa-database", label: "PostgreSQL" },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      label: "MongoDB",
    },
  ],
  "Tools & DevOps": [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      label: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      label: "GitHub",
    },
    { icon: "fab fa-figma", label: "Figma" },
    { icon: "fa-terminal", label: "VS Code" },
    { icon: "fab fa-docker", label: "Docker" },
  ],
};

function isImgPill(pill: Pill): pill is ImgPill {
  return "src" in pill;
}

export default function Skills() {
  const skillBarRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.3 },
    );
    skillBarRefs.current.forEach((bar) => bar && observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 mb-4 tracking-wider uppercase">
            Skills &amp; Expertise
          </span>
          <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">
            My Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill Bars */}
          <div data-aos="fade-right">
            <h3 className="text-xl font-display font-bold text-slate-800 mb-6">
              Proficiency Levels
            </h3>
            <div className="space-y-6">
              {SKILL_BARS.map((skill, i) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={skill.icon}
                        width={20}
                        height={20}
                        alt={skill.name}
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-blue-600">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      ref={(el) => {
                        if (el) skillBarRefs.current[i] = el;
                      }}
                      className="progress-bar"
                      style={
                        {
                          "--progress": `${skill.percent}%`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Pills */}
          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-xl font-display font-bold text-slate-800 mb-6">
              Technologies &amp; Tools
            </h3>
            {Object.entries(SKILL_PILLS).map(([category, pills]) => (
              <div key={category} className="mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pills.map((pill) => (
                    <span
                      key={pill.label}
                      className="skill-pill px-4 py-2 rounded-xl text-sm font-semibold text-blue-700 cursor-default flex items-center gap-2"
                    >
                      {isImgPill(pill) ? (
                        <Image
                          src={pill.src}
                          width={16}
                          height={16}
                          alt={pill.label}
                        />
                      ) : (
                        <i className={`${pill.icon} text-xs`} />
                      )}
                      {pill.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
