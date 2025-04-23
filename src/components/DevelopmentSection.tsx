
import { Button } from "@/components/ui/button";

export function DevelopmentSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sold-text">
          Built with <span className="text-primary">Love</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We're building SOLD with love. Join our journey and help shape the future of local shopping.
        </p>
        <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-lg">
          <p className="text-lg font-medium mb-6 text-sold-text">
            Hi, I'm Leon Saidavi
          </p>
          <p className="text-gray-600 mb-6">
            I started SOLD because I believe in the power of local businesses to create vibrant communities. Our mission is to make supporting local businesses rewarding for everyone.
          </p>
          <img
            src="/placeholder.svg"
            alt="Leon Saidavi"
            className="w-20 h-20 rounded-full mx-auto mb-6"
          />
        </div>
      </div>
    </section>
  );
}
