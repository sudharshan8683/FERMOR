import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Planner from "../components/Planner";
import Faq from "../components/Faq";
import Balancer from "../components/Balancer";
import Reveal from "../components/Reveal";
import Tilt from "../components/Tilt";
import Signup from "../components/Signup";

const principles = [
  ["Plain language", "Every number comes with a sentence that explains it. No jargon, no fine print tricks."],
  ["You decide", "Fermor suggests and explains. Nothing happens without your say."],
  ["Private by default", "Your data is encrypted and never sold. Disconnect any time."],
];

export default function Home() {
  return (
    <>
      <a href="#how" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded focus:bg-sky focus:px-3 focus:py-2">Skip to content</a>
      <Nav />
      <main>
        <Hero />

        <section className="overflow-hidden border-b border-line bg-mist py-4 text-ink">
          <div className="marquee flex w-max gap-12 whitespace-nowrap font-serif text-xl">
            {[0, 1].map((k) => ["Built for first-time earners", "Busy professionals", "Families planning ahead", "Anyone tired of jargon"].map((t) => <span key={k + t}>{t} <span className="mx-6 text-mint">✦</span></span>))}
          </div>
        </section>

        <section id="how" className="wrap py-24">
          <h2 className="max-w-2xl font-serif text-4xl sm:text-5xl">Three steps from confusion to confidence</h2>
          <Reveal><Journey /></Reveal>
        </section>

        <section id="balance" className="wrap pb-24">
          <Reveal><h2 className="max-w-2xl font-serif text-4xl sm:text-5xl">Drag your month into shape</h2>
          <p className="mb-10 mt-4 max-w-xl text-ink/70">See how needs, wants and savings fit together and watch your money health respond.</p>
          <Balancer /></Reveal>
        </section>

        <section id="plan" className="wrap pb-24">
          <h2 className="max-w-2xl font-serif text-4xl sm:text-5xl">See what small habits become</h2>
          <p className="mb-10 mt-4 max-w-xl text-ink/70">Move the sliders. Fermor turns a monthly habit into a picture of your future.</p>
          <Reveal><Planner /></Reveal>
        </section>

        <section id="principles" className="bg-mist py-24">
          <div className="wrap">
            <h2 className="max-w-2xl font-serif text-4xl sm:text-5xl">Finance should feel calm</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {principles.map(([t, b], i) => (
                <Tilt key={t} className="rounded-3xl border border-line bg-paper p-8 shadow-sm">
                  <span className="font-serif text-3xl text-mint">0{i + 1}</span>
                  <h3 className="mt-6 text-xl font-medium">{t}</h3>
                  <p className="mt-3 text-ink/70">{b}</p>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="wrap grid gap-12 py-24 lg:grid-cols-3">
          <h2 className="font-serif text-4xl sm:text-5xl">Questions, answered</h2>
          <div className="lg:col-span-2"><Faq /></div>
        </section>

        <section id="start" className="wrap pb-24">
          <div className="rounded-3xl bg-ink px-6 py-16 text-center text-paper sm:px-12">
            <h2 className="mx-auto max-w-2xl font-serif text-4xl sm:text-5xl">Start with a clearer view of your money</h2>
            <Signup />
          </div>
        </section>
      </main>
      <footer className="border-t border-line py-10">
        <div className="wrap flex flex-col justify-between gap-3 text-sm text-ink/60 sm:flex-row">
          <span className="font-serif text-lg text-ink">Fermor.</span>
          <span>Guidance and education, not financial advice. © {new Date().getFullYear()} Fermor</span>
        </div>
      </footer>
    </>
  );
}
