import { useEffect } from "react";
import { motion } from "framer-motion";

const instagramPosts = [
  "https://www.instagram.com/p/DUnq_tPgKde/",
  "https://www.instagram.com/reel/DRVkkiqjaRs/",
  "https://www.instagram.com/reel/DP9XhvBDewe/",
  "https://www.instagram.com/p/DUnq_tPgKde/",
];

const CompanyPhoto = () => {
  useEffect(() => {
    const instagramWindow = window as Window & {
      instgrm?: { Embeds?: { process: () => void } };
    };

    const processEmbeds = () => {
      if (instagramWindow.instgrm?.Embeds?.process) {
        instagramWindow.instgrm.Embeds.process();
      }
    };

    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existingScript) {
      processEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Conozca <span className="text-fire">Nuestra Empresa</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Publicaciones recientes sobre nuestros proyectos y servicios.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4"
        >
          {instagramPosts.map((postUrl, index) => (
            <blockquote
              key={`${postUrl}-${index}`}
              className="instagram-media rounded-xl border border-border bg-card shadow-xl"
              data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
              style={{
                margin: "1px auto",
                maxWidth: "100%",
                minWidth: "0",
                width: "100%",
              }}
            >
              <a href={postUrl} target="_blank" rel="noopener noreferrer">
                Ver esta publicación en Instagram
              </a>
            </blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyPhoto;
