import { motion } from "framer-motion";

const CompanyPhoto = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Conozca <span className="text-fire">Nuestra Empresa</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Instalaciones, equipo y compromiso al servicio de su seguridad.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border"
        >
          <img
            src="/placeholder.svg"
            alt="Instalaciones de Fire Systems de Colombia"
            className="w-full h-[300px] md:h-[450px] object-cover"
            loading="lazy"
          />
        </motion.div>
        <p className="text-center text-muted-foreground/60 text-xs mt-4">
          * Puede enviar una foto de su empresa para reemplazar esta imagen.
        </p>
      </div>
    </section>
  );
};

export default CompanyPhoto;
