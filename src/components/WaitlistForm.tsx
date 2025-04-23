
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isTester, setIsTester] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for joining!",
      description: "We'll keep you updated on our progress.",
    });
    setEmail("");
    setIsTester(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-sold-text">
          Be Part of Our Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our waitlist to get early access and exclusive updates
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-primary hover:bg-primary-dark">
              Join Waitlist
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <Checkbox
              id="tester"
              checked={isTester}
              onCheckedChange={(checked) => setIsTester(checked as boolean)}
            />
            <label
              htmlFor="tester"
              className="text-sm text-gray-600 cursor-pointer"
            >
              I'd like to be a beta tester
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
