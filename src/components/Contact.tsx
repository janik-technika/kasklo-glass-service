import { MapPin, Mail, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.5!2d17.9925!3d49.3386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47134abce1f3c2ed%3A0x8c9e0a6b5d4e3f2a!2sJasenick%C3%A1%201654%2C%20755%2001%20Vset%C3%ADn!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz";
  const navigationUrl = "https://www.google.com/maps/dir/?api=1&destination=Jasenická+1654,+75501+Vsetín,+Czech+Republic";

  return (
    <section id="kontakt" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Kontakt
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Jsme tu pro vás
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 md:p-10">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Kontakty KASKLO Car, s.r.o.
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Adresa:</h4>
                  <p className="text-lg text-foreground/90">KASKLO Car, s.r.o.</p>
                  <p className="text-lg text-foreground/90">Jasenická 1654</p>
                  <p className="text-lg text-foreground/90">75501 Vsetín</p>
                </div>
              </div>

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
              <Button 
                size="lg" 
                variant="secondary"
                asChild
              >
                <a href="mailto:auto.skla@centrum.cz" className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Napsat e-mail
                </a>
              </Button>
            </div>
          </Card>

          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 overflow-hidden flex flex-col">
            <div className="flex-1 min-h-[300px]">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - KASKLO Car, s.r.o., Jasenická 1654, Vsetín"
              />
            </div>
            <div className="p-6">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                asChild
              >
                <a 
                  href={navigationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Navigovat na provozovnu
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