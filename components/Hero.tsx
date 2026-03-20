"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const EMAIL = "reemaxisakariya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rimaxi-sakariya-29b635269";

const TITLES = [
  "Full Stack Developer",
  "Next.js Specialist",
  "React.js Developer",
  "Node.js Engineer",
];

const TECH_BADGES = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
    title: "Next.js",
    pos: "absolute -top-3 -right-3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
    title: "React.js",
    pos: "absolute top-1/2 -right-6",
    style: { transform: "translateY(-50%)" },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
    title: "Node.js",
    pos: "absolute -bottom-3 -right-3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    title: "TypeScript",
    pos: "absolute -bottom-3 -left-3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    alt: "NestJS",
    title: "NestJS",
    pos: "absolute top-1/2 -left-6",
    style: { transform: "translateY(-50%)" },
  },
];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function typeWriter() {
      const el = typedRef.current;
      if (!el) return;
      const currentTitle = TITLES[titleIndex];
      if (!isDeleting) {
        el.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentTitle.length) {
          isDeleting = true;
          timer = setTimeout(typeWriter, 2000);
          return;
        }
      } else {
        el.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % TITLES.length;
        }
      }
      timer = setTimeout(typeWriter, isDeleting ? 60 : 100);
    }

    typeWriter();
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Decorative blobs */}
      <div
        className="shape blob w-96 h-96 bg-blue-400 top-10 -right-20"
        style={{ opacity: 0.06 }}
      />
      <div
        className="shape blob w-64 h-64 bg-sky-300 bottom-20 -left-10"
        style={{ opacity: 0.08, animationDelay: "3s" }}
      />
      <div
        className="shape w-40 h-40 rounded-full bg-blue-300 top-1/3 left-1/4"
        style={{ opacity: 0.05 }}
      />

      {/* Floating dots grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.04 }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="#3b82f6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          {/* Left: Text */}
          <div
            className="flex-1 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-700 tracking-wide">
                Available for Freelance &amp; Full-time
              </span>
            </div>

            <h1 className="hero-title text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-slate-800 leading-tight mb-4">
              Hi, I&apos;m <br />
              <span className="gradient-text">Rimaxi</span>
              <span className="text-slate-800"> Sakariya</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
              <p className="text-xl font-display font-semibold text-slate-600">
                <span ref={typedRef} className="gradient-text-warm"></span>
                <span className="cursor text-blue-500">|</span>
              </p>
            </div>

            <p className="text-base text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Full-stack developer specializing in building modern, responsive
              web applications. Passionate about solving real-world problems
              through clean, maintainable code and seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-sky-600 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <i className="fas fa-rocket text-sm"></i>
                View My Work
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-2xl shadow-md border border-blue-100 hover:shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <i className="fas fa-envelope text-sm"></i>
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <i className="fas fa-envelope text-sm"></i>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center lg:justify-start">
              {[
                { value: "2.5+", label: "Years Experience" },
                { value: "4+", label: "Projects Delivered" },
                { value: "5+", label: "Technologies" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px bg-blue-100 h-10" />}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-display font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div
            className="flex-shrink-0 flex justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-400 to-sky-300 opacity-20 blur-2xl animate-pulse-slow" />

              {/* Avatar circle */}
              <div className="avatar-ring w-64 h-64 lg:w-80 lg:h-80 relative z-10 animate-float shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center border-4 border-white overflow-hidden">
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-sky-50">
                    <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg mb-2">
                      <span className="text-5xl lg:text-6xl font-display font-bold text-white">
                        RS
                      </span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium">
                      Full Stack Dev
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech badges */}
              {TECH_BADGES.map((badge) => (
                <div
                  key={badge.alt}
                  className={`${badge.pos} w-12 h-12 rounded-2xl bg-white shadow-lg border border-blue-100 flex items-center justify-center z-20 hover:scale-110 transition-transform`}
                  style={badge.style}
                  title={badge.title}
                >
                  <Image
                    src={badge.src}
                    width={28}
                    height={28}
                    alt={badge.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs text-slate-400 font-medium">Scroll down</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
