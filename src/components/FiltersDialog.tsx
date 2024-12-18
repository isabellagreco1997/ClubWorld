import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { FilterState } from "@/types";

interface FiltersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

export default function FiltersDialog({ 
  open, 
  onOpenChange, 
  filters, 
  onFiltersChange,
  onReset 
}: FiltersDialogProps) {
  const handlePriceChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      priceRange: value
    });
  };

  const handleAmenityChange = (amenity: keyof FilterState['amenities'], checked: boolean) => {
    onFiltersChange({
      ...filters,
      amenities: {
        ...filters.amenities,
        [amenity]: checked
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-gray-900 font-semibold">Filter Clubs</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            <div>
              <Label className="text-gray-700">Price Range ($/year)</Label>
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceChange}
                max={50000}
                step={1000}
                className="mt-2"
              />
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-600">
                  ${filters.priceRange[0].toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">
                  ${filters.priceRange[1].toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="wifi" className="text-gray-700">WiFi Required</Label>
                <Switch 
                  id="wifi" 
                  checked={filters.amenities.wifi}
                  onCheckedChange={(checked) => handleAmenityChange('wifi', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="gym" className="text-gray-700">Gym Access</Label>
                <Switch 
                  id="gym" 
                  checked={filters.amenities.gym}
                  onCheckedChange={(checked) => handleAmenityChange('gym', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="events" className="text-gray-700">Events & Programming</Label>
                <Switch 
                  id="events" 
                  checked={filters.amenities.events}
                  onCheckedChange={(checked) => handleAmenityChange('events', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="guests" className="text-gray-700">Guest Access</Label>
                <Switch 
                  id="guests" 
                  checked={filters.amenities.guests}
                  onCheckedChange={(checked) => handleAmenityChange('guests', checked)}
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onReset}>Reset</Button>
          <Button onClick={() => onOpenChange(false)}>Apply Filters</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}