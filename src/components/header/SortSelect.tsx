import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function SortSelect({ value, onValueChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rank">Rank</SelectItem>
        <SelectItem value="price">Annual Fee</SelectItem>
        <SelectItem value="established">Established Year</SelectItem>
      </SelectContent>
    </Select>
  );
}