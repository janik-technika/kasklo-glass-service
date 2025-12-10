import { FileText, AlertCircle, Shield } from "lucide-react";
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

          {/* Mandatory Insurance */}
          <Card className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-8 mb-6 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Potřebné doklady z povinného ručení
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-secondary/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-primary mb-4">Viník:</h4>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Velký technický průkaz
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Řidičský průkaz
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Doklad o pojištění
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-secondary/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-primary mb-4">Poškozený:</h4>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Velký technický průkaz
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    Řidičský průkaz
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Additional Insurance */}
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
                  Velký technický průkaz
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  Řidičský průkaz
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