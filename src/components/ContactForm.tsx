import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface FormModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ContactForm = ({ open, onOpenChange }: FormModalProps) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!name.trim()) {
            toast.error("Bitte geben Sie Ihren Namen an.");
            return false;
        }
        // einfache E-Mail-Validierung
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Bitte geben Sie eine gültige E-Mail-Adresse an.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {
            const res = await fetch("https://prozess-integration.de/wp-json/custom-api/v1/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ name: name.trim(), email: email.trim() }),
            });

            if (res.ok) {
                const data = await res.json().catch(() => null);
                toast.success((data && data.message) || "Anfrage erfolgreich eingegangen");
                setName("");
                setEmail("");
                onOpenChange(false); // Modal schließen, optional
            } else {
                // Wenn WP_Error kommt, inspect message
                const err = await res.json().catch(() => ({ message: "Fehler beim Absenden" }));
                toast.error(err.message || "Fehler beim Absenden");
            }
        } catch (err) {
            toast.error("Verbindung fehlgeschlagen");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Erstgespräch anfragen</DialogTitle>
                </DialogHeader>

                <p className="text-sm text-muted-foreground mb-4">
                    Für ein kostenloses Erstgespräch tragen Sie bitte hier Ihre E-Mail Adresse ein.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="text"
                        placeholder="Ihr Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Deine E-Mail-Adresse"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Senden..." : "Absenden"}
                    </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-3">
                    Ich werde mich innerhalb weniger Tage bei Ihnen melden.
                </p>
            </DialogContent>
        </Dialog>
    );
};