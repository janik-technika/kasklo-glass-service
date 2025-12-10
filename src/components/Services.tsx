import { Wrench, Car, Home, Shield, Sparkles, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Lepení autoskel",
    description: "Profesionální lepení předních i zadních autoskel",
  },
  {
    icon: Car,
    title: "Výměny autoskel",
    description: "Výměny autoskel vsazených do gumy",
  },
  {
    icon: Home,
    title: "Mobilní servis",
    description: "Výměny přímo u zákazníka",
  },
  {
    icon: Shield,
    title: "Opravy autoskel",
    description: "Odborné opravy poškozených autoskel",
  },
  {
    icon: Sparkles,
    title: "Čištění interiéru",
    description: "Ruční čištění interiéru vozu",
  },
  {
    icon: Package,
    title: "Rozvoz zboží",
    description: "Rychlý a spolehlivý rozvoz",
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Naše služby
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Kompletní péče o vaše autosklo
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-6 hover:bg-glass/30 transition-all duration-300 hover-scale"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Insurance Info */}
        <div className="backdrop-blur-xl bg-glass/20 border border-glass-border/50 rounded-2xl p-8 mb-6 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pojištění a vyřízení škodní události
          </h3>
          <p className="text-lg text-foreground/90 mb-4">
            Provádíme výměnu autoskel z <strong>povinného ručení nebo připojištění</strong> – na všechny typy vozidel (osobní, nákladní, autobusové).
          </p>
          <p className="text-lg text-foreground/90">
            <strong>Vyřizujeme za vás škodní událost u všech pojišťoven.</strong> Nemusíte nic řešit, stačí přistavit vozidlo.
          </p>
        </div>

        {/* Evening Service Highlight */}
        <div className="backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-2xl p-8 shadow-glow animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Nemáte čas v dopoledních nebo odpoledních hodinách?
          </h3>
          <p className="text-lg text-foreground">
            <strong>Nevadí – vyměníme sklo i večer nebo v sobotu, u vás doma nebo ve firmě!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;