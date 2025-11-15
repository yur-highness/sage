


import { TracingBeam } from "../components/ui/tracing-beam";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Calendar, Pencil, TestTube, Rocket } from "lucide-react";

export default function TracingBeamMerged() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Calendar,
      title: "Book a Call",
      description:
        "Schedule a free consultation to discuss your business needs and automation goals.",
    },
    {
      icon: Pencil,
      title: "Design Your Workflow",
      description:
        "Our experts map out the perfect automation strategy tailored to your processes.",
    },
    {
      icon: TestTube,
      title: "Build & Test",
      description:
        "We develop and rigorously test your custom workflows to ensure flawless operation.",
    },
    {
      icon: Rocket,
      title: "Deploy & Scale",
      description:
        "Launch your automation and watch your efficiency soar with ongoing support.",
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative">
  
     

        <section id="how-it-works" className="py-20 lg:py-28 bg-muted/20 rounded-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary font-semibold text-xs uppercase tracking-wide">
                Simple Process
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                How It Works
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started with automation in four simple steps. We handle the
                complexity while you focus on growing your business.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative mb-14 last:mb-0"
                  >
                    <div
                      className={`flex flex-col md:flex-row items-center gap-8 ${
                        isEven ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="shrink-0 relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-xl">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>

                      <div
                        className={`flex-1 text-center md:text-${
                          isEven ? "left" : "right"
                        }`}
                      >
                        <h3 className="text-2xl font-bold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-12 top-24 w-0.5 h-14 bg-linear-to-b from-primary to-accent opacity-30"></div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </TracingBeam>
  );
}

