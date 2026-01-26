import { Clock, CheckCircle, Shield, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const crackTypes = [
  {
    name: "Kravské oko",
    description: "Kulaté poškození po dopadu kamínku",
  },
  {
    name: "Hvězdicová prasklina",
    description: "Prasklina vybíhající do hvězdicového tvaru",
  },
  {
    name: "Tříštivá prasklina",
    description: "Více menších prasklin v jednom místě",
  },
  {
    name: "Včelí křídla",
    description: "Dvě praskliny vybíhající do stran",
  },
];

const RepairInfo = () => {
  return (
    <section id="opravy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Oprava čelního skla
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Scelení poškození – rychlá a cenově výhodná alternativa k výměně
          </p>

          {/* Main Info Card */}
          <div className="backdrop-blur-xl bg-glass/20 border border-glass-border/50 rounded-2xl p-8 mb-8 animate-fade-in">
            <p className="text-lg text-foreground/90 mb-4">
              Víte, že <strong>nemusíte vždy měnit čelní sklo</strong>? V případě malého poškození lze provést opravu 
              <strong> SCELENÍM</strong>. Stejně jako u výměny, pokud máte připojištěná čelní skla, lze řešit opravu 
              přes pojistnou událost, kterou za vás nahlásíme a vyřídíme.
            </p>
            <p className="text-lg text-foreground/90">
              <strong>Hlavní výhoda opravy:</strong> Zamezení zásahu do karoserie a zachování originálního skla.
            </p>
          </div>

          {/* When can be repaired */}
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 mb-8 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Kdy lze provést opravu scelením?
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-secondary/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-primary mb-4">Podmínky pro opravu:</h4>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Poškození menší než 5 Kč mince
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Prasklina alespoň 9 cm od okraje skla
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Poškození nezasahuje do zorného pole řidiče
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-secondary/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-primary mb-4">Výhody opravy:</h4>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Minimálně 80% estetické zlepšení
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Zachování pevnosti skla
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Žádný zásah do karoserie
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Time and Certification */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-10 h-10 text-primary flex-shrink-0" />
                <h3 className="text-xl font-bold text-foreground">
                  Délka opravy
                </h3>
              </div>
              <p className="text-lg text-foreground/90">
                Oprava scelením trvá <strong>30–45 minut</strong>. Po opravě je vozidlo ihned připravené k provozu.
              </p>
            </Card>

            <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <h3 className="text-xl font-bold text-foreground">
                  Atestace
                </h3>
              </div>
              <p className="text-lg text-foreground/90">
                Po provedené opravě obdržíte <strong>atestovou kartičku</strong> platnou v celé EU i pro STK.
              </p>
            </Card>
          </div>

          {/* Crack Types */}
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Typy prasklin, které opravujeme
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {crackTypes.map((type, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-secondary/30 rounded-xl p-4 text-center"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">{type.name}</h4>
                  <p className="text-sm text-foreground/80">{type.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RepairInfo;
