import { Button } from "@/components/ui/button";
import { Building2, Search, Users2 } from "lucide-react";
import { useState } from "react";
import { PaywallModal } from "../paywall/PaywallModal";
import { useSubscription } from "@/hooks/useSubscription";

export function Hero() {
  const [showPaywall, setShowPaywall] = useState(false);
  const isSubscribed = useSubscription((state) => state.isSubscribed);

  const handleExploreClick = () => {
    if (!isSubscribed) {
      setShowPaywall(true);
    } else {
      // Scroll to clubs section if subscribed
      document.getElementById('clubs-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070"
            alt="Elegant club interior"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[90vh] flex-col justify-center py-20">
            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Your Guide to Private Members Clubs Worldwide
              </h1>
              <p className="mb-8 text-lg text-gray-300">
                Discover and compare the world's most prestigious private members clubs. From historic institutions to modern creative spaces, find your perfect community.
              </p>

              {/* Key Features */}
              <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6 text-primary" />
                  <span className="text-gray-200">Compare Clubs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="text-gray-200">200+ Venues</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users2 className="h-6 w-6 text-primary" />
                  <span className="text-gray-200">Member Reviews</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8"
                onClick={handleExploreClick}
              >
                Explore Clubs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PaywallModal 
        open={showPaywall} 
        onOpenChange={setShowPaywall}
      />
    </>
  );
}