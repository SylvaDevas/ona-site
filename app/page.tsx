"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Instagram, Mail, MapPin, ExternalLink } from "lucide-react";


/* ==========================================================
   ONA — The Initiation (Full Page, TSX)
   - Valid HTML (no <p> inside <p>)
   - Contact form posts to /api/contact with honeypot + time-trap
   - Clean imports, no unused icons
   ========================================================== */

export default function Page() {
  const prefersReduced = !!useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg1", "#0b0b0f");
    root.style.setProperty("--bg2", "#0f0f14");
    root.style.setProperty("--gold", "#D4AF37");
  }, []);

  return (
    <div className="min-h-screen text-neutral-200 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(212,175,55,0.12),transparent),linear-gradient(to_bottom,var(--bg1),var(--bg2))] selection:bg-yellow-200/20 selection:text-yellow-50">
      <SiteHeader />
      <Hero prefersReduced={prefersReduced} />

      {/* ===================== VISION ===================== */}
      <section id="vision" className="relative mx-auto max-w-[84rem] px-6 pt-20 md:pt-6 pb-14 md:pb-16">
        <VisionBanner />
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <Section id="experience" kicker="Play The Experience" title="A Gamified Self-Healing Adventure">
        <GameBlock prefersReduced={prefersReduced} />
        <PodSanctuary prefersReduced={prefersReduced} />
      </Section>

      {/* ===================== GALLERY ===================== */}
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

      {/* ===================== VENUES ===================== */}
      <Section id="venues" kicker="Venues" title="Where to encounter ONA">
        <div className="grid gap-6 md:grid-cols-3">
          <VenueCard title="Mystika Museum — Guest Gallery (Tulum)" when="Guest Gallery · 2023" badge="Past" image="/venues/mystika.jpg" />
          <VenueCard title="Pyramids of Chi — Bali" when="Dec 2025 →" badge="Upcoming" image="/venues/pyramids-of-chi.jpg" />
          <VenueCard title="Your venue?" when="Contact us" badge="Soon" image="/venues/placeholder4.jpg" />
        </div>

        {/* ===================== ONLINE PRESENCE ===================== */}
        <div className="mt-12">
          <h3 className="text-sm uppercase tracking-[0.18em] text-yellow-300/80 mb-4">Online Presence</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Kickstarter",
                subtitle: "Past campaign",
                image: "/venues/kickstarter.jpg",
                href: "#",
              },
              {
                title: "Steam",
                subtitle: "Wishlist ONA",
                image: "/venues/steam.jpg",
                href: "#",
              },
            ].map(({ title, subtitle, image, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <p className="text-white/90 font-medium">{title}</p>
                  <p className="text-neutral-400 text-sm mt-0.5">{subtitle}</p>
                </div>
              </a>
            ))}

            <div className="hidden md:block" />
          </div>
        </div>
      </Section>

      {/* ===================== CONTACT ===================== */}
      <ContactSection />

      <ConclusionStrip videoSrc="/interludes/ona-parallax.mp4" poster="/interludes/ona-parallax.jpg" />

      <section id="behind" className="relative mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-white/95 mb-4">Behind the Creation</h3>
        <div className="max-w-2xl mx-auto text-neutral-300 leading-relaxed space-y-4">
          <p>
            Conceived and directed by <span className="text-yellow-300">Sylva Devas</span>, ONA was filmed and designed across sacred sites
            around the world. Blending digital craft, human emotion, and cinematic presence into one contemplative journey.
          </p>
              <p className="text-sm text-neutral-400 font-medium">
            Every image and sequence is hand-crafted and filmed by the author. This art piece is not AI-generated.
          </p>
          <p className="text-neutral-400 text-sm font-bold text-white/95">
            With contributions from collaborators in sound design, programming, and wood construction, each element of the experience was
            built to bridge the human and the sacred.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

/* ===================== Layout bits ===================== */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group" aria-label="Go to top">
          <div className="h-8 w-8 rounded-full bg-[conic-gradient(from_90deg,rgba(212,175,55,.7),rgba(255,255,255,.2),rgba(212,175,55,.7))] ring-1 ring-white/20 shadow-lg shadow-yellow-400/10" />
          <span className="font-serif tracking-wide text-sm md:text-base text-neutral-100 group-hover:text-white">
            ONA — The Initiation
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#vision" className="hover:text-white/90">Vision</a>
          <a href="#experience" className="hover:text-white/90">Experience</a>
          <a href="#gallery" className="hover:text-white/90">Gallery</a>
          <a href="#venues" className="hover:text-white/90">Venues</a>
          <a href="#contact" className="hover:text-white/90">Contact</a>
        </nav>
        <a href="#experience" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/[.08] px-3 py-1.5 text-sm">
          Watch trailer
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-xs text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ONA. A living journey by Sylva Devas.</p>
        <div className="flex items-center gap-6">
<a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/press" className="hover:text-white">Press Kit</a>
        </div>
      </div>
    </footer>
  );
}

/* ===================== Hero ===================== */
function Hero({ prefersReduced }: { prefersReduced?: boolean }) {
  return (
    <section id="top" className="relative h-[92svh] min-h-[600px] overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted playsInline loop poster="/hero-fallback.jpg">
        <source src="/heroD.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-20">
        <motion.h1
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-serif text-5xl md:text-6xl text-white/95"
        >
          Interactive Healing Journey
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1.2 }}
          className="mt-5 max-w-4xl text-base md:text-lg text-neutral-300 space-y-3"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-[#d5b241] leading-relaxed uppercase">
            ONA — The Initiation
          </p>
          <p>Enter an immersive art experience to remember what you are.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#experience" className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/90 hover:bg-[var(--gold)] px-5 py-2.5 text-black font-medium">
            Enter the Journey <ArrowRight className="h-4 w-4 transition -rotate-45 group-hover:rotate-0" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-neutral-200 hover:bg-white/5">
            Host the Pod
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== Section wrapper ===================== */
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

/* ===================== Vision Banner ===================== */
function VisionBanner() {
  return (
    <div className="mt-6 md:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0.25rem] md:gap-[0.5rem] justify-items-start">
        <Plate label="Immersive Installations" defaultSrc="/vision/BanneC_A1.jpg" hoverSrc="/vision/BanneC_A2.jpg" />
        <Plate label="Transformative Journey" defaultSrc="/vision/BanneC_B1.jpg" hoverSrc="/vision/BanneC_B2.jpg" />
        <Plate label="Interactive Contemplation" defaultSrc="/vision/BanneC_C1.jpg" hoverSrc="/vision/BanneC_C2.jpg" />
      </div>
    </div>
  );
}

function Plate({
  label,
  defaultSrc,
  hoverSrc,
  href = "#vision",
}: {
  label: string;
  defaultSrc: string;
  hoverSrc: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative w-full max-w-[520px] md:max-w-[500px] lg:max-w-[520px] select-none transition-transform duration-500 hover:-translate-y-[6px] hover:scale-[1.03]"
    >
      <img
        src={defaultSrc}
        alt={label}
        loading="lazy"
        decoding="async"
        sizes="(min-width:1024px) 520px, (min-width:768px) 500px, 92vw"
        className="block w-full h-auto pointer-events-none transition-transform duration-500"
      />
      <img
        src={hoverSrc}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-400 group-hover:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -inset-6 blur-2xl rounded-[2.5rem] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
      </div>
    </a>
  );
}

/* ===================== Experience: Game ===================== */
function GameBlock({ prefersReduced }: { prefersReduced?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 md:mt-10 grid gap-8 md:grid-cols-12 items-center"
    >
      {/* Video section */}
      <div className="md:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <div className="aspect-video w-full bg-black/60">
          <TrailerPlayer />
        </div>
      </div>

      {/* Text section */}
      <div className="md:col-span-5">
        <h3 className="font-serif text-xl md:text-2xl text-white/95">ONA – The Initiation</h3>
        <div className="mt-3 text-base md:text-lg text-neutral-300 leading-relaxed space-y-4">
          <p className="text-white/95 font-semibold">
            Explore your own path through a journey that takes you all over the world and into the depths of yourself.
          </p>
          <p>
            The adventure will guide you through inner explorations, breathwork, and sacred discoveries. Each playthrough is unique, guided by the choices you make.
          </p>
          <p>Created for humanity to rediscover itself. ONA is an odyssey to remember what you are.</p>
      
        </div>
      </div>
    </motion.div>
  );
}

/* ===================== The Pod — Sanctuary ===================== */
function PodSanctuary({ prefersReduced }: { prefersReduced?: boolean }) {
  return (
    <section id="pod" className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="relative mt-5 h-px bg-white/10">
        <div
          className="absolute inset-x-0 -top-[18px] h-10 pointer-events-none"
          style={{
            background: "radial-gradient(60% 100% at 50% 100%, rgba(212,175,55,0.18), rgba(212,175,55,0.0))",
            filter: "blur(10px)",
            opacity: 0.4,
          }}
        />
      </div>
      <br />
      <h2 className="mt-2 font-serif text-2xl md:text-4xl text-white/95">Explore ONA in a Sanctuary</h2>

      <div className="mt-8 grid gap-10 md:grid-cols-12 items-center">
        {/* Image */}
        <div className="md:col-span-7 relative">
          <motion.div
            aria-hidden
            animate={{
              opacity: prefersReduced ? 0.55 : [0.45, 0.85, 0.45],
              scale: prefersReduced ? 1 : [1, 1.04, 1],
            }}
            transition={{ duration: 6, repeat: prefersReduced ? 0 : Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-16 -z-10 rounded-full blur-3xl"
            style={{ background: "radial-gradient(45% 45% at 50% 60%, rgba(212,175,55,0.22) 0%, rgba(0,0,0,0) 70%)" }}
          />
          <motion.img
            src="/pod/PodImage1.png"
            alt="ONA Pod — Sanctuary"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: prefersReduced ? 1 : 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="w-full max-w-[540px] mx-auto object-contain drop-shadow-[0_0_24px_rgba(212,175,55,0.18)]"
          />
        </div>

        {/* Copy */}
        <div className="md:col-span-5">
          <h3 className="font-serif text-xl md:text-2xl text-white/95">Meet the Pod</h3>

          <div className="mt-3 text-base md:text-lg text-neutral-300 leading-relaxed space-y-4">
            <p className="text-white/95 font-semibold">An immersive cocoon for transformation, a sanctuary of meaning, handcrafted for presence.</p>
            <p>
              Experience ONA inside the Pod, a wooden sculpture that welcomes you for a 20-minute personal journey. The inner walls are engraved with mystical
              symbols that respond to your choices throughout the experience.
            </p>
          </div>

          <div className="space-y-3 mt-5 text-base md:text-lg text-neutral-300">
            {[
              "Curved screen with cinematic immersion",
              "Warm acoustic chamber & silent ventilation",
              "LED-lit symbols that respond to your path",
              "Single-seat focus; built for contemplative flow",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-neutral-300">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#D4AF37] flex-shrink-0"></span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#venues" className="inline-flex items-center gap-2 rounded-xl bg-white/90 hover:bg-white px-4 py-2 text-black">
              Enter the Sanctuary
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-neutral-200 hover:bg-white/5">
              Host the Pod
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== Gallery ===================== */
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
        <img
          src={img}
          alt="ONA still"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <video key={video} className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={img}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
    </div>
  );
}

/* ===================== Venues ===================== */
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
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-[1.03]"
        />
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
/* ===================== CONTACT WITH WEB3FORMS (hardened) ===================== */
function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  return (
    <Section id="contact" kicker="Connect" title="Invite ONA to your space">
      <p className="max-w-2xl text-base md:text-lg text-neutral-300 leading-tight">
        For collaborations, hosting, or inquiries. Visitors, curators, and venues are welcome.<br />
        Share your intention, let’s shape a resonant experience for your audience.
      </p>

      <form
        ref={formRef}
        className="mt-8 grid gap-4 md:max-w-xl"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!formRef.current) return;

          // Build multipart/form-data from the form
          const fd = new FormData(formRef.current);

          // Basic client-side anti-spam checks (optional but nice)
          // honeypot
          if (fd.get("botcheck")) return;
          // time trap: require >= 4s (optional – uncomment if you want)
          // const startedAt = Number(fd.get("startedAt") || 0);
          // if (!startedAt || Date.now() - startedAt < 4000) return;

          setStatus("sending");
          try {
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { Accept: "application/json" },
              body: fd,
            });
            const json = await res.json();
            if (json?.success) {
              setStatus("ok");
              formRef.current.reset();
            } else {
              setStatus("error");
              console.error("Web3Forms error:", json);
            }
          } catch (err) {
            console.error(err);
            setStatus("error");
          }
        }}
      >
        {/* REQUIRED: your Web3Forms access key */}
        <input type="hidden" name="access_key" value="92e13c92-717e-41fd-9b4a-70fd458a3e38" />

        {/* Improve email sorting in your inbox */}
        <input type="hidden" name="subject" value="ONA Website Contact" />
        <input type="hidden" name="from_name" value="ONA Website" />

        {/* Enable CAPTCHA in your Web3Forms dashboard and keep this flag */}
        <input type="hidden" name="captcha" value="true" />

        {/* Honeypot (bots usually fill hidden fields) */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        {/* Optional time trap; uncomment the hidden field and the check above */}
        {/* <input type="hidden" name="startedAt" value={Date.now()} /> */}

        <input
          name="name"
          aria-label="Your name"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-300/40"
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          aria-label="Email"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-300/40"
          placeholder="Email"
        />
        <textarea
          name="message"
          rows={4}
          aria-label="Message"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-yellow-300/40"
          placeholder="Tell us about your venue or intention"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="justify-self-start inline-flex items-center gap-2 rounded-xl bg-white/90 hover:bg-white px-4 py-2 text-black disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send"} <ArrowRight className="h-4 w-4" />
        </button>

        {status === "ok" && (
          <p className="text-sm text-green-400">Thanks. We received your message and will reply soon.</p>
        )}
   {status === "error" && (
  <p className="text-sm text-red-400">
    Couldn’t send right now. Please try again later or reach out through our <a className="underline" href="https://www.instagram.com/wizardmotion/">Instagram</a>.
  </p>
)}


        <p className="text-xs text-neutral-400">
          By sending, you agree to be contacted about ONA. No spam, no noise.
        </p>
      </form>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
        <a href="https://www.instagram.com/wizardmotion/" className="inline-flex items-center gap-2 hover:text-white">
          <Instagram className="h-4 w-4" /> @wizardmotion
        </a>
    
        
      </div>
    </Section>
  );
}

/* ===================== Contact (spam-filtered, working) ===================== 
function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  return (
    <Section id="contact" kicker="Connect" title="Invite ONA to your space">
      <div className="max-w-2xl text-base md:text-lg text-neutral-300 leading-tight space-y-3">
        <p>For questions, collaborations, or hosting inquiries, visitors, curators, venues, and collaborators are welcome.</p>
        <p>Share your intention and let’s shape a resonant experience for your audience.</p>
      </div>

      <form
        ref={formRef}
        className="mt-8 grid gap-4 md:max-w-xl"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!formRef.current) return;

          const fd = new FormData(formRef.current);
          const body = {
            name: String(fd.get("name") || ""),
            email: String(fd.get("email") || ""),
            message: String(fd.get("message") || ""),
            website: String(fd.get("website") || ""),     // honeypot
            startedAt: String(fd.get("startedAt") || ""), // time-trap
          };

          setStatus("sending");
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
            if (res.ok) {
              setStatus("ok");
              formRef.current.reset();
            } else {
              setStatus("error");
            }
          } catch {
            setStatus("error");
          }
        }}
      >
        <input
          name="name"
          aria-label="Your name"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          aria-label="Email"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
          placeholder="Email"
        />
        <textarea
          name="message"
          rows={4}
          aria-label="Message"
          required
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/40"
          placeholder="Tell us about your venue or intention"
        />

  
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="startedAt" value={Date.now()} />

        <button
          type="submit"
          disabled={status === "sending"}
          className="justify-self-start inline-flex items-center gap-2 rounded-xl bg-white/90 hover:bg-white px-4 py-2 text-black disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send"} <ArrowRight className="h-4 w-4" />
        </button>

        {status === "ok" && <p className="text-sm text-green-400">Thanks. We’ll be in touch soon.</p>}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Couldn’t send. Please email us at <a className="underline" href="mailto:sylvadevas@ona.now">sylvadevas@ona.now</a>.
          </p>
        )}

        <p className="text-xs text-neutral-400">By sending, you agree to be contacted about ONA. No spam, no noise.</p>
      </form>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
        <a className="inline-flex items-center gap-2 hover:text-white" href="https://www.instagram.com/wizardmotion/">
          <Instagram className="h-4 w-4" /> @wizardmotion
        </a>
        <a className="inline-flex items-center gap-2 hover:text-white" href="mailto:sylvadevas@ona.now">
          <Mail className="h-4 w-4" /> sylvadevas@ona.now
        </a>
      </div>
    </Section>
  );
}
*/
/* ===================== Trailer Player ===================== */
function TrailerPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden">
      {!playing ? (
        <button onClick={() => setPlaying(true)} className="group relative h-full w-full" aria-label="Play ONA trailer">
          <img src="/trailer/ona-trailer-thumb.jpg" alt="ONA Trailer thumbnail" className="h-full w-full object-cover opacity-90" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <div className="absolute inset-0 grid place-content-center">
            <div className="relative" style={{ width: 72, height: 72 }}>
              <span className="absolute inset-0 rounded-full animate-ping bg-white/30" />
              <div className="relative mx-auto grid h-full w-full place-content-center rounded-full bg-white/90 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
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

/* ===================== Conclusion Strip ===================== */
function ConclusionStrip({
  videoSrc = "/interludes/ona-parallax.mp4",
  poster = "/interludes/ona-parallax.jpg",
}: {
  videoSrc?: string;
  poster?: string;
}) {
  return (
    <section aria-label="Conclusion" className="w-full">
      <div className="relative w-full h-[42svh] md:h-[52svh]">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="none" poster={poster}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
    </section>
  );
}
