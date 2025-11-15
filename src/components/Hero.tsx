import CardSwap, { Card } from '../components/CardSwap';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import LaserFlow from '../components/LaserFlow';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ArrowRight, CheckCircle } from 'lucide-react';

type CSSWithVars = React.CSSProperties & {
  "--mx"?: string;
  "--my"?: string;
};

const Hero = () => {
  const revealImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 pb-16"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (revealImgRef.current) {
          revealImgRef.current.style.setProperty("--mx", `${x}px`);
          revealImgRef.current.style.setProperty("--my", `${y}px`);
        }
      }}
      onMouseLeave={() => {
        if (revealImgRef.current) {
          revealImgRef.current.style.setProperty("--mx", "-9999px");
          revealImgRef.current.style.setProperty("--my", "-9999px");
        }
      }}
    >
      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#FF79C6"
        />

        {/* Magical reveal image */}
        <img
          ref={revealImgRef}
          src="/path/to/image.jpg"
          alt="Reveal"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
          style={
            {
              mixBlendMode: "lighten",

              "--mx": "-9999px",
              "--my": "-9999px",

              WebkitMaskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              maskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
            } as CSSWithVars
          }
        />

        {/* Glow background circles */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* === FOREGROUND CONTENT === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                🚀 Automate Your Business Workflows
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Automate Your Business with{" "}
              <span className="gradient-text">Powerful n8n Workflows</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Save time, reduce costs, and scale effortlessly with our tailored automation systems.
            </motion.p>

            {/* EMAIL INPUT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              <Input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 h-12 px-6 text-base"
              />
              <Button className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* SOCIAL PROOF */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">Free consultation</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">No credit card required</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">24/7 support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — RESPONSIVE CARD SWAP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full flex justify-center "
          >
            <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-full aspect-16/10">
              <CardSwap
                cardDistance={40}
                verticalDistance={60}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <img src="/workflow1.webp" className="w-full h-full object-cover rounded-xl" />
                </Card>
                <Card>
                  <img src="/workflow1.webp" className="w-full h-full object-cover rounded-xl" />
                </Card>
                <Card>
                  <img src="/workflow1.webp" className="w-full h-full object-cover rounded-xl" />
                </Card>
              </CardSwap>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
