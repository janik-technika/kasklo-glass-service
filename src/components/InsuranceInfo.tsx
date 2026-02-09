import { FileText, AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const InsuranceInfo = () => {
  return (
    <section id="pojisteni" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Jak postupovat při pojistné události
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Informace co dělat v případě pojistného plnění
          </p>

          <div className="backdrop-blur-xl bg-glass/20 border border-glass-border/50 rounded-2xl p-8 mb-8 animate-fade-in">
            <p className="text-lg text-foreground/90 mb-4">
              Pro pojišťovny zajišťujeme pojistné události od nafocení po dořešení finančních záležitostí.
            </p>
            <p className="text-lg text-foreground/90">
              Zde naleznete seznam nezbytných dokumentů, které jsou k bezproblémovému vyřízení potřeba.
            </p>
          </div>

          {/* Highlight - Free replacement */}
          <div className="backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-2xl p-8 mb-8 shadow-glow animate-fade-in">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Kompletní řešení pojistné události
                </h3>
              </div>
            </div>
            <p className="text-lg text-foreground mb-3">
              Pokud máte <strong>připojištěné čelní sklo</strong>, zajistíme kompletní vyřízení pojistné události – od nahlášení škody, přes nafocení až po samotnou výměnu.
            </p>
            <p className="text-lg text-foreground mb-3">
              <strong className="text-primary text-xl">Výměna skla je pro vás zcela BEZPLATNÁ!</strong>
            </p>
            <p className="text-lg text-foreground">
              Pojistné plnění si stahujeme přímo z pojišťovny – <strong>vy neplatíte nic</strong>. Stačí přistavit vozidlo a o vše se postaráme.
            </p>
          </div>

          {/* Additional Insurance Documents */}
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Potřebné doklady z připojištění čelního skla
                </h3>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-secondary/30 rounded-xl p-6">
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Technický průkaz
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Smlouva o pojištění
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsuranceInfo;
