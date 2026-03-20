export default function Experience() {
  return (
    <section id="experience" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 mb-4 tracking-wider uppercase">
            Background
          </span>
          <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">
            Experience &amp; Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Work Experience */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md">
                <i className="fas fa-briefcase text-white text-sm"></i>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-800">Work Experience</h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-sky-400 to-blue-100 rounded-full" />

              {/* Experience Item */}
              <div className="relative mb-8" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 border-2 border-white shadow-md" />
                <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                    <h4 className="font-display font-bold text-slate-800">Full Stack Developer</h4>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200">
                      Current
                    </span>
                  </div>
                  <p className="text-blue-600 text-sm font-semibold mb-1">Software Development</p>
                  <p className="text-slate-400 text-xs mb-3 flex items-center gap-1">
                    <i className="fas fa-calendar-alt text-blue-300"></i> 2022 – Present · 2.5+ Years
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Developed and maintained full-stack web applications using Next.js, React.js,
                    Node.js, and NestJS. Worked across diverse domains including food delivery,
                    healthcare, and real estate platforms.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Next.js', 'NestJS', 'Node.js', 'React.js'].map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Contributions */}
              <div className="relative mb-8" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 border-2 border-white shadow-md" />
                <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-display font-bold text-slate-800 mb-2">Key Contributions</h4>
                  <p className="text-slate-400 text-xs mb-4 flex items-center gap-1">
                    <i className="fas fa-star text-sky-300"></i> Highlights from Projects
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Built scalable REST APIs with NestJS for pizza delivery platform',
                      'Developed admin panels and customer-facing UIs with Next.js',
                      'Implemented real estate property listing and search systems',
                      'Contributed to healthcare UI for BrainCura doctor finder app',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="text-blue-500 mt-0.5">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-md">
                <i className="fas fa-graduation-cap text-white text-sm"></i>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-800">Education</h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-400 to-indigo-100 rounded-full" />

              {/* MCA */}
              <div className="relative mb-8" data-aos="fade-up" data-aos-delay="150">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-600 to-violet-500 border-2 border-white shadow-md" />
                <div className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                    <h4 className="font-display font-bold text-slate-800">
                      Master of Computer Applications
                    </h4>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full border border-indigo-200">
                      MCA
                    </span>
                  </div>
                  <p className="text-indigo-600 text-sm font-semibold mb-1">Postgraduate Degree</p>
                  <p className="text-slate-400 text-xs mb-3 flex items-center gap-1">
                    <i className="fas fa-calendar-alt text-indigo-300"></i> Completed
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Masters degree in Computer Applications with advanced coursework in software
                    engineering, database systems, web development, and computer networks. Developed
                    strong foundations in software architecture and problem-solving.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <i className="fas fa-award text-yellow-500"></i>
                    <span className="text-xs text-slate-500">
                      Advanced Computer Science &amp; Software Engineering
                    </span>
                  </div>
                </div>
              </div>

              {/* BCA */}
              <div className="relative mb-8" data-aos="fade-up" data-aos-delay="250">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 border-2 border-white shadow-md" />
                <div className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                    <h4 className="font-display font-bold text-slate-800">
                      Bachelor of Computer Applications
                    </h4>
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 text-xs font-semibold rounded-full border border-violet-200">
                      BCA
                    </span>
                  </div>
                  <p className="text-violet-600 text-sm font-semibold mb-1">Undergraduate Degree</p>
                  <p className="text-slate-400 text-xs mb-3 flex items-center gap-1">
                    <i className="fas fa-calendar-alt text-violet-300"></i> Completed
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Bachelor&apos;s degree in Computer Applications covering core programming concepts,
                    data structures, algorithms, web technologies, and software development
                    methodologies. Built a solid technical foundation.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <i className="fas fa-code text-blue-500"></i>
                    <span className="text-xs text-slate-500">
                      Programming, DSA, Web Technologies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
