import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center bg-cover bg-center"
    >
      {/* Overlay removed */}
      {/* <div className="absolute inset-0 bg-background/30 z-0"></div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 sm:py-32">
        <div className="flex justify-center text-center">
          
          {/* Text Content */}
          <div className="max-w-4xl">
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-body font-bold mb-6 leading-tight text-primary drop-shadow-sm">
                Wellness Reimagined <br /> in Abu Dhabi
             </h1>
             <p className="text-3xl md:text-4xl mb-10 font-body text-primary/90 drop-shadow-sm">
                We’re opening soon in Al Raha, Abu Dhabi. The exact space is a secret — for now. ✨ Our waitlist will be the first to step inside.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#waitlist"
                  className="inline-block bg-destructive text-destructive-foreground font-body rounded-full text-xl px-12 py-5 transition-transform duration-300 hover:scale-105 hover:bg-destructive/90 shadow-lg"
                >
                  Join Waitlist
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
