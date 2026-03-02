import { Package, Wrench, Settings } from "lucide-react";

const pillars = [
  {
    icon: Package,
    title: "Suministros",
    description:
      "Extintores, mangueras, gabinetes, rociadores y todos los elementos necesarios para su sistema contra incendios con certificación de calidad.",
    cta: "Ver Suministros",
  },
  {
    icon: Wrench,
    title: "Instalaciones",
    description:
      "Diseño e instalación de redes contra incendios, sistemas de detección y alarmas bajo normas NFPA y NSR-10 con ingenieros especializados.",
    cta: "Ver Instalaciones",
  },
  {
    icon: Settings,
    title: "Mantenimiento",
    description:
      "Planes de mantenimiento preventivo (IPM) y correctivo para garantizar el correcto funcionamiento de sus sistemas contra incendios.",
    cta: "Ver Mantenimiento",
  },
];

// Duplicate for infinite scroll
const items = [...pillars, ...pillars];

const PillarsCarousel = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
          Nuestros <span className="text-fire">Pilares</span>
        </h2>
        <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
          Tres áreas de especialización que garantizan la protección integral de su empresa.
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
                <a
                  href="#servicios"
                  className="text-fire font-semibold text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  {pillar.cta} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsCarousel;
