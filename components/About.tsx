import Image from "next/image";

const EMAIL = "reemaxisakariya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rimaxi-sakariya-29b635269";

const INFO_CARDS = [
  { icon: "fa-briefcase", label: "Experience", value: "2.5+ Years" },
  { icon: "fa-graduation-cap", label: "Education", value: "MCA (Masters)" },
  { icon: "fa-map-marker-alt", label: "Availability", value: "Open to Work" },
];

const CAPABILITIES = [
  {
    icon: "fa-desktop",
    bg: "bg-blue-600",
    wrapBg: "bg-blue-50 border-blue-100",
    title: "Frontend Development",
    desc: "Crafting pixel-perfect, responsive UIs with Next.js and React.js, ensuring seamless user experiences.",
  },
  {
    icon: "fa-server",
    bg: "bg-sky-500",
    wrapBg: "bg-sky-50 border-sky-100",
    title: "Backend Development",
    desc: "Building scalable, secure REST APIs with Node.js and NestJS to power modern web applications.",
  },
  {
    icon: "fa-layer-group",
    bg: "bg-indigo-500",
    wrapBg: "bg-indigo-50 border-indigo-100",
    title: "Full Stack Solutions",
    desc: "Delivering end-to-end web solutions from database design to deployment, handling every layer of the stack.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 mb-4 tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">
            Who Am I?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info cards */}
          <div data-aos="fade-right" data-aos-duration="700">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100 opacity-40" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-sky-100 opacity-40" />

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-3">
                  Rimaxi Sakariya
                </h3>
                <p className="text-blue-600 font-semibold mb-5">
                  Full Stack Developer
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Full-stack developer specializing in building modern,
                  responsive web applications. Experienced in both frontend and
                  backend development, with a focus on writing clean,
                  maintainable code and creating seamless user experiences.
                  Passionate about solving real-world problems through
                  technology.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {INFO_CARDS.map((card) => (
                    <div
                      key={card.label}
                      className="bg-white rounded-2xl p-4 border border-blue-50 shadow-sm"
                    >
                      <div className="text-blue-500 mb-2">
                        <i className={`fas ${card.icon}`}></i>
                      </div>
                      <div className="text-xs text-slate-400 mb-1">
                        {card.label}
                      </div>
                      <div className="font-bold text-slate-800">
                        {card.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <i className="fas fa-envelope text-xs"></i> Email Me
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 text-sm font-semibold rounded-xl border border-blue-200 shadow-sm hover:bg-blue-50 transition-all hover:-translate-y-0.5"
                  >
                    <i className="fab fa-linkedin text-xs"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-5">
              My Journey as a Developer
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              With over <strong className="text-blue-600">2.5 years</strong> of
              professional development experience, I&apos;ve had the opportunity
              to work on diverse projects — from food delivery platforms to
              healthcare applications and real estate systems. Each project has
              sharpened my skills and deepened my understanding of building
              scalable, real-world applications.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              I specialize in the{" "}
              <strong className="text-blue-600">
                Next.js / React.js ecosystem
              </strong>{" "}
              for frontend, paired with{" "}
              <strong className="text-blue-600">Node.js and NestJS</strong> for
              robust backend development. I&apos;m always eager to learn new
              technologies and embrace new challenges.
            </p>

            <div className="space-y-4">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className={`flex items-start gap-4 p-4 rounded-2xl border ${cap.wrapBg}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${cap.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <i className={`fas ${cap.icon} text-white text-sm`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-sm text-slate-500">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
