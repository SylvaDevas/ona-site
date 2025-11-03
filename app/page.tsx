"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function ONA() {
  const [audioOn, setAudioOn] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg1", "#0b0b0f");
    root.style.setProperty("--bg2", "#0f0f14");
    root.style.setProperty("--gold", "#D4AF37");
  }, []);

  return (
    <div className="min-h-screen text-neutral-200 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(212,175,55,0.12),transparent),linear-gradient(to_bottom,var(--bg1),var(--bg2))] selection:bg-yellow-200/20 selection:text-yellow-50">
      <header className="sticky top-0 z-40 backdrop-blur-md/30 bg-black/20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-8 w-8 rounded-full bg-[conic-gradient(from_90deg,rgba(212,175,55,.7),rgba(255,255,255,.2),rgba(212,175,55,.7))] ring-1 ring-white/20 shadow-lg shadow-yellow-400/10" />
            <span className="font-serif tracking-wide text-sm md:text-base text-neutral-100 group-hover:text-white">ONA — The Initiation</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#vision" className="hover:text-white/90">Vision</a>
            <a href="#experience" className="hover:text-white/90">Experience</a>
            <a href="#gallery" className="hover:text-white/90">Gallery</a>
            <a href="#venues" className="hover:text-white/90">Venues</a>
            <a href="#contact" className="hover:text-white/90">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setAudioOn(v => !v)} className={`text-xs px-3 py-1.5 rounded-full border transition ${audioOn ? "border-yellow-400/50 text-yellow-300" : "border-white/10 text-neutral-300 hover:text-white"}`}>{audioOn ? "Sound: ON" : "Sound: OFF"}</button>
            <a href="#trailer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/[.08] px-3 py-1.5 text-sm">
              <Play className="h-4 w-4" /> Trailer
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(80%_80%_at_50%_40%,black,transparent)]">
          <Grid />
        </div>
        <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }} className="pointer-events-none absolute inset-0">
          <Starfield />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-28 md:pb-40">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-serif text-4xl md:text-6xl leading-tight text-white/95">
            Awaken the Light of Your Own Vision
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="mt-5 max-w-2xl text-base md:text-lg text-neutral-300">
            An immersive art-journey unfolding across sacred landscapes, contemplative puzzles, and a living dialogue with the self. ONA is a pod installation and a game experience—designed for presence, crafted for wonder.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/90 hover:bg-[var(--gold)] px-5 py-2.5 text-black font-medium">
              Enter the Journey <ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-neutral-200 hover:bg-white/5">
              Host the Pod
            </a>
          </motion.div>
        </div>
      </section>

      <Section id="vision" kicker="The Vision" title="A digital temple for timeless questions">
        <p className="text-neutral-300 max-w-3xl">
          ONA weaves film, motion design, and interactive choices into a contemplative space. Each path invites a question—about origin and destiny, humility and courage, the human and the divine.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {["Contemplative gameplay", "Immersive pod installation", "Evolving story architecture"].map((t, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <div>
                  <p className="font-medium text-white/90">{t}</p>
                  <p className="mt-1 text-sm text-neutral-400">Subtle interactions, evocative visuals, and an original soundscape cultivate a sense of presence.</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="experience" kicker="The Experience" title="From Pod to Infinite Journey">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-video w-full bg-black/60 grid place-content-center">
              <div className="text-center px-6">
                <p className="text-sm uppercase tracking-widest text-neutral-400">Trailer Placeholder</p>
                <p className="mt-1 text-neutral-300">Embed your AV trailer or a looping teaser here.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Block title="The Pod">
              A wooden shell with illuminated symbols—quietly enclosing a single seat, a curved screen, and sound. Step in. Breathe. Choose your path.
            </Block>
            <Block title="The Game">
              A branching narrative of films and contemplative puzzles. Choose between archetypal gateways—origins and returns—guided by a voice that is, at times, your own.
            </Block>
            <Block title="The Journey Ahead">
              Exhibitions, limited-edition prints and wallpapers, and a growing network of pods worldwide. The journey is infinite; the steps are human.
            </Block>
          </div>
        </div>
      </Section>

      <Section id="gallery" kicker="Gallery" title="Fragments of the Vision">
        <div className="grid gap-4 md:grid-cols-3">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 text-xs text-neutral-300">Still {i}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="venues" kicker="Roadmap" title="Where to encounter ONA">
        <div className="grid gap-6 md:grid-cols-3">
          <VenueCard title="Pyramids of Chi — Bali" when="Dec 2025 →" />
          <VenueCard title="KIKK Market — Belgium" when="TBA" />
          <VenueCard title="Airport Capsule — Concept" when="2026" />
        </div>
      </Section>

      <Section id="contact" kicker="Connect" title="Invite ONA to your space">
        <p className="max-w-2xl text-neutral-300">Curators, venues, and collaborators are welcome. Share your intention—let’s shape a resonant experience for your audience.</p>
        <form className="mt-8 grid gap-4 md:max-w-xl">
          <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="Your name" />
          <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="Email or Instagram" />
          <textarea rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="Tell us about your venue or intention" />
          <button className="justify-self-start inline-flex items-center gap-2 rounded-xl bg-white/90 hover:bg-white px-4 py-2 text-black">
            Send <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-neutral-400">By sending, you agree to be contacted about ONA. No spam, no noise.</p>
        </form>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
          <a className="inline-flex items-center gap-2 hover:text-white" href="#"><Instagram className="h-4 w-4"/> @wizardmotion</a>
          <a className="inline-flex items-center gap-2 hover:text-white" href="#"><Youtube className="h-4 w-4"/> YouTube</a>
          <a className="inline-flex items-center gap-2 hover:text-white" href="#"><Mail className="h-4 w-4"/> hello@ona</a>
        </div>
      </Section>

      <footer className="mt-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-xs text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ONA. A living journey by Sylva Devas.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Press Kit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 0.8, y: 0 }} viewport={{ once: true }} className="text-xs uppercase tracking-[0.2em] text-yellow-300/80">{kicker}</motion.p>
      <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-2 font-serif text-2xl md:text-4xl text-white/95">{title}</motion.h2>
      <div className="mt-6 md:mt-8">
        {children}
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="font-medium text-white/90">{title}</p>
      <p className="mt-1 text-neutral-300 text-sm">{children}</p>
    </div>
  );
}

function VenueCard({ title, when }: { title: string; when: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-white/90 font-medium">{title}</p>
          <p className="text-neutral-400 text-sm flex items-center gap-2 mt-1"><MapPin className="h-4 w-4"/>Exhibition</p>
        </div>
        <span className="text-xs text-neutral-400">{when}</span>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M0 32 H64 M32 0 V64" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
          <circle cx="32" cy="32" r="8" fill="none" stroke="rgba(212,175,55,.15)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p)" />
    </svg>
  );
}

function Starfield() {
  const [stars, setStars] = useState<
    { top: string; left: string; opacity: number; scale: number }[]
  >([]);

  useEffect(() => {
    // Generate stars only after mounting (client-side)
    const generated = Array.from({ length: 90 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.4 + Math.random() * 0.6,
      scale: 0.7 + Math.random(),
    }));
    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute block h-0.5 w-0.5 rounded-full bg-yellow-200/50"
          style={{
            top: s.top,
            left: s.left,
            opacity: s.opacity,
            transform: `scale(${s.scale})`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
