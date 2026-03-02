import { Flame } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-fire" />
            <span className="font-display font-bold text-primary-foreground">
              Fire Systems Colombia
            </span>
          </div>
          <nav className="flex gap-6 text-sm">
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/60 hover:text-fire transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Fire Systems Colombia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
