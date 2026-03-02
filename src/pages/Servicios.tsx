import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/components/Services";

const WHATSAPP_NUMBER = "573156439939";

const Servicios = () => {
  const getWhatsAppLink = (serviceName: string) => {
    const message = `Hola, me interesa el servicio "${serviceName}". ¿Podrían brindarme una asesoría?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-36 pb-16 bg-gradient-to-b from-navy-dark via-navy to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-primary-foreground">
            Servicios <span className="text-gradient-fire">Especializados</span>
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
            Soluciones completas en protección contra incendios, diseñadas para empresas en toda
            Colombia con enfoque técnico, normativo y operativo.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-lg hover:shadow-2xl hover:border-fire/40 transition-all"
                >
                  <div className="absolute -top-14 -right-14 w-32 h-32 rounded-full bg-fire/10 blur-2xl" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 text-fire flex-shrink-0" />
                          <span className="text-sm md:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-fire font-semibold hover:underline"
                    >
                      Solicitar información
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Servicios;
