import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: 'What is n8n and why should I use it for automation?',
      answer:
        'n8n is a powerful, open-source workflow automation tool that connects your apps and services. It offers flexibility, cost-effectiveness, and complete control over your data. Unlike proprietary solutions, n8n can be self-hosted and customized to your exact needs without vendor lock-in.',
    },
    {
      question: 'How long does it take to implement automation workflows?',
      answer:
        'Implementation time varies based on complexity. Simple workflows (2-3 integrations) can be deployed in 3-5 days, while comprehensive automation systems may take 2-4 weeks. Our Pro plan guarantees implementation within 3-5 days, and we provide clear timelines during the consultation phase.',
    },
    {
      question: 'Do I need technical knowledge to use the automations you build?',
      answer:
        'No technical knowledge is required! We build, test, and deploy everything for you. You\'ll receive comprehensive training and documentation on how to monitor and manage your workflows. We also provide ongoing support to ensure smooth operations.',
    },
    {
      question: 'Can you integrate with our existing tools and software?',
      answer:
        'Yes! n8n supports over 350+ integrations including popular tools like Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, and many more. If your tool has an API, we can build custom integrations to connect it seamlessly with your workflow.',
    },
    {
      question: 'What happens if something breaks or needs updating?',
      answer:
        'All our plans include post-implementation support. Pro plans include 3 months of free maintenance, and Enterprise plans include 12 months. We monitor your workflows, provide updates, and quickly resolve any issues. We also offer extended maintenance contracts for ongoing support.',
    },
    {
      question: 'How secure are the automated workflows?',
      answer:
        'Security is our top priority. All data transmission is encrypted, we follow industry best practices for API authentication, and sensitive credentials are stored securely. For Enterprise clients, we can implement additional security measures including self-hosted solutions and custom security protocols.',
    },
    {
      question: 'Can I make changes to the workflows after implementation?',
      answer:
        'Absolutely! While we handle the initial setup, you can request modifications at any time. Minor tweaks are often covered under maintenance plans. For significant changes, we offer revision packages or can train your team to make basic adjustments themselves.',
    },
    {
      question: 'What ROI can I expect from automation?',
      answer:
        'Most clients see ROI within 2-3 months through time savings and error reduction. Our clients typically save 20-30+ hours per week on manual tasks, reduce errors by 90%+, and see significant improvements in team productivity. We provide detailed ROI projections during the consultation.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? 
            <a href="#contact" className="text-primary hover:underline ml-1">Contact us</a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
