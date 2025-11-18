import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-foreground">
          KASKLO Car
        </div>
        <Button 
          variant="default" 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
          asChild
        >
          <a href="tel:+420777073754" className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            777 073 754
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;