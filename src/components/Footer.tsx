import { Mail, ExternalLink, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Teaching", href: "#teaching" },
    { label: "Contact", href: "#contact" }
  ];

  const externalLinks = [
    { label: "Google Scholar", href: "#" },
    { label: "ORCID", href: "#" },
    { label: "Stanford CS", href: "#" },
    { label: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold">
              Dr. Alexandra Chen
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professor of Computer Science at Stanford University, 
              specializing in artificial intelligence, machine learning, 
              and advancing the frontiers of computational intelligence.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>achen@cs.stanford.edu</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Professional Profiles</h4>
            <div className="space-y-2">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Dr. Alexandra Chen. All rights reserved.
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;