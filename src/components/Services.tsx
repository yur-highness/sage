import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '../components/ui/card';
import { Database, Mail, RefreshCw, Workflow, BarChart3, Zap } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect and sync your CRM with all your business tools. Automate lead management and customer data flow.',
      color: 'text-primary',
    },
    {
      icon: Mail,
      title: 'Marketing Automation',
      description: 'Automate email campaigns, social media posting, and lead nurturing workflows to scale your marketing efforts.',
      color: 'text-accent',
    },
    {
      icon: RefreshCw,
      title: 'Data Sync Across Platforms',
      description: 'Keep all your platforms in perfect sync. Eliminate manual data entry and reduce errors across your tech stack.',
      color: 'text-secondary',
    },
    {
      icon: Workflow,
      title: 'Workflow Optimization',
      description: 'Streamline complex business processes with intelligent automation. Save time and reduce operational costs.',
      color: 'text-primary',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Automate data collection and generate comprehensive reports. Get actionable insights without manual work.',
      color: 'text-accent',
    },
    {
      icon: Zap,
      title: 'Custom Integrations',
      description: 'Connect any tools with custom API integrations. Build tailored solutions for your unique business needs.',
      color: 'text-secondary',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Powerful Automation Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with our comprehensive n8n automation services. 
            We handle everything from simple integrations to complex workflow systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-lift group cursor-pointer border-2 hover:border-primary/20 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
