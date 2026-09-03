"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-white">H</span>
            <span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-gray-400">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}

{/* Hero */}
<section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
  <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="relative mx-auto w-full max-w-6xl">
    <p className="mb-5 font-mono text-sm text-cyan-400">
      &gt; identity: HORLAR_DEV
    </p>

    <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-8xl">
      HORLAR_DEV
      <br />
      <span className="text-gray-600">
        Building beyond the obvious.
      </span>
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
      Computer Science student and developer in progress.
      Exploring code, technology, and ideas that turn into something real.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105"
      >
        Explore projects →
      </a>

      <a
        href="#about"
        className="rounded-full border border-white/15 px-7 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
      >
        Discover more
      </a>
    </div>

    <div className="mt-20 flex items-center gap-3 font-mono text-xs text-gray-600">
      <span className="h-px w-10 bg-gray-700" />
      SYSTEM ONLINE
    </div>
  </div>
</section>
      {/* About */}
{/* About */}
<section id="about" className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 font-mono text-sm text-cyan-400">
      01 / ABOUT
    </p>

    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
          Not much to say.
          <br />
          <span className="text-gray-600">Still a lot to build.</span>
        </h2>
      </div>

      <div>
        <p className="text-lg leading-8 text-gray-400">
          I'm a Computer Science student exploring the space between an idea
          and the code that makes it real.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          Currently learning, experimenting, and building — one project at
          a time. The goal isn't to know everything. It's to keep getting
          better.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "CS STUDENT",
            "PYTHON",
            "WEB DEV",
            "PROBLEM SOLVING",
            "ALWAYS LEARNING",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-4 py-2 font-mono text-xs text-gray-500 transition hover:border-cyan-400/40 hover:text-cyan-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Projects */}



{/* Projects */}
<section id="projects" className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 font-mono text-sm text-cyan-400">
      02 / PROJECTS
    </p>

    <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <h2 className="text-4xl font-bold sm:text-5xl">
        Things I've built.
      </h2>

      <p className="max-w-sm text-sm leading-6 text-gray-600">
        A collection of experiments, ideas, and projects built while
        learning.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      {/* Project 01 */}
      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

        <div className="relative">
          <div className="mb-16 flex items-center justify-between">
            <span className="font-mono text-sm text-cyan-400">
              01
            </span>

            <span className="text-xl text-gray-600 transition group-hover:text-cyan-400">
              ↗
            </span>
          </div>

          <p className="mb-2 font-mono text-xs text-gray-600">
            PYTHON / PERSONAL PROJECT
          </p>

          <h3 className="text-2xl font-semibold">
            Money Tracker
          </h3>

          <p className="mt-4 max-w-md leading-7 text-gray-400">
            A simple personal finance program that calculates spending,
            tracks expenses, and shows how much money remains.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Python", "CLI", "Logic"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Project 02 */}
      <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-400/5 blur-3xl transition group-hover:bg-purple-400/10" />

        <div className="relative">
          <div className="mb-16 flex items-center justify-between">
            <span className="font-mono text-sm text-cyan-400">
              02
            </span>

            <span className="text-xl text-gray-600 transition group-hover:text-cyan-400">
              ↗
            </span>
          </div>

          <p className="mb-2 font-mono text-xs text-gray-600">
            NEXT.JS / WEB PROJECT
          </p>

          <h3 className="text-2xl font-semibold">
            HORLAR_DEV Portfolio
          </h3>

          <p className="mt-4 max-w-md leading-7 text-gray-400">
            A personal developer portfolio designed and built from scratch
            to document my journey, projects, and experiments.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Next.js", "React", "Tailwind CSS"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Project 03 */}
      <article className="group relative overflow-hidden rounded-2xl border border-dashed border-white/10 p-7 transition duration-300 hover:border-cyan-400/30">
        <div className="mb-16 flex items-center justify-between">
          <span className="font-mono text-sm text-gray-600">
            03
          </span>

          <span className="font-mono text-xs text-gray-700">
            IN PROGRESS
          </span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-500">
          Something bigger.
        </h3>

        <p className="mt-4 max-w-md leading-7 text-gray-600">
          The next project hasn't been revealed yet.
        </p>

        <div className="mt-7">
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-700">
            CLASSIFIED
          </span>
        </div>
      </article>

    </div>
  </div>
</section>
      {/* Skills */}
{/* Skills */}
<section id="skills" className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 font-mono text-sm text-cyan-400">
      03 / SKILLS
    </p>

    <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
      <div>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
          Tools of the trade.
          <br />
          <span className="text-gray-600">Still expanding.</span>
        </h2>

        <p className="mt-6 max-w-md leading-7 text-gray-500">
          These are the technologies I'm currently learning and using.
          The list grows as the projects get harder.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d12]">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400/60" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
          <span className="h-3 w-3 rounded-full bg-green-400/60" />

          <span className="ml-3 font-mono text-xs text-gray-600">
            horlar@dev:~$
          </span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm">
          <p className="text-gray-600">
            $ cat skills.txt
          </p>

          <div className="mt-6 space-y-5">
            {[
              ["Python", "learning"],
              ["JavaScript", "learning"],
              ["HTML / CSS", "building"],
              ["React / Next.js", "learning"],
              ["Tailwind CSS", "building"],
              ["Git / GitHub", "learning"],
            ].map(([skill, status]) => (
              <div
                key={skill}
                className="flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span className="text-gray-300">
                  {skill}
                </span>

                <span
                  className={
                    status === "building"
                      ? "text-cyan-400"
                      : "text-gray-600"
                  }
                >
                  [{status}]
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-600">
            $ _
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Contact */}
{/* Contact */}
<section id="contact" className="border-t border-white/10 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <p className="mb-3 font-mono text-sm text-cyan-400">
      04 / CONTACT
    </p>

    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <h2 className="text-5xl font-bold leading-tight sm:text-6xl">
          Let's build
          <br />
          <span className="text-gray-600">something real.</span>
        </h2>

        <p className="mt-6 max-w-md leading-7 text-gray-500">
          Got an idea, project, or just want to connect?
          You know where to find me.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Email */}
        <a
          href="mailto:balloghun@gmail.com"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40"
        >
          <div>
            <p className="font-mono text-xs text-gray-600">
              EMAIL
            </p>
            <p className="mt-1 text-gray-300">
              balloghun@gmail.com
            </p>
          </div>

          <span className="text-xl text-gray-600 transition group-hover:text-cyan-400">
            ↗
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348106397768"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40"
        >
          <div>
            <p className="font-mono text-xs text-gray-600">
              WHATSAPP
            </p>
            <p className="mt-1 text-gray-300">
              +234 810 639 7768
            </p>
          </div>

          <span className="text-xl text-gray-600 transition group-hover:text-cyan-400">
            ↗
          </span>
        </a>

        {/* Call */}
        <a
          href="tel:+2348106397768"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/40"
        >
          <div>
            <p className="font-mono text-xs text-gray-600">
              PHONE
            </p>
            <p className="mt-1 text-gray-300">
              +234 810 639 7768
            </p>
          </div>

          <span className="text-xl text-gray-600 transition group-hover:text-cyan-400">
            ↗
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-gray-600 sm:flex-row">
          <p>© 2026. Built from a phone 📱</p>
          <p>Still learning. Still building.</p>
        </div>
      </footer>
    </main>
  );
}

