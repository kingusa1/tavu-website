import WaitlistForm from './WaitlistForm';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const perks = [
  "First pick of class slots",
  "Founders-only perks",
  "A welcome gift on your first visit",
  "Early invitations to founder preview sessions"
];

export default function WaitlistSection() {
  return (
    <section 
      id="waitlist" 
      className="py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-12 lg:gap-24">
          
          {/* Left Side: Perks */}
          <div className="w-full lg:w-1/2 xl:w-5/12 space-y-12">
            <div className="bg-card/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10">
                <h2 className="text-4xl md:text-5xl font-body font-bold text-primary mb-8">Why Join the TAVÚ Waitlist?</h2>
                <div className="space-y-5">
                    {perks.map((perk, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <CheckCircle2 className="w-8 h-8 flex-shrink-0 text-primary" />
                        <p className="text-2xl font-body text-primary/90">{perk}</p>
                    </div>
                    ))}
                </div>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2">
            <WaitlistForm />
          </div>

        </div>
      </div>
    </section>
  );
}
