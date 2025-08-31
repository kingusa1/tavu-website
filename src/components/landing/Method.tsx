import { Sprout, Waves, RefreshCcw } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const steps = [
  {
    icon: <Sprout className="w-10 h-10 text-primary" />,
    title: "Ta — Ground",
    description: "Arrive. Feet on the mat. Notice your breath."
  },
  {
    icon: <Waves className="w-10 h-10 text-primary" />,
    title: "VÚ — Flow",
    description: "Move with intention. Rise into gentle, expressive motion."
  },
  {
    icon: <RefreshCcw className="w-10 h-10 text-primary" />,
    title: "Restore",
    description: "Close with breath and contrast to anchor the experience."
  }
];

export default function Method() {
  return (
    <section 
      id="method" 
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-6xl font-body font-bold text-primary">The TAVÚ Method</h3>
          <p className="text-4xl mt-4 font-body text-primary/80">Root → Practice → Restore</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-12 md:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm shadow-2xl border border-white/10 rounded-2xl h-full">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="bg-white/80 rounded-full p-5 mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h4 className="text-4xl font-headline text-primary">{step.title}</h4>
                <p className="text-2xl pt-2 max-w-xs mx-auto font-body text-primary/80 flex-grow">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
