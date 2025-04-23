
import { Button } from "@/components/ui/button";
import { CircleDollarSign, QrCode, ShoppingCart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-sold-bg to-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <div className="animate-fade-up space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-sold-text tracking-tight">
            Turn Every Visit Into a{" "}
            <span className="text-primary">Rewarding Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            SOLD helps local businesses build loyalty through a smart QR-based reward system
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Join the Waitlist
            </Button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
            <QrCode className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Quick Scan</h3>
            <p className="text-gray-600">Simple QR-based loyalty system</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
            <CircleDollarSign className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Earn Points</h3>
            <p className="text-gray-600">Automatic rewards tracking</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
            <ShoppingCart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Get Rewards</h3>
            <p className="text-gray-600">Redeem at local favorites</p>
          </div>
        </div>
      </div>
    </section>
  );
}
