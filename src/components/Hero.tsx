import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Sistema contra incendios profesional"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy-dark/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="h-5 w-5 text-fire" />
              <span className="text-fire font-semibold text-sm uppercase tracking-widest">
                Certificados NFPA &amp; NSR-10
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
              Soluciones Integrales en{" "}
              <span className="text-gradient-fire">Protección Contra Incendios</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-xl mb-10 font-body leading-relaxed">
              Protegemos su empresa con sistemas contra incendios de última generación.
              Suministro, instalación y mantenimiento con los más altos estándares de calidad en Colombia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-gradient-fire text-fire-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-2xl flex items-center justify-center gap-2 group"
              >
                Solicitar Visita Técnica Sin Costo
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:border-fire hover:text-fire transition-colors flex items-center justify-center"
              >
                Ver Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
