import { motion } from "framer-motion";

const features = [
  { icon: "🇮🇹", title: "Design italien élégant", desc: "Inspiré des maisons de mode italiennes les plus prestigieuses." },
  { icon: "👜", title: "Grande capacité intérieure", desc: "Assez spacieux pour tout votre essentiel quotidien." },
  { icon: "✨", title: "Matériaux durables de qualité", desc: "Des finitions premium pour une longévité exceptionnelle." },
  { icon: "💫", title: "Parfait pour un usage quotidien", desc: "Du bureau au brunch, votre compagnon idéal." },
];

const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="font-display text-3xl md:text-5xl text-center text-foreground mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Pourquoi <span className="text-gold-gradient">Terranova</span> ?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-2xl p-8 text-center shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
