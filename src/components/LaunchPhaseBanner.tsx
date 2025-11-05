import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket } from "lucide-react";

export const LaunchPhaseBanner = ({ onContactClick }: { onContactClick?: () => void }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-4 shadow-sm"
            aria-label="Launch-Phase Banner"
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center">
                <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-800">
                        Launch-Phase — limitiertes Angebot
                    </h3>

                    <p className="mt-1 text-xs text-slate-600">
                        Pilotprojekt-Kunden erhalten <strong>15 % Rabatt</strong> und <strong>kostenlosen Support</strong> in den ersten 30 Tagen.
                    </p>

                    <p className="text-xs text-black-100 mb-2 mt-2">
                        <strong>Das Angebot gilt nur für eine begrenzte Zahl an Projekten während der Startphase.</strong>
                    </p>

                    {/* kompakter Hinweis zu Feedback & Referenz */}
                    <p className="mt-4 text-xs text-slate-500 italic">
                        Im Gegenzug bitte ich um ein kurzes Feedback-Gespräch nach Abschluss
                        — und (optional) eine kurze Referenz, falls Sie zufrieden sind.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};