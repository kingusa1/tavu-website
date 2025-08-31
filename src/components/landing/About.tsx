import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl text-center bg-card/60 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-2xl border border-white/10">
            <h2 className="text-4xl md:text-5xl font-body font-bold mb-6 text-primary">About TAVÚ</h2>
            <div className="text-2xl md:text-3xl leading-relaxed space-y-6 font-headline text-primary/90 max-w-4xl mx-auto">
              <p>
                TAVÚ is a sanctuary where stillness becomes movement and movement becomes ritual. Rooted in TA (grounding) and VÚ (flow), our practice is a single, curated method.
              </p>
              <p>
                The space is designed to soothe the nervous system, restore clarity, and invite you to return to yourself. We favor quiet luxury, intentional design, and small, intimate classes.
              </p>
              <p className="font-body italic mt-8 text-primary text-4xl">
                Live in your TAVÚ: step onto the mat, breathe, and find what has always been there — your presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
