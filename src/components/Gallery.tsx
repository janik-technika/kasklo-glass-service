import { Card } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Vstup do provozovny KASKLO Car" },
    { src: gallery2, alt: "Glass Medic Windshield Repair System" },
    { src: gallery3, alt: "Profesionální nářadí pro opravu autoskel" },
    { src: gallery4, alt: "Dílna s vozidly při výměně autoskel" },
    { src: gallery5, alt: "Hummer při výměně autoskla" },
    { src: gallery6, alt: "Peugeot 406 po výměně autoskla" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Fotogalerie
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Naše realizované projekty
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="backdrop-blur-xl bg-glass/20 border-glass-border/50 overflow-hidden hover-scale transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;