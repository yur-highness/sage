import { Facebook, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#services' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Case Studies', href: '#' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-foreground text-background dark:bg-card dark:text-card-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold gradient-text inline-block mb-4">
              Sage
            </a>
            <p className="text-background/70 dark:text-card-foreground/70 mb-6 max-w-sm">
              Transform your business operations with powerful n8n automation workflows. 
              Save time, reduce costs, and scale effortlessly.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 dark:bg-card-foreground/10 dark:hover:bg-card-foreground/20 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background dark:text-card-foreground/70 dark:hover:text-card-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background dark:text-card-foreground/70 dark:hover:text-card-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background dark:text-card-foreground/70 dark:hover:text-card-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background dark:text-card-foreground/70 dark:hover:text-card-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 dark:border-card-foreground/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm text-background/70 dark:text-card-foreground/70">
                Get the latest automation tips and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50 dark:text-card-foreground/50" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-background/10 dark:bg-card-foreground/10 border border-background/20 dark:border-card-foreground/20 text-background dark:text-card-foreground placeholder:text-background/50 dark:placeholder:text-card-foreground/50 focus:outline-none focus:ring-2 focus:ring-background/30 dark:focus:ring-card-foreground/30"
                />
              </div>
              <button className="h-11 px-6 rounded-lg bg-background dark:bg-card-foreground text-foreground dark:text-card font-semibold hover:bg-background/90 dark:hover:bg-card-foreground/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 dark:border-card-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70 dark:text-card-foreground/70">
          <p>© 2025 sage. All rights reserved.</p>
          <p>
            Crafted by TECHWIZARD.
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
