
import { Award, Hand, HandCoins, HandHeart } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sold-text">
          Why Choose <span className="text-primary">SOLD</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-4">
            <HandHeart className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Support Local Business</h3>
            <p className="text-gray-600">
              Help your favorite local shops thrive while earning rewards. It's a win-win!
            </p>
          </div>
          
          <div className="space-y-4">
            <HandCoins className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Effortless Rewards</h3>
            <p className="text-gray-600">
             Scan. Collect. Enjoy. With SOLD, every visit to your favorite local shop earns you points—no cards, no hassle.
            </p>
          </div>
          
          <div className="space-y-4">
            <Award className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Exclusive Perks</h3>
            <p className="text-gray-600">
              Get access to special offers and rewards from your favorite local spots.
            </p>
          </div>
          
          <div className="space-y-4">
            <Hand className="w-12 h-12 text-primary" />
            <h3 className="text-xl font-semibold">Community First</h3>
            <p className="text-gray-600">
              Join a community of conscious consumers supporting local businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
