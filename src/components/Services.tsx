import { motion } from "framer-motion";
import {
  Droplets,
  Gauge,
  BellRing,
  CalendarCheck,
  FlameKindling,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Instalación de Redes Contra Incendios",
    description:
      "Diseño e instalación de redes hidráulicas contra incendios cumpliendo normas NFPA 13, NFPA 14 y NSR-10.",
    benefits: ["Ingeniería especializada", "Materiales certificados", "Garantía integral"],
  },
  {
    icon: Gauge,
    title: "Pruebas Hidráulicas (Pitométricas)",
    description:
      "Verificación de presión y caudal en sus sistemas contra incendios para garantizar su correcto funcionamiento.",
    benefits: ["Informes detallados", "Equipos de precisión", "Cumplimiento normativo"],
  },
  {
    icon: BellRing,
    title: "Sistemas de Detección y Alarmas",
    description:
      "Instalación de sistemas de detección de humo, calor y alarmas contra incendios con monitoreo 24/7.",
    benefits: ["Tecnología de punta", "Monitoreo remoto", "Respuesta inmediata"],
  },
  {
    icon: CalendarCheck,
    title: "Planes de Mantenimiento (IPM)",
    description:
      "Programas de inspección, prueba y mantenimiento preventivo para mantener sus sistemas siempre operativos.",
    benefits: ["Cronograma planificado", "Reportes periódicos", "Reducción de riesgos"],
  },
  {
    icon: FlameKindling,
    title: "Suministro de Extintores CO₂",
    description:
      "Venta, recarga y mantenimiento de extintores tipo CO₂ y otros agentes limpios para protección de activos.",
    benefits: ["Stock inmediato", "Recarga certificada", "Servicio a domicilio"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nuestros <span className="text-fire">Servicios</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Soluciones completas en protección contra incendios para empresas en toda Colombia.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-card rounded-xl p-7 border border-border hover:border-fire/30 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-fire transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-fire-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-fire flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="text-fire font-semibold text-sm hover:underline"
                >
                  Solicitar información →
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
