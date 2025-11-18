import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder for 6 images
  const placeholders = Array(6).fill(null);

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
          {placeholders.map((_, index) => (
            <Card 
              key={index}
              className="backdrop-blur-xl bg-glass/20 border-glass-border/50 overflow-hidden hover-scale transition-all duration-300 aspect-video"
            >
              <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">Fotografie {index + 1}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;