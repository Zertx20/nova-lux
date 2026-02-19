import { motion } from "framer-motion";

const PricingSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-lg mx-auto">
        <motion.div
          className="bg-background rounded-3xl p-10 md:p-14 text-center shadow-luxury relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block bg-gold-gradient text-primary-foreground font-body font-semibold text-sm px-5 py-2 rounded-full mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥 Offre de lancement limitée
          </motion.div>

          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Prix Exclusif
          </h2>

          <div className="mb-2">
            <span className="font-body text-xl text-muted-foreground line-through">
              2 200 DA
            </span>
          </div>

          <div className="mb-8">
            <span className="font-display text-5xl md:text-6xl font-bold text-gold-gradient">
              1 450 DA
            </span>
          </div>

          <p className="font-body text-sm text-muted-foreground mb-8">
            Paiement à la livraison disponible partout en Algérie.
          </p>

          <motion.button
            onClick={scrollToOrder}
            className="w-full bg-gold-gradient text-primary-foreground font-body font-semibold text-lg py-4 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Commander Maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
