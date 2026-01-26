import { Car, Clock, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const timeInfo = [
  {
    icon: Clock,
    title: "Oprava scelením",
    time: "30–45 minut",
    description: "Po opravě ihned k provozu",
  },
  {
    icon: Clock,
    title: "Kompletní výměna",
    time: "1–2 hodiny",
    description: "Podle náročnosti vozidla",
  },
  {
    icon: Car,
    title: "Provozuschopnost",
    time: "Do 1 hodiny",
    description: "Po výměně můžete vyrazit",
  },
];

const locations = [
  "U vás doma",
  "V práci nebo ve firmě",
  "Na parkovišti",
  "Během nákupu",
  "Na zahradě",
  "Kdekoliv potřebujete",
];

const MobileService = () => {
  return (
    <section id="mobilni-servis" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Mobilní servis
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Nejezděte s poškozeným sklem – my přijedeme za vámi
          </p>

          {/* Main Info */}
          <div className="backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-2xl p-8 mb-8 shadow-glow animate-fade-in">
            <div className="flex items-start gap-4">
              <Car className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Přijedeme, kdy a kam potřebujete
                </h3>
                <p className="text-lg text-foreground/90 mb-4">
                  Realizace na <strong>vámi zvolené adrese</strong> a <strong>vámi vybraném čase</strong>. 
                  Naše mobilní týmy jsou plně vybaveny pro práci v terénu, proto nabízíme klientům servis autoskel 
                  na klientem určeném místě.
                </p>
                <p className="text-lg text-foreground/90">
                  <strong>Pracujeme 7 dní v týdnu</strong> – práce o víkendu nám není cizí. 
                  Snažíme se vždy klientovi vyjít vstříc.
                </p>
              </div>
            </div>
          </div>

          {/* Time Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {timeInfo.map((item, index) => (
              <Card 
                key={index}
                className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-6 text-center animate-fade-in hover-scale"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{item.time}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Where we come */}
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Kam přijedeme?
                </h3>
                <p className="text-lg text-muted-foreground">
                  Naši technici přijedou kamkoliv, kde je to pro vás pohodlné
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-secondary/30 rounded-xl p-4 flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{location}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Weekend Availability */}
          <div className="mt-8 backdrop-blur-xl bg-glass/20 border border-glass-border/50 rounded-2xl p-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <Calendar className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nemáte čas ve všední dny?
                </h3>
                <p className="text-lg text-foreground/90">
                  <strong>Nevadí – přijedeme i večer nebo o víkendu!</strong> Snažíme se vždy přizpůsobit 
                  vašemu času. Stačí zavolat a domluvíme termín, který vám vyhovuje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileService;
