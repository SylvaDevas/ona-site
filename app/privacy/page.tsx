// app/privacy/page.tsx
export const metadata = {
  title: "Privacy — ONA",
  description: "How ONA handles your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen text-neutral-200 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(212,175,55,0.12),transparent),linear-gradient(to_bottom,#0b0b0f,#0f0f14)]">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/80">Privacy</p>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl text-white/95">Your Privacy at ONA</h1>

        <div className="mt-6 space-y-6 text-neutral-300 leading-relaxed">
          <p>
            ONA values your privacy. We do not use tracking cookies and we don’t collect personal data beyond what you
            voluntarily share through the contact form.
          </p>

          <div>
            <h2 className="font-medium text-white/90">What we collect</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Information you submit via the contact form (name, email, message content).</li>
              <li>Basic, non-identifying technical logs necessary to keep the site secure and reliable.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-white/90">How messages are processed</h2>
            <p className="mt-2">
              Messages sent through the form are securely processed by <span className="text-yellow-300">Web3Forms</span> and delivered to
              the ONA team’s inbox. Your details are used only to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-white/90">What we never do</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>No sale or rental of your personal data.</li>
              <li>No unsolicited marketing.</li>
              <li>No third-party sharing, except the form processor mentioned above.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-medium text-white/90">Data retention</h2>
            <p className="mt-2">
              We keep contact messages only as long as needed to handle your request or maintain reasonable records. You can
              ask us to delete your message at any time.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-white/90">Your rights</h2>
            <p className="mt-2">
              You can request access, correction, or deletion of your information. To do so, please reach out via the{" "}
              <a href="/#contact" className="underline decoration-yellow-300/60 underline-offset-4 hover:text-white">
                contact form
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-white/90">Controller</h2>
            <p className="mt-2">
              The data controller for this site is <span className="text-yellow-300">ONA (Sylva Devas)</span>. For any privacy questions,
              contact us through the form linked above.
            </p>
          </div>

          <p className="text-sm text-neutral-400 pt-4">
            This page may be updated as the project evolves. <br className="hidden sm:inline" />
            <span className="opacity-75">Last updated: {new Date().toLocaleDateString()}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
