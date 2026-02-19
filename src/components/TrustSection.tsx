import { motion } from "framer-motion";

const badges = [
  { icon: "🚚", text: "Livraison rapide en Algérie" },
  { icon: "💰", text: "Paiement à la livraison" },
  { icon: "🔥", text: "Produit tendance 2026" },
  { icon: "⚡", text: "Quantité limitée" },
];

const TrustSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((b, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-3 bg-card rounded-2xl p-5 shadow-luxury"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <span className="text-2xl">{b.icon}</span>
          <span className="font-body text-sm font-medium text-foreground">{b.text}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustSection;
