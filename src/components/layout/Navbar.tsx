import { Building2 } from "lucide-react";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">ClubWorld</span>
          </div>
        </div>
      </div>
    </nav>
  );
}