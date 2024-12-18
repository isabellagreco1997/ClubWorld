import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, Check } from "lucide-react";

interface PaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PaywallModal({ open, onOpenChange }: PaywallModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-6">
        <DialogHeader className="space-y-4">
          <DialogTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Building2 className="h-6 w-6" />
            Unlock All Clubs
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Single Prominent Pricing Option */}
          <div className="rounded-lg bg-primary/5 p-6 text-center space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Annual Membership</p>
              <div className="text-3xl font-bold">$199<span className="text-lg font-normal text-muted-foreground">/year</span></div>
            </div>
            <Button className="w-full text-lg py-6" size="lg">
              Get Started
            </Button>
          </div>

          {/* Quick Feature List */}
          <div className="space-y-3">
            {[
              "Access to 200+ exclusive clubs",
              "Member reviews and ratings",
              "Compare membership prices",
              "New club alerts"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Monthly Option Link */}
          <div className="text-center pt-2">
            <Button variant="link" className="text-sm text-muted-foreground">
              Looking for monthly billing? Click here
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}