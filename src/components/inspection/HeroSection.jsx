import { ShieldCheck, HardHat, ScanSearch } from "lucide-react";
import Button from "../ui/Button";

const features = [
  {
    icon: <HardHat className="h-5 w-5" />,
    title: "PPE Detection",
    description: "Helmet, Safety Vest and Worker Detection",
  },
  {
    icon: <ScanSearch className="h-5 w-5" />,
    title: "AI Inspection",
    description: "YOLO-powered real-time compliance analysis",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Safety Reports",
    description: "Generate inspection summaries instantly",
  },
];

export default function HeroSection() {
  const scrollToUpload = () => {
    const section = document.getElementById("upload-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-800">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-transparent" />

      <div className="container-xl relative py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
            AI Construction Safety Inspection
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            PPE Sentinel
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Detect helmets, safety vests, and workers using AI-powered computer
            vision. Instantly identify PPE violations and generate inspection
            reports for construction site safety.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToUpload}>
              Start Inspection
            </Button>

            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}