
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
      onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      {/* === FULL BACKGROUND LAYER === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* LaserFlow as background */}
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
          style={
            {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              mixBlendMode: "lighten",
              opacity: 0.3,
              pointerEvents: "none",

              "--mx": "-9999px",
              "--my": "-9999px",

              WebkitMaskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              maskImage:
                "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            } as CSSWithVars
          }
        />

        {/* Optional glow background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* === FOREGROUND CONTENT (unchanged) === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content ... unchanged */}
          {/* <!-- your exact left hero content stays same --> */}
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
              Automate Your Business with{' '}
              <span className="gradient-text">Powerful n8n Workflows</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Save time, reduce costs, and scale effortlessly with our tailored automation systems. Transform repetitive tasks into seamless workflows.
            </motion.p>

            {/* Email Capture */}
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

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm"
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
          {/* Right content area (use your image or animation here) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Put your hero image or 3D object here */}
      

          </motion.div>
        </div>

        {/* Stats section unchanged */}
        {/* <!-- your stats content --> */}
      </div>
    </section>
  );
};

export default Hero;
