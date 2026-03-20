const PROJECTS = [
  {
    emoji: '🍕',
    title: 'Pizza Delivery Platform',
    label: 'Pizza Delivery',
    badge: 'Full Stack',
    gradient: 'from-orange-400 via-red-400 to-pink-400',
    cardGradient: 'from-white to-blue-50',
    cardBorder: 'border-blue-100',
    desc: 'A full-stack online pizza ordering and delivery platform featuring real-time order tracking, customer-facing storefront, and a comprehensive admin panel for managing orders, menu items, and deliveries.',
    tags: ['Next.js', 'NestJS', 'Node.js', 'Admin Panel', 'REST API'],
    dotLeft: { color: 'bg-green-400', label: 'Frontend + Backend' },
    dotRight: { color: 'bg-blue-400', label: 'Admin Panel' },
    delay: 0,
  },
  {
    emoji: '🏥',
    title: 'Gentlemen — Doctor Finder',
    label: 'Gentlemen (London)',
    badge: 'Healthcare',
    gradient: 'from-slate-600 via-slate-700 to-slate-800',
    cardGradient: 'from-white to-sky-50',
    cardBorder: 'border-sky-100',
    desc: 'A London-based healthcare platform where doctors can register and showcase their clinics, and patients can easily search and discover nearby medical professionals. Features include clinic profiles, search/filter functionality, and booking flows.',
    tags: ['Next.js', 'Healthcare', 'London', 'Search & Filter', 'Clinic Profiles'],
    dotLeft: { color: 'bg-green-400', label: 'Doctor Registration' },
    dotRight: { color: 'bg-sky-400', label: 'User Discovery' },
    delay: 100,
  },
  {
    emoji: '🏠',
    title: 'Real Estate — Buy & Sell',
    label: 'Real Estate Platform',
    badge: 'Full Stack',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    cardGradient: 'from-white to-emerald-50',
    cardBorder: 'border-emerald-100',
    desc: 'A comprehensive real estate platform for buying and selling properties. Built with Next.js for the frontend with an integrated backend, featuring property listings, advanced search filters, property details, and secure contact/inquiry flows.',
    tags: ['Next.js', 'Full Stack', 'Property Listings', 'Search Filters', 'Inquiries'],
    dotLeft: { color: 'bg-green-400', label: 'Buy & Sell Flow' },
    dotRight: { color: 'bg-teal-400', label: 'Integrated Backend' },
    delay: 200,
  },
  {
    emoji: '🧠',
    title: 'BrainCura — Doctor Finder',
    label: 'BrainCura',
    badge: 'UI Dev',
    gradient: 'from-violet-500 via-purple-500 to-indigo-600',
    cardGradient: 'from-white to-violet-50',
    cardBorder: 'border-violet-100',
    desc: 'A healthcare web application focused on helping users find specialized doctors and medical professionals. Contributed to the UI development using Next.js, building clean and intuitive interfaces for seamless patient-doctor connections.',
    tags: ['Next.js', 'Healthcare', 'UI Development', 'Doctor Finder', 'UX Design'],
    dotLeft: { color: 'bg-green-400', label: 'Frontend/UI' },
    dotRight: { color: 'bg-violet-400', label: 'Next.js Specialist' },
    delay: 300,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 mb-4 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Real-world applications I&apos;ve built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`card-hover bg-gradient-to-br ${project.cardGradient} rounded-3xl border ${project.cardBorder} overflow-hidden shadow-sm`}
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              {/* Project header image */}
              <div
                className={`h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
              >
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-2">{project.emoji}</div>
                  <span className="text-white font-bold text-lg">{project.label}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-full font-medium border border-white/30">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project body */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.dotLeft.color}`} />
                    <span className="text-xs text-slate-400">{project.dotLeft.label}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className={`w-2 h-2 rounded-full ${project.dotRight.color}`} />
                    <span className="text-xs text-slate-400">{project.dotRight.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
