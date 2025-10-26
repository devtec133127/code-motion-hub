import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CodeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  codeSnippet: string;
}

export const CodeModal = ({ open, onOpenChange, title, codeSnippet }: CodeModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      toast.success("Code in Zwischenablage kopiert");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Fehler beim Kopieren");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title} - Code</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 z-10"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Kopiert
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Kopieren
              </>
            )}
          </Button>
          <pre className="bg-secondary p-6 rounded-lg overflow-x-auto text-sm">
            <code className="text-foreground font-mono">{codeSnippet}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
};
