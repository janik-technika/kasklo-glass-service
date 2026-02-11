const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          Výměna čelního skla
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Podívejte se, jak probíhá naše práce
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-glass-border/50 bg-glass/20 backdrop-blur-xl">
            <video
              src="/videos/vymena-skla.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
