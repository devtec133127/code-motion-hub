import { Linkedin, Mail } from "lucide-react";
import { HashLink as Link } from 'react-router-hash-link'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <>
          <footer className="relative py-12 px-6 bg-primary text-primary-foreground">
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
                  {/* linke Seite */}
                  <div className="text-left max-w-sm">
                      <p className="text-sm opacity-90">
                          © {currentYear} Automatisierung – Integration – smarte Workflows
                      </p>
                      <p className="text-xs opacity-70 mt-1">
                          Ich helfe Agenturen, interne Abläufe zu automatisieren und Zeit für kreatives Design zu gewinnen
                      </p>
                  </div>

                  {/* rechte Icons */}
                  <div className="flex gap-4">
                      <a href="https://linkedin.com/in/marcelzinnnow" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors" aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="mailto:kontakt@prozess-integration.de" className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors" aria-label="E-Mail">
                          <Mail className="h-5 w-5" />
                      </a>
                  </div>
              </div>

              {/* mittig – Desktop ≥1024px */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-6 text-xs opacity-80 z-10">
                  <Link smooth to="#impressum" className="hover:underline">Impressum</Link>
                  <Link smooth to="#datenschutz" className="hover:underline">Datenschutz</Link>
              </div>

              {/* mittig – Tablet 768–1023px */}
              <div className="hidden md:flex lg:hidden justify-center mt-6 gap-6 text-xs opacity-80">
                  <Link smooth to="#impressum" className="hover:underline">Impressum</Link>
                  <Link smooth to="#datenschutz" className="hover:underline">Datenschutz</Link>
              </div>

              {/* mittig – Mobile <768px */}
              <div className="flex md:hidden justify-center mt-6 gap-6 text-xs opacity-80">
                  <Link smooth to="#impressum" className="hover:underline">Impressum</Link>
                  <Link smooth to="#datenschutz" className="hover:underline">Datenschutz</Link>
              </div>
          </footer>

          <section id="impressum" className="max-w-3xl mx-auto px-6 py-16">
              <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
              <p className="text-sm leading-relaxed opacity-80">
                  Verantwortlich für den Inhalt dieser Website ist ...
              </p>
          </section>

          <section id="datenschutz" className="max-w-3xl mx-auto px-6 py-16">
              <h2 className="text-2xl font-semibold mb-4">Datenschutzerklärung</h2>
              <p className="text-sm leading-relaxed opacity-80">
                  Diese Website erhebt und verarbeitet personenbezogene Daten ausschließlich im Rahmen ...
              </p>
          </section>
      </>
  );
};
