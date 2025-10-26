import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  demoUrl: string;
}

export const DemoModal = ({ open, onOpenChange, title, demoUrl }: DemoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full h-full">
          <iframe
            src={demoUrl}
            className="demo-iframe w-full h-full rounded-lg border border-border"
            loading="lazy"
            title={`Demo: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
