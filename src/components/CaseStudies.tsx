import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../components/ui/card';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'SaaS',
      challenge: 'Manual lead qualification process taking 15+ hours weekly',
      results: [
        { icon: Clock, value: '30+ hours', label: 'saved per week' },
        { icon: TrendingUp, value: '45%', label: 'lead conversion increase' },
        { icon: DollarSign, value: '$50k', label: 'annual cost reduction' },
      ],
      description: 'Automated lead scoring, CRM updates, and email nurturing workflows.',
    },
    {
      company: 'Growth Marketing Co.',
      industry: 'Marketing Agency',
      challenge: 'Disconnected marketing tools causing data inconsistencies',
      results: [
        { icon: TrendingUp, value: '3x', label: 'campaign efficiency' },
        { icon: Clock, value: '20+ hours', label: 'saved monthly' },
        { icon: DollarSign, value: '90%', label: 'error reduction' },
      ],
      description: 'Unified marketing automation across 8+ platforms with real-time sync.',
    },
    {
      company: 'RetailFlow Systems',
      industry: 'E-commerce',
      challenge: 'Order processing and inventory management bottlenecks',
      results: [
        { icon: TrendingUp, value: '5x', label: 'faster order processing' },
        { icon: Clock, value: '25+ hours', label: 'saved weekly' },
        { icon: DollarSign, value: '99.8%', label: 'accuracy rate' },
      ],
      description: 'End-to-end order fulfillment automation with multi-warehouse sync.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've helped companies transform their operations with intelligent automation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 lg:p-10 hover-lift">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">{caseStudy.company}</h3>
                      <p className="text-sm text-primary font-semibold">{caseStudy.industry}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-muted-foreground">Challenge</h4>
                      <p className="text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-muted-foreground">Solution</h4>
                      <p className="text-sm">{caseStudy.description}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="font-semibold mb-6">Key Results</h4>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {caseStudy.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div
                            key={idx}
                            className="text-center p-6 rounded-xl bg-muted/50 border border-border"
                          >
                            <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                            <div className="text-3xl font-bold gradient-text mb-2">
                              {result.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
