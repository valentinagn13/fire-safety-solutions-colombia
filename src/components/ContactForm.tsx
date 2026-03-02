import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "573001234567"; // Placeholder

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast.success("¡Solicitud enviada! Nos comunicaremos pronto.");
      setForm({ nombre: "", empresa: "", telefono: "", email: "", mensaje: "" });
    }, 1200);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola, me gustaría solicitar una visita técnica sin costo para sistemas contra incendios."
  )}`;

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-fire">Contáctenos</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Complete el formulario y un asesor se comunicará con usted en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-xl p-8 shadow-lg border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="text-sm font-medium text-foreground mb-1.5 block">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  maxLength={100}
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fire/50"
                  placeholder="Su nombre"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="text-sm font-medium text-foreground mb-1.5 block">
                  Empresa *
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  required
                  maxLength={100}
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fire/50"
                  placeholder="Nombre de la empresa"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="telefono" className="text-sm font-medium text-foreground mb-1.5 block">
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  maxLength={20}
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fire/50"
                  placeholder="300 123 4567"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fire/50"
                  placeholder="correo@empresa.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="text-sm font-medium text-foreground mb-1.5 block">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                maxLength={1000}
                value={form.mensaje}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-fire/50 resize-none"
                placeholder="Describa brevemente su necesidad..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-fire text-fire-foreground py-4 rounded-lg font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {sending ? "Enviando..." : "Solicitar Visita Técnica Sin Costo"}
              {!sending && <Send className="h-4 w-4" />}
            </button>
          </motion.form>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-fire mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Teléfono</p>
                  <p className="text-muted-foreground text-sm">(601) 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-fire mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">info@firesystemscolombia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-fire mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">Ubicación</p>
                  <p className="text-muted-foreground text-sm">Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white rounded-xl p-5 font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="h-8 w-8" />
              <div>
                <p className="text-base">Escríbanos por WhatsApp</p>
                <p className="text-sm font-normal opacity-90">Respuesta inmediata</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
