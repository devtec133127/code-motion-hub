import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">
              © {currentYear} Technische Umsetzung mit GSAP & Webflow
            </p>
            <p className="text-xs opacity-70 mt-1">
              Professionelle Motion Design Integration für Agenturen
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:kontakt@example.com"
              className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              aria-label="E-Mail"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
