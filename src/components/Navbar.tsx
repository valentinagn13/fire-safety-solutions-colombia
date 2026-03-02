import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-navy shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/#inicio" className="flex items-center gap-2 group">
          <div className="bg-white/95 rounded-xl shadow-lg overflow-hidden">
            <img
              src={logo}
              alt="Fire Systems de Colombia"
              className="block h-16 md:h-20 w-auto"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-fire transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contacto"
            className="bg-gradient-fire text-fire-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Visita Técnica Gratis
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-navy border-t border-primary-foreground/10"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/80 hover:text-fire transition-colors font-medium py-2 text-sm uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contacto"
                onClick={() => setMobileOpen(false)}
                className="bg-gradient-fire text-fire-foreground px-5 py-3 rounded-lg font-semibold text-sm text-center mt-2"
              >
                Visita Técnica Gratis
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
