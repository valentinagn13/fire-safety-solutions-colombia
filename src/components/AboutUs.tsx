import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento Normativo",
    text: "Trabajamos bajo normas NFPA, NSR-10 y estándares internacionales.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    text: "Años de trayectoria protegiendo empresas en toda Colombia.",
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    text: "Ingenieros y técnicos certificados en sistemas contra incendios.",
  },
];

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Por qué elegir{" "}
              <span className="text-fire">Fire Systems Colombia</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos una empresa colombiana especializada en la protección contra incendios.
              Nuestro compromiso es brindar soluciones integrales que garanticen la seguridad
              de su empresa, empleados y activos, siempre cumpliendo con las normas más
              exigentes del sector.
            </p>
            <div className="space-y-3">
              {[
                "Más de 500 proyectos ejecutados exitosamente",
                "Cobertura en las principales ciudades de Colombia",
                "Soporte técnico y asesoría permanente",
                "Materiales y equipos con certificación internacional",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-fire flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/85 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5"
          >
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="bg-card rounded-xl p-6 flex items-start gap-5 shadow-md border border-border hover:border-fire/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-navy flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {h.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{h.text}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
