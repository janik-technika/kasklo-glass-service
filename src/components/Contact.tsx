import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Kontakt
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Jsme tu pro vás
        </p>

        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 md:p-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Kontakty KASKLO Car, s.r.o.
            </h3>

            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Adresa:</h4>
                  <p className="text-lg text-foreground/90">KASKLO Car, s.r.o.</p>
                  <p className="text-lg text-foreground/90">Jasenická 1654</p>
                  <p className="text-lg text-foreground/90">75501 Vsetín</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Email:</h4>
                  <a 
                    href="mailto:auto.skla@centrum.cz"
                    className="text-lg text-primary hover:text-primary/80 transition-colors"
                  >
                    auto.skla@centrum.cz
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Telefon (Pavel Pavlenda):</h4>
                  <a 
                    href="tel:+420777073754"
                    className="text-lg text-primary hover:text-primary/80 transition-colors"
                  >
                    +420 777 073 754
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                asChild
              >
                <a href="tel:+420777073754" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Zavolat
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;