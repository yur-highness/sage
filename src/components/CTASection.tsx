import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-medium mb-8">
            <Sparkles className="h-5 w-5 text-black" />
            <span className="text-sm font-semibold text-black">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Start Automating Your Business{' '}
            <span className="gradient-text">Today</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our 
            custom n8n automation workflows. Book a free consultation and discover how 
            much time and money you could be saving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="h-14 px-8 text-base bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-large group"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-base font-semibold border-2"
            >
              View Pricing
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            🎁 Book this week and get <span className="font-semibold text-primary">3 months of free maintenance</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
