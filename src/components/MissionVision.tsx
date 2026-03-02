import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nuestra <span className="text-fire">Esencia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-fire/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-navy flex items-center justify-center mb-5">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Brindar soluciones integrales en protección contra incendios con los más altos
              estándares de calidad, garantizando la seguridad de las personas, los bienes y el
              medio ambiente. Nos comprometemos a ofrecer suministro, instalación y mantenimiento
              de sistemas contra incendios con un equipo humano altamente capacitado y certificado,
              cumpliendo con las normas NFPA y NSR-10.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-fire/30 transition-colors"
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-fire flex items-center justify-center mb-5">
              <Eye className="h-7 w-7 text-fire-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la empresa líder en Colombia en soluciones de protección contra incendios,
              reconocida por nuestra innovación, confiabilidad y excelencia en el servicio.
              Aspiramos a expandir nuestra cobertura a nivel nacional, siendo el aliado estratégico
              preferido por empresas e instituciones que buscan la máxima seguridad y cumplimiento
              normativo en sus instalaciones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
