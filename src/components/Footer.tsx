import { Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              KASKLO Car, s.r.o.
            </h3>
            <p className="text-muted-foreground">
              Profesionální mobilní servis autoskel
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Rychlé odkazy
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Naše služby
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Kontaktujte nás
            </h4>
            <a 
              href="tel:+420777073754"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-semibold"
            >
              <Phone className="w-5 h-5" />
              777 073 754
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} KASKLO Car, s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;