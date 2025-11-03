"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Instagram, Youtube, Mail, MapPin, Sparkles } from "lucide-react";

// Light theme variant of the ONA landing page.
// Keep your original dark version intact in a separate file. This one is standalone.
export default function ONA_Light() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--paper", "#F7F5EF");
    root.style.setProperty("--ink", "#1E1B16");
    root.style.setProperty("--muted", "#5F5A52");
    root.style.setProperty("--gold", "#A47E2C");
  }, []);

  const paperTexture = {
    backgroundImage: [
      // soft vignette
      "radial-gradient(1200px 600px at 50% -10%, rgba(164,126,44,0.06), transparent)",
      // subtle vertical grain
      "repeating-linear-gradient(0deg, rgba(0,0,0,0.015) 0px, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 3px)",
      // base paper
      "linear-gradient(var(--paper), var(--paper))"
    ].join(",")
  } as React.CSSProperties;

  return (
    <div className="min-h-screen text-[var(--ink)]" style={paperTexture}>
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-full ring-1 ring-black/10 shadow-sm"
                 style={{ background: "conic-gradient(from 90deg, rgba(164,126,44,.28), rgba(0,0,0,.04), rgba(164,126,44,.28))" }} />
            <span className="font-serif tracking-wide text-sm md:text-base">ONA — The Initiation</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
            <a href="#vision" className="hover:text-[var(--ink)]">Vision</a>
            <a href="#experience" className="hover:text-[var(--ink)]">Experience</a>
            <a href="#gallery" className="hover:text-[var(--ink)]">Gallery</a>
            <a href="#venues" className="hover:text-[var(--ink)]">Venues</a>
            <a href="#contact" className="hover:text-[var(--ink)]">Contact</a>
          </nav>
          <a href="#trailer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white hover:bg-white/80 px-3 py-1.5 text-sm text-[var(--ink)]">
            <Play className="h-4 w-4" /> Trailer
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(80%_70%_at_50%_35%,black,transparent)]">
          <GridLight />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif text-4xl md:text-6xl leading-tight"
          >
            Awaken the Light of Your Own Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-5 max-w-2xl text-base md:text-lg text-[var(--muted)]"
          >
            An immersive art-journey unfolding across sacred landscapes, contemplative puzzles, and a living dialogue with the self. Designed for presence. Crafted for wonder.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#experience" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-white hover:brightness-110 px-5 py-2.5 font-medium">
              Enter the Journey <ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 hover:bg-white px-5 py-2.5 text-[var(--ink)]">
              Host the Pod
            </a>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <SectionLight id="vision" kicker="The Vision" title="A digital temple for timeless questions">
        <p className="text-[var(--muted)] max-w-3xl">
          ONA weaves film, motion design, and interactive choices into a contemplative space. Each path invites a question—about origin and destiny, humility and courage, the human and the divine.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {["Contemplative gameplay", "Immersive pod installation", "Evolving story architecture"].map((t, i) => (
            <li key={i} className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[var(--gold)]" />
                <div>
                  <p className="font-medium">{t}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">Subtle interactions, evocative visuals, and an original soundscape cultivate a sense of presence.</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionLight>

      {/* EXPERIENCE */}
      <SectionLight id="experience" kicker="The Experience" title="From Pod to Infinite Journey">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="rounded-3xl overflow-hidden border border-black/10 bg-white/80 shadow-sm">
            <div className="aspect-video w-full bg-black/5 grid place-content-center">
              <div className="text-center px-6">
                <p className="text-xs uppercase tracking-widest text-[var(--muted)]">Trailer Placeholder</p>
                <p className="mt-1 text-[var(--muted)]">Embed your AV trailer or a looping teaser here.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <BlockLight title="The Pod">
              A wooden shell with illuminated symbols—enclosing a single seat, a curved screen, and sound. Step in. Breathe. Choose your path.
            </BlockLight>
            <BlockLight title="The Game">
              A branching narrative of films and contemplative puzzles. Choose between archetypal gateways—origins and returns—guided by a voice that is, at times, your own.
            </BlockLight>
            <BlockLight title="The Journey Ahead">
              Exhibitions, limited-edition prints and wallpapers, and a growing network of pods worldwide. The journey is infinite; the steps are human.
            </BlockLight>
          </div>
        </div>
      </SectionLight>

      {/* GALLERY */}
      <SectionLight id="gallery" kicker="Gallery" title="Fragments of the Vision">
        <div className="grid gap-4 md:grid-cols-3">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white aspect-[4/3] shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 text-xs text-[var(--muted)]">Still {i}</div>
            </div>
          ))}
        </div>
      </SectionLight>

      {/* VENUES / ROADMAP */}
      <SectionLight id="venues" kicker="Roadmap" title="Where to encounter ONA">
        <div className="grid gap-6 md:grid-cols-3">
          <VenueCardLight title="Pyramids of Chi — Bali" when="Dec 2025 →" />
          <VenueCardLight title="KIKK Market — Belgium" when="TBA" />
          <VenueCardLight title="Airport Capsule — Concept" when="2026" />
        </div>
      </SectionLight>

      {/* CONTACT */}
      <SectionLight id="contact" kicker="Connect" title="Invite ONA to your space">
        <p className="max-w-2xl text-[var(--muted)]">Curators, venues, and collaborators are welcome. Share your intention—let’s shape a resonant experience for your audience.</p>
        <form className="mt-8 grid gap-4 md:max-w-xl">
          <input className="w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30" placeholder="Your name" />
          <input className="w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30" placeholder="Email or Instagram" />
          <textarea rows={4} className="w-full rounded-xl bg-white border border-black/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/30" placeholder="Tell us about your venue or intention" />
          <button className="justify-self-start inline-flex items-center gap-2 rounded-xl bg-[var(--ink)] hover:bg-black px-4 py-2 text-white">
            Send <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-[var(--muted)]">By sending, you agree to be contacted about ONA. No spam, no noise.</p>
        </form>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <a className="inline-flex items-center gap-2 hover:text-[var(--ink)]" href="#"><Instagram className="h-4 w-4"/> @wizardmotion</a>
          <a className="inline-flex items-center gap-2 hover:text-[var(--ink)]" href="#"><Youtube className="h-4 w-4"/> YouTube</a>
          <a className="inline-flex items-center gap-2 hover:text-[var(--ink)]" href="#"><Mail className="h-4 w-4"/> hello@ona</a>
        </div>
      </SectionLight>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-black/10 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-10 text-xs text-[var(--muted)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ONA. A living journey by Sylva Devas.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--ink)]">Privacy</a>
            <a href="#" className="hover:text-[var(--ink)]">Press Kit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLight({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.9, y: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]/90">{kicker}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-2 font-serif text-2xl md:text-4xl">{title}</motion.h2>
      <div className="mt-6 md:mt-8">
        {children}
      </div>
    </section>
  );
}

function BlockLight({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-[var(--muted)] text-sm">{children}</p>
    </div>
  );
}

function VenueCardLight({ title, when }: { title: string; when: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[var(--ink)] font-medium">{title}</p>
          <p className="text-[var(--muted)] text-sm flex items-center gap-2 mt-1"><MapPin className="h-4 w-4"/>Exhibition</p>
        </div>
        <span className="text-xs text-[var(--muted)]">{when}</span>
      </div>
    </div>
  );
}

function GridLight() {
  // Sacred-geometry style grid in a very light stroke for paper background
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pL" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M0 32 H64 M32 0 V64" stroke="rgba(0,0,0,.04)" strokeWidth="1"/>
          <circle cx="32" cy="32" r="8" fill="none" stroke="rgba(164,126,44,.18)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pL)" />
    </svg>
  );
}
