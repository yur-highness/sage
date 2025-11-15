import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Check, Sparkles } from 'lucide-react';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: 'one-time',
      description: 'Perfect for small businesses just getting started with automation',
      features: [
        'Up to 3 workflow integrations',
        'Basic CRM & email automation',
        '2 revision rounds',
        'Standard support',
        'Implementation in 5-7 days',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$1,499',
      period: 'one-time',
      description: 'Ideal for growing businesses needing comprehensive automation',
      features: [
        'Up to 10 workflow integrations',
        'Advanced CRM, marketing & data sync',
        '5 revision rounds',
        'Priority support',
        'Implementation in 3-5 days',
        'Custom API integrations',
        '3 months free maintenance',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Tailored solutions for large organizations with complex needs',
      features: [
        'Unlimited workflow integrations',
        'Full-stack automation system',
        'Unlimited revisions',
        'Dedicated account manager',
        'Priority implementation',
        'Advanced custom development',
        '12 months free maintenance',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Choose Your Automation Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include deployment and training.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-medium">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card
                className={`p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'border-2 border-primary shadow-large scale-105'
                    : 'hover-lift'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 font-semibold ${
                    plan.popular
                      ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
