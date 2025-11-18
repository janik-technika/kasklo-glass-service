import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-glass/30 border border-glass-border/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              KASKLO Car, s.r.o.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-2">
              Autosklo Vsetín
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Mobilní opravna autoskel – přijedeme k vám domů, do firmy i večer nebo o víkendu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg"
                asChild
              >
                <a href="tel:+420777073754" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zavolat: 777 073 754
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary/80 hover:bg-secondary backdrop-blur-sm text-lg"
                asChild
              >
                <a href="#kontakt" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Objednat výměnu autoskla
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;