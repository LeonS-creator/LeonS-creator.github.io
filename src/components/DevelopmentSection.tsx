
import { Computer, User } from "lucide-react";

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

          <p className="text-gray-600 mb-6">
            I started SOLD because I believe in the power of local businesses to create vibrant communities. Our mission is to make supporting local businesses rewarding for everyone.
          </p>
          <div className="flex items-center justify-center mb-6">
            <Computer className="w-10 h-10 text-primary mr-3" />
            <p className="text-lg font-medium text-sold-text ml-4">
              Hi, I'm Leon Saidavi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
