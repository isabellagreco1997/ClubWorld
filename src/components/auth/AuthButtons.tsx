import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="text-gray-200 hover:text-white">
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </Button>
      <Button className="bg-white text-black hover:bg-gray-100">
        <UserPlus className="mr-2 h-4 w-4" />
        Join Now
      </Button>
    </div>
  );
}