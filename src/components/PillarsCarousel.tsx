import { Package, Wrench, Settings } from "lucide-react";

const pillars = [
  {
    icon: Package,
    title: "NFPA",
    description:
      "Asociación Nacional de Protección contra Incendios (EE. UU.). Desarrolla códigos y estándares de seguridad contra incendios ampliamente usados a nivel mundial.",
  },
  {
    icon: Wrench,
    title: "UL",
    description:
      "Underwriters Laboratories. Empresa global de certificación que prueba y valida seguridad de productos eléctricos, electrónicos e industriales.",
  },
  {
    icon: Settings,
    title: "FM Approved",
    description:
      "Certificación de FM Global que avala productos y sistemas industriales (especialmente contra incendios) tras rigurosas pruebas técnicas.",
  },
  {
    icon: Package,
    title: "IBGS",
    description:
      "Organización vinculada a estándares de seguridad industrial y protección contra riesgos.",
  },
  {
    icon: Wrench,
    title: "NSR-10",
    description:
      "Reglamento Colombiano de Construcción Sismo Resistente. Norma obligatoria en Colombia para diseño y construcción estructural segura frente a sismos.",
  },
];

// Duplicate for infinite scroll
const items = [...pillars, ...pillars];

const PillarsCarousel = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
          Seguridad, Calidad y <span className="text-fire">Normativas</span>
        </h2>
        <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
          Referentes técnicos y regulatorios que respaldan nuestros procesos y soluciones.
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left w-max gap-8 px-4">
          {items.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-[340px] bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-fire flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-fire-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsCarousel;
