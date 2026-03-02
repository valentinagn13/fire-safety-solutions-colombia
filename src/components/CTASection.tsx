import { ShieldAlert, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-navy overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-fire/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-fire/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ShieldAlert className="h-14 w-14 text-fire mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-5">
          No espere a que sea tarde.
          <br />
          <span className="text-fire">Proteja su empresa hoy.</span>
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
          Solicite una visita técnica sin costo y reciba un diagnóstico completo
          de los sistemas de protección contra incendios de su empresa.
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-gradient-fire text-fire-foreground px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-2xl group"
        >
          Solicitar Visita Técnica Gratuita
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
