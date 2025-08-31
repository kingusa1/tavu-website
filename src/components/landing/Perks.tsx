import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const perks = [
  "First pick of class slots",
  "Founders-only perks",
  "A welcome gift on your first visit",
  "Early invitations to founder preview sessions"
];

export default function Perks() {
  return (
    <section id="perks" className="py-20 lg:py-32 bg-tavu-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-tavu-deep">Why join the waitlist?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {perks.map((perk, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1 text-tavu-accent" />
                    <div>
                      <p className="text-2xl font-body text-tavu-text">{perk}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="text-center">
                 <Button asChild size="lg" className="rounded-full font-headline transition-transform duration-300 hover:scale-105 px-10 py-7 text-lg bg-tavu-accent text-white hover:bg-tavu-accent/90">
                    <Link href="#waitlist">Reserve my spot</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
