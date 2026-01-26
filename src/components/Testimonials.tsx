import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dan R.",
    title: "Profesionalita",
    text: "Spokojenost, výborná komunikace, příjemné vystupování, profesionalita. Mohu vřele doporučit a děkuji za skvěle, rychle odvedenou práci při výměně čelního skla.",
    rating: 5,
  },
  {
    name: "Peter F.",
    title: "Zkušenost",
    text: "Moc šikovní a zkušení kluci. Přišli včas, nové sklo pasuje, je zarovnáno a krásně je vidět. Jsem spokojen a DOPORUČUJI.",
    rating: 5,
  },
  {
    name: "Tomáš Č.",
    title: "Žádná starost",
    text: "V pátek odpoledne nahlášeno, v pondělí opraveno. Nemusel jsem se o nic starat, jen jim zavolat. Super práce.",
    rating: 5,
  },
  {
    name: "Václav Š.",
    title: "Precizní práce",
    text: "Precizní práce a služby včetně zajištění nového skla, které nebylo k sehnání u žádné jiné firmy. Hned druhý den po rozbití bylo opraveno u mě doma.",
    rating: 5,
  },
  {
    name: "Misus W.",
    title: "Skvělý přístup",
    text: "Skvělý přístup, ochota a výborná práce. Dojeli ke mě domů a vyměnili během chvilky, ani jsem nemusela nikam jezdit. Mohu jen doporučit.",
    rating: 5,
  },
  {
    name: "Tatiana J.",
    title: "TOP služby",
    text: "Skvělá domluva, perfektně odvedená práce. Jako zákazník nemusíte nic řešit, vše vyřeší a obvolají za Vás. Děkuji!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reference" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Reference zákazníků
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Co o nás říkají spokojení zákazníci
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="backdrop-blur-xl bg-glass/20 border-glass-border/50 p-6 hover:bg-glass/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-8 h-8 text-primary/50 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-primary">{testimonial.title}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/90 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <p className="text-muted-foreground font-medium">
                — {testimonial.name}
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="text-foreground font-medium">
              Více než 100 spokojených zákazníků ročně
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
