"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube, Mail, MapPin, ExternalLink } from "lucide-react";

/* ===================== PAGE ===================== */

export default function ONA() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg1", "#0b0b0f");
    root.style.setProperty("--bg2", "#0f0f14");
    root.style.setProperty("--gold", "#D4AF37");
  }, []);

  return (
    <div className="min-h-screen text-neutral-200 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(212,175,55,0.12),transparent),linear-gradient(to_bottom,var(--bg1),var(--bg2))] selection:bg-yellow-200/20 selection:text-yellow-50">
      {/* NAV */}
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
          <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/[.08] px-3 py-1.5 text-sm">Watch trailer</a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[92svh] min-h-[600px] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted playsInline loop poster="/hero-fallback.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-20">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="font-serif text-4xl md:text-6xl leading-tight text-white/95">
            Awaken the Light of Your Own Vision
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }} className="mt-5 max-w-2xl text-base md:text-lg text-neutral-300">
            An immersive art-journey across sacred landscapes, contemplative puzzles, and a living dialogue with the self. ONA is a pod installation and a game—designed for presence, crafted for wonder.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/90 hover:bg-[var(--gold)] px-5 py-2.5 text-black font-medium">
              Enter the Journey <ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-neutral-200 hover:bg-white/5">Host the Pod</a>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <Section id="vision" kicker="The Vision" title="A digital temple for timeless questions">
        <p className="text-neutral-300 max-w-3xl">
          ONA weaves film, motion design, and interactive choices into a contemplative space. Each path invites a question—about origin and destiny, humility and courage, the human and the divine.
        </p>
        <div className="mt-4 text-sm text-neutral-400 max-w-3xl">
          Beyond the horizon lies the next form of ONA — unfolding quietly. If you wish to be notified when the path opens, <a href="#contact" className="underline decoration-yellow-300/50 hover:text-white">leave a trace</a>.
        </div>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {["Contemplative gameplay", "Immersive pod installation", "Evolving story architecture"].map((t) => (
            <li key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-[var(--gold)] mt-2" />
                <div>
                  <p className="font-medium text-white/90">{t}</p>
                  <p className="mt-1 text-sm text-neutral-400">Subtle interactions, evocative visuals, and an original soundscape cultivate a sense of presence.</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* EXPERIENCE — exact same Section styling as Vision */}
      <Section id="experience" kicker="The Experience" title="From Game to Initiatic Journey">
        <GameBlock />
        <PodBlock />
      </Section>

      {/* GALLERY */}
      <Section id="gallery" kicker="Gallery" title="Fragments of the Vision">
        <GalleryUniform
          items={[
            { id: 1, img: "/stills/still-1.jpg", video: "/reels/reel-1.mp4" },
            { id: 2, img: "/stills/still-2.jpg", video: "/reels/reel-2.mp4" },
            { id: 3, img: "/stills/still-3.jpg", video: "/reels/reel-3.mp4" },
            { id: 4, img: "/stills/still-4.jpg", video: "/reels/reel-4.mp4" },
            { id: 5, img: "/stills/still-5.jpg", video: "/reels/reel-5.mp4" },
            { id: 6, img: "/stills/still-6.jpg", video: "/reels/reel-6.mp4" },
          ]}
        />
      </Section>

{/* VENUES / ROADMAP */}
<Section id="venues" kicker="Roadmap" title="Where to encounter ONA">
  {/* Physical venues — past first (left), then upcoming, then placeholder */}
  <div className="grid gap-6 md:grid-cols-3">
    <VenueCard
      title="Mystika Museum — Guest Gallery (Tulum)"
      when="Guest Gallery · 2023"
      badge="Past"
      image="/venues/mystika.jpg"
    />
    <VenueCard
      title="Pyramids of Chi — Bali"
      when="Dec 2025 →"
      badge="Upcoming"
      image="/venues/pyramids-of-chi.jpg"
    />
    <VenueCard
      title="Coming Soon"
      when="Announcing shortly"
      badge="Soon"
      image="/venues/placeholder.jpg"
    />
  </div>

  {/* Online presence — same card size as above */}
  <div className="mt-12">
    <h3 className="text-sm uppercase tracking-[0.18em] text-yellow-300/80 mb-4">Online presence</h3>
    <div className="grid gap-6 md:grid-cols-3">
      <VenueCard
        title="Kickstarter — Past Campaign"
        when="Archive"
        badge="Archive"
        image="/venues/kickstarter.jpg"
        href="#"
        hrefLabel="View Campaign"
      />
      <VenueCard
        title="Steam — Wishlist ONA"
        when="Coming soon"
        badge="Online"
        image="/venues/steam.jpg"
        href="#"
        hrefLabel="Wishlist on Steam"
      />
      {/* spacer to keep equal card widths on 3-col grid */}
      <div className="hidden md:block" />
    </div>
  </div>
</Section>


      {/* CONTACT */}
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

      {/* CONCLUSION STRIP */}
      <ConclusionStrip videoSrc="/interludes/ona-parallax.mp4" poster="/interludes/ona-parallax.jpg" />

      {/* FOOTER */}
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

/* ================= Components ================= */

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.2em] text-yellow-300/80"
      >
        {kicker}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-2 font-serif text-2xl md:text-4xl text-white/95"
      >
        {title}
      </motion.h2>
      <div className="mt-6 md:mt-8">{children}</div>
    </section>
  );
}

/* ---------- Experience: Game ---------- */

function GameBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 md:mt-10 grid gap-8 md:grid-cols-12 items-center"
    >
      {/* Trailer left */}
      <div className="md:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <div className="aspect-video w-full bg-black/60">
          <TrailerPlayer />
        </div>
      </div>

      {/* Copy right */}
      <div className="md:col-span-5">
        <h3 className="font-serif text-xl md:text-2xl text-white/95">The Game</h3>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          A contemplative narrative blending film, choice, and presence. Choose between archetypal gateways—origins and
          returns—guided by a voice that is, at times, your own. Every decision mirrors a step of self-discovery.
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- Experience: Pod (halo behind only) ---------- */

function PodBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mt-16 md:mt-20 grid gap-10 md:grid-cols-12 items-center"
    >
      {/* Text left */}
      <div className="md:col-span-5">
        <h3 className="font-serif text-xl md:text-2xl text-white/95">The Pod</h3>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          A wooden shell with illuminated symbols—quietly enclosing a single seat, a curved screen, and immersive sound.
        </p>
        <p className="mt-4 italic text-neutral-300">Step inside, breathe, and choose your path.</p>
      </div>

      {/* Pod image right (slightly smaller, halo behind, hover grow) */}
      <div className="md:col-span-7 flex justify-center">
        <div className="relative group isolate">
          {/* base breathing glow BEHIND */}
          <motion.div
            animate={{ opacity: [0.55, 0.82, 0.55] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-12 md:-inset-16 -z-10 rounded-full blur-[90px]
                       bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,transparent_70%)]"
          />
          {/* hover halo BEHIND */}
          <motion.div
            whileHover={{ scale: 1.06, opacity: 0.9 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="pointer-events-none absolute -inset-16 -z-10 rounded-full blur-3xl opacity-0
                       group-hover:opacity-70
                       bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_75%)]"
          />

          <motion.img
            src="/pod/PodImage1.png"
            alt="ONA Pod"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative z-10 w-full max-w-[460px] md:max-w-[520px] object-contain
                       drop-shadow-[0_0_22px_rgba(212,175,55,0.16)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Reusable bits ---------- */

function FeatureItem({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4">
      <div className="relative shrink-0">
        <div className="h-14 w-14 md:h-16 md:w-16 rounded-full ring-1 ring-white/20 overflow-hidden">
          <img src={icon} alt="" className="h-full w-full object-cover" />
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_32px_8px_rgba(212,175,55,0.14)]" />
      </div>
      <div className="pt-1">
        <p className="font-medium text-white/90 text-[15px] md:text-base">{title}</p>
        <p className="mt-1 text-neutral-300 text-[13px] md:text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function VenueCard({
  title,
  when,
  image,
  href,
  hrefLabel,
  badge,
}: {
  title: string;
  when: string;
  image: string;
  href?: string;
  hrefLabel?: string;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-[1.03]" />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/90 ring-1 ring-white/15">
            {badge}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex items-start justify-between gap-4">
        <div>
          <p className="text-white/90 font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {title}
          </p>
          <p className="text-neutral-400 text-sm mt-1">{when}</p>
        </div>
        {href && (
          <a href={href} className="inline-flex items-center gap-1 text-sm text-yellow-300 hover:text-white">
            {hrefLabel ?? "Open"} <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}


function TrailerPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden">
      {!playing ? (
        <button onClick={() => setPlaying(true)} className="group relative h-full w-full">
          <img src="/trailer/ona-trailer-thumb.jpg" alt="ONA Trailer" className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <div className="absolute inset-0 grid place-content-center">
            <div className="relative" style={{ width: 72, height: 72 }}>
              <span className="absolute inset-0 rounded-full animate-ping bg-white/30" />
              <div className="relative mx-auto grid h-full w-full place-content-center rounded-full bg-white/90 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </button>
      ) : (
        <video className="h-full w-full object-cover" autoPlay controls playsInline>
          <source src="/trailer/ona-trailer.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}

function GalleryUniform({ items }: { items: { id: number; img: string; video?: string }[] }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {items.map((it) => (
        <GalleryUniformTile key={it.id} {...it} />
      ))}
    </div>
  );
}

function GalleryUniformTile({ img, video }: { img: string; video?: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] aspect-video"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover || !video ? (
        <img src={img} alt="ONA still" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]" />
      ) : (
        <video key={video} className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={img}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

function ConclusionStrip({
  videoSrc = "/interludes/ona-parallax.mp4",
  poster = "/interludes/ona-parallax.jpg",
}: { videoSrc?: string; poster?: string }) {
  return (
    <section aria-label="Conclusion" className="w-full">
      <div className="relative w-full h-[42svh] md:h-[52svh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
    </section>
  );
}
