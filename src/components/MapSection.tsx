const MapSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 pb-6">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-fire">Encuéntrenos</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Carrera 74 # 76 - 71, Bogotá D.C.
          </p>
        </div>
      </div>
      <iframe
        title="Ubicación Fire Systems de Colombia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5!2d-74.1!3d4.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDAnNDguMCJOIDc0wrAwNicwMC4wIlc!5e0!3m2!1ses!2sco!4v1700000000000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </section>
  );
};

export default MapSection;
