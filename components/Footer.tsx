const EMAIL = "reemaxisakariya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rimaxi-sakariya-29b635269";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
              <span className="text-white font-bold font-display">RS</span>
            </div>
            <span className="font-display font-bold text-xl text-white">
              Rimaxi Sakariya
            </span>
          </div>

          <p className="text-slate-400 text-sm text-center max-w-md">
            Full Stack Developer passionate about building modern web
            applications with Next.js, React.js, and Node.js.
          </p>

          {/* Nav */}
          <div className="flex flex-wrap gap-6 justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
            >
              <i className="fab fa-linkedin-in text-sm"></i>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all"
            >
              <i className="fas fa-envelope text-sm"></i>
            </a>
          </div>

          <div className="border-t border-slate-800 pt-6 w-full text-center">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Rimaxi Sakariya · Built with ❤️ using
              Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
