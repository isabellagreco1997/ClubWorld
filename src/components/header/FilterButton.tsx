import { SlidersHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FilterButtonProps {
  onClick: () => void;
}

export function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <Button 
      variant="outline" 
      onClick={onClick}
      className="flex items-center gap-2"
    >
      <SlidersHorizontal className="h-4 w-4" />
      Filters
    </Button>
  );
}