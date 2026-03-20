"use client";

import { useState } from "react";

const EMAIL = "reemaxisakariya@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rimaxi-sakariya-29b635269";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200 mb-4 tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl font-display font-bold text-slate-800 mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-display font-bold text-slate-800 mb-6">
              Ready to bring your <br />
              <span className="gradient-text">vision to life?</span>
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Whether you need a
              full-stack web app or a polished frontend — let&apos;s connect!
            </p>

            <div className="space-y-4">
              {/* Email card */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">Email</div>
                  <div className="font-semibold text-slate-800 text-sm">
                    {EMAIL}
                  </div>
                </div>
                <i className="fas fa-arrow-right text-blue-400 ml-auto group-hover:translate-x-1 transition-transform"></i>
              </a>

              {/* LinkedIn card */}
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-sky-50 rounded-2xl border border-sky-100 hover:bg-sky-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-blue-500 flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin-in text-white"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-0.5">LinkedIn</div>
                  <div className="font-semibold text-slate-800 text-sm">
                    Rimaxi Sakariya
                  </div>
                </div>
                <i className="fas fa-arrow-right text-sky-400 ml-auto group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-display font-bold text-slate-800 mb-6">
                Send Me a Message
              </h3>

              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Collaboration"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-blue-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-sky-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    <i className="fas fa-paper-plane text-sm"></i>
                    <span>{sending ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              ) : (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500 text-lg"></i>
                  <div>
                    <div className="font-semibold text-green-800 text-sm">
                      Message Sent!
                    </div>
                    <div className="text-green-600 text-xs">
                      Thank you! Rimaxi will get back to you soon.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
