"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      number: "01",
      type: "PYTHON · CLI",
      title: "Money Tracker",
      description:
        "A personal finance CLI tool for tracking income, expenses, spending categories, and remaining balance.",
      tech: ["Python", "CLI", "Functions", "Data Handling"],
    },
    {
      number: "02",
      type: "PYTHON · AUTOMATION",
      title: "Exam Supervision Reminder",
      description:
        "A Python reminder system for tracking exam supervision schedules and notifying staff when supervision duties are approaching.",
      tech: ["Python", "Automation", "datetime", "Termux"],
    },
    {
      number: "03",
      type: "NEXT.JS · API",
      title: "Weather Dashboard",
      description:
        "A dark-themed weather dashboard using location search and weather data to display current conditions and forecasts.",
      tech: ["Next.js", "JavaScript", "API", "CSS"],
    },
    {
      number: "04",
      type: "WEB · PORTFOLIO",
      title: "HORLAR_DEV Portfolio",
      description:
        "My personal developer portfolio, designed, coded, and deployed from a phone while documenting my journey as a Computer Science student.",
      tech: ["Next.js", "Tailwind", "Git", "GitHub", "Vercel"],
      links: true,
    },
  ];

  const skills = [
    ["HTML / CSS", "Building", "70%"],
    ["Python", "Building", "60%"],
    ["Python Automation", "Learning", "50%"],
    ["Git / GitHub", "Learning", "45%"],
    ["JavaScript / Next.js", "Learning", "35%"],
    ["Software Testing / QA", "Learning", "35%"],
  ];

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold tracking-wide">
            <span className="text-cyan-400">HORLAR</span>
            <span className="text-white">_DEV</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0d1117] px-6 py-4 md:hidden">
            {["about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/5 py-4 text-sm capitalize text-gray-400 transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-cyan-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          COMPUTER SCIENCE STUDENT · BUILDING
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Learning software.
          <br />
          Building real things.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            One skill at a time.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
          Computer Science student at Usmanu Danfodiyo University,
          self-taught developer, and Python automation learner. I build
          practical projects from Android while developing my skills in
          software development, testing, and automation.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-cyan-400 px-6 py-3 font-mono text-sm font-bold text-black transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            View my work →
          </a>

          <a
            href="#contact"
            className="rounded-md border border-white/10 px-6 py-3 font-mono text-sm transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-sm tracking-widest text-cyan-400">
            01 / ABOUT
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            A developer in progress, with a plan.
          </h2>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <p className="leading-8 text-gray-400">
                I&apos;m a Computer Science student at Usmanu Danfodiyo
                University, currently building my foundation in software
                development, Python automation, web development, and software
                testing.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                I learn by building practical projects rather than just
                following tutorials. My development workflow is built around
                Android and Termux, proving that limited hardware doesn&apos;t
                have to stop the learning process.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "UDUS · COMPUTER SCIENCE",
                  "PYTHON AUTOMATION",
                  "WEB DEVELOPMENT",
                  "SOFTWARE TESTING",
                  "TERMUX / ANDROID",
                  "ALWAYS BUILDING",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 px-3 py-2 font-mono text-xs text-gray-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["UDUS · CS", "Computer Science student at Usmanu Danfodiyo University"],
                ["PHONE-BUILT", "Development workflow running through Android and Termux"],
                ["BUILD → TEST → IMPROVE", "Learning through practical projects and experimentation"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-[#0d1117] p-6"
                >
                  <b className="font-mono text-xl text-cyan-400">{title}</b>
                  <p className="mt-2 text-sm text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#0d1117] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-sm tracking-widest text-cyan-400">
            02 / PROJECTS
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Things I&apos;ve actually built.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Practical projects built while learning — from Python automation
            to web applications and developer tools.
          </p>

          <div className="mt-12 space-y-5">
            {projects.map((project) => (
              <div
                key={project.number}
                className="rounded-xl border border-white/10 bg-[#08090d] p-7 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs tracking-wider text-cyan-400">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <span className="font-mono text-3xl font-bold text-white/10">
                    {project.number}
                  </span>
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {project.links && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/balloghun-stack/my-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-white/10 px-3 py-2 font-mono text-xs text-cyan-400 transition hover:border-cyan-400"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="https://my-portfolio-sand-zeta-58.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded border border-white/10 px-3 py-2 font-mono text-xs text-cyan-400 transition hover:border-cyan-400"
                    >
                      Live Site ↗
                    </a>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-cyan-400/10 px-2.5 py-1 font-mono text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-sm tracking-widest text-cyan-400">
            03 / SKILLS
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Tools of the trade.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Current skill levels are intentionally honest and will change as
            I build more projects and gain more experience.
          </p>

          <div className="mt-12 max-w-3xl space-y-7">
            {skills.map(([name, status, width]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between font-mono text-sm">
                  <span>{name}</span>
                  <span className="text-gray-500">{status}</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#0d1117] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-sm tracking-widest text-cyan-400">
            04 / CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Let&apos;s build something real.
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Open to development opportunities, QA/testing work,
            collaborations, or just a good conversation about code.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <a
              href="mailto:balloghun@gmail.com"
              className="rounded-xl border border-white/10 bg-[#08090d] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="text-3xl">✉️</div>
              <p className="mt-3 font-mono text-xs tracking-wider text-gray-500">
                EMAIL
              </p>
              <p className="mt-1 text-sm">balloghun@gmail.com</p>
            </a>

            <a
              href="https://wa.me/2348106397768"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#08090d] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="text-3xl">💬</div>
              <p className="mt-3 font-mono text-xs tracking-wider text-gray-500">
                WHATSAPP
              </p>
              <p className="mt-1 text-sm">+234 810 639 7768</p>
            </a>

            <a
              href="https://github.com/balloghun-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#08090d] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="text-3xl">🐙</div>
              <p className="mt-3 font-mono text-xs tracking-wider text-gray-500">
                GITHUB
              </p>
              <p className="mt-1 text-sm">@balloghun-stack</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center font-mono text-xs text-gray-500">
        © 2026 HORLAR_DEV — Built entirely from a phone 📱 · Still learning.
        Still building.
      </footer>
    </main>
  );
}
