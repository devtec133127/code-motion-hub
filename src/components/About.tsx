import React from "react";
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
              <div className="w-[260px] h-[260px] rounded-full bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center shadow-md">
                  <div className="w-[260px] h-[260px] rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center shadow-md">
                      <div className="w-[200px] h-[200px] rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                          <img
                              src="/Profil_transparent.png"
                              alt="Marcel Zinnow - Software Engineer"
                              className="avatar-fixed"
                              width={150}
                              height={150}
                          />
                      </div>
                  </div>

              </div>



              <h3 className="mt-6 text-xl font-semibold">Marcel Zinnow — Software Engineer</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs text-center">
                Über 18 Jahre habe ich als Software Engineer viele
                komplexe Webanwendungen und Enterprise-Systeme gebaut.
                Beim Automatisieren interner Abläufe habe ich gemerkt, wie viel Wirkung kleine, gezielte Lösungen haben können.
            </p>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs text-center">
                  Automatisierte Workflows, Custom-Integrationen und laufende Betreuung –
                  damit Ihr Unternehmen reibungslos läuft
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
            </div>
          </div>

          {/* Haupttext / Pitch */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center w-full">
            <h2 className="text-2xl font-bold">Technische Lösungen für Ihr Webflow-Projekt</h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl">
              Ich übernehme wiederkehrende technische Aufgaben und laufende Betreuung: von
              CRM/ERP-Integrationen über Anbindung von Drittsystemen und Datenbanken bis zu Workflow Automatisierungen.
                Ziel: weniger manueller Aufwand, stabile Abläufe und eine professionelle Betreuung für Ihr Unternehmen.
            </p>

            {/* Leistungen / Skills */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <SkillItem text="Integration & Anbindung" />
              <SkillItem text="Wartung & Support" />
              <SkillItem text="Automatisierung" />
              <SkillItem text="Beratung & Analyse" />
            </div>

            {/* Tech-Stack Chips */}
            <div className="mt-6 flex items-center justify-center flex-wrap gap-2">
              {["Microsoft Dynamics | HubSpot | Pipedrive", "PostgreSQL | MariaDB | MSSQL"  ].map(
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