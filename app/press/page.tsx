// app/press/page.tsx
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Press Kit — ONA",
  description: "Official press resources for ONA: description, visuals, bios, and downloads.",
};

export default function PressPage() {
  return (
    <main className="min-h-screen text-neutral-200 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(212,175,55,0.12),transparent),linear-gradient(to_bottom,#0b0b0f,#0f0f14)]">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Kicker + Title */}
        <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/80">Press Kit</p>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl text-white/95">ONA press resources</h1>

        {/* Intro */}
        <div className="mt-6 space-y-4 text-neutral-300 leading-relaxed">
          <p>
            ONA is an immersive art experience that blends film, contemplation, and interactive choice. 
            Created by Belgian artist <span className="text-yellow-300">Sylva Devas</span>, the journey invites participants to reconnect with presence and meaning.
          </p>
          <p>
            This page provides official description, visuals, artist bios, and downloadable materials for coverage or curatorial review.
          </p>
        </div>

        {/* Downloads */}
        <div className="mt-10">
          <h2 className="font-serif text-2xl text-white/95">Downloads</h2>
          <p className="mt-2 text-neutral-400 text-sm">
            High-resolution assets for press and curators. Use the All-in-one zip or download individual items.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <a
              href="/press/ONA-PressKit.zip"
              download
              className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <span>All assets (ZIP)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/press/ONA-Logo-Pack.zip"
              download
              className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <span>Logo pack (SVG, PNG)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/press/ONA-KeyStills.zip"
              download
              className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <span>Key stills (JPG)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/press/ONA-Pod-Photos.zip"
              download
              className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <span>Pod photos (JPG)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/press/ONA-Press-Release.pdf"
              className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <span>Press release (PDF)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/press/ONA-Pod-Tech-Sheet.pdf"
              className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <span>Pod technical sheet (PDF)</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Visuals grid */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-white/95">Selected visuals</h2>
          <p className="mt-2 text-neutral-400 text-sm">
            You may reproduce these images for editorial use with credit to the artist.
          </p>
          <div className="mt-5 grid gap-4 grid-cols-1 md:grid-cols-2">
            {[
              { src: "/press/ona_still_1.jpg", alt: "ONA still 1" },
              { src: "/press/ona_still_2.jpg", alt: "ONA still 2" },
              { src: "/press/ona_pod_1.jpg", alt: "ONA Pod view 1" },
              { src: "/press/ona_pod_2.jpg", alt: "ONA Pod view 2" },
            ].map((it) => (
              <div key={it.src} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] aspect-video">
                <img src={it.src} alt={it.alt} className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-neutral-400">Credit: © ONA, Sylva Devas. Editorial use only.</p>
        </div>

        {/* Bios */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-white/95">Biography</h2>

          <div className="mt-4 space-y-3">
            <h3 className="text-white/90 font-medium">Short bio</h3>
            <p className="text-neutral-300 leading-relaxed">
              Sylva Devas is a Belgian visual artist and filmmaker who explores consciousness through immersive media. 
              His project ONA merges film, sound, and interactive choice to guide participants into presence and meaning.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-white/90 font-medium">Full bio</h3>
            <p className="text-neutral-300 leading-relaxed">
              Sylva Devas is a multidisciplinary artist working with cinema, motion design, and interactive systems. 
              Over the span of ten years he filmed sacred sites around the world and developed ONA, an immersive journey that blends contemplative gameplay, guided breathwork, and cinematic exploration. 
              ONA is presented both as a digital experience and as a physical installation, inviting participants to choose their path and reconnect with their inner quest.
            </p>
          </div>
        </div>

        {/* Exhibitions and credits */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-white/95">Exhibitions</h2>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Mystika Museum, Guest Gallery, Tulum, 2023</li>
              <li>Pyramids of Chi, Bali, from 2025</li>
              <li>Additional venues on request</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-white/95">Credits</h2>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Concept and direction: Sylva Devas</li>
              <li>Sound design: [Name]</li>
              <li>Pod design and woodcraft: [Atelier, Bali]</li>
              <li>Programming and integration: [Name]</li>
              <li>Photography and documentation: [Name]</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <h2 className="font-serif text-xl text-white/95">Contact</h2>
          <p className="mt-2 text-neutral-300">
            For interviews, exhibition requests, or media use, reach us via the{" "}
            <a href="/#contact" className="underline decoration-yellow-300/60 underline-offset-4 hover:text-white">
              contact form
            </a>{" "}
            or through{" "}
            <a href="https://www.instagram.com/wizardmotion/" target="_blank" className="underline decoration-yellow-300/60 underline-offset-4 hover:text-white" rel="noreferrer">
              @wizardmotion
            </a>.
          </p>
        </div>

        <p className="mt-6 text-xs text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </main>
  );
}
