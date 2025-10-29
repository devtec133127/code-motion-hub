import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface AboutProps {
  onContactClick?: () => void;
  // optional: Links zu Profilen
  linkedin?: string;
  github?: string;
}

export const About: React.FC<AboutProps> = ({
  onContactClick,
  linkedin,
  github,
}) => {
  return (
    <section id="about" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Avatar / Kurzprofil */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center shadow-md">
              {/* Platzhalter-Avatar: ersetze ggf. durch <img src=... /> */}
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600 text-center">
                  <img
                      src="/dein-bild.jpg"
                      alt="Ich"
                      className="w-32 h-32 rounded-full object-cover"
                  />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold">xxx — Senior Software Engineer</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs text-center">
                Ich bin Marcel Zinnow und habe 18 Jahre als Software Engineer
                komplexe Webanwendungen und Enterprise-Systeme gebaut.
                Beim Automatisieren interner Abläufe habe ich gemerkt, wie viel Wirkung kleine, gezielte Lösungen haben können.
            </p>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs text-center">
                  Jetzt bringe ich diese Erfahrung direkt zu Webflow-Agenturen:
                  Automatisierungen, Integrationen und technische Lösungen,
                  die Ihr Team wirklich entlasten.
              </p>

            <div className="mt-4 flex gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Haupttext / Pitch */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center w-full">
            <h2 className="text-2xl font-bold">Kurz & knapp — was ich für Agenturen tue</h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl">
              Ich helfe Agenturen, wiederkehrende technische Aufgaben auszulagern: von
              Webflow-Integrationen über datengetriebene Features bis zu kleinen
              Backend-Automatisierungen. Ziel: weniger manueller Aufwand, schnellere
              Launches und stabile Abläufe für Ihre Kunden.
            </p>

            {/* Leistungen / Skills */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <SkillItem text="Automatisierte Produktkataloge (Airtable → Webflow)" />
              <SkillItem text="Integration & APIs (REST, Webhooks, kleine Serverless-Tasks)" />
              <SkillItem text="Datenlogik & Business-Rules (Rabatte, Validierungen)" />
              <SkillItem text="Interaktive Frontends & Microinteractions (Webflow / JS)" />
            </div>

            {/* Tech-Stack Chips */}
            <div className="mt-6 flex items-center justify-center flex-wrap gap-2">
              {["Airtable", "Webflow", "Zapier/Make", "Google Workspace / Sheets / Docs", "Trello / Jira", "Mailchimp", "Newsletter-Tools - E-Mail-Kampagnen", "Notion" ].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3 bg-white border border-slate-100 rounded-lg p-3 shadow-sm">
    <span className="flex-shrink-0 mt-0.5">
      <Check className="h-4 w-4 text-green-600" />
    </span>
    <p className="text-sm text-slate-700">{text}</p>
  </div>
);

export default About;