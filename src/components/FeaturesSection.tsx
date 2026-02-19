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
        initial={{ opacity: 0.8, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Pourquoi <span className="text-gold-gradient">Terranova</span> ?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-2xl p-8 text-center shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group"
            initial={{ opacity: 0.6, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="text-4xl mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.08 + 0.1 }}
            >
              {f.icon}
            </motion.div>
            <motion.h3 
              className="font-display text-lg font-semibold text-foreground mb-2"
              initial={{ opacity: 0.7, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.08 + 0.15 }}
            >
              {f.title}
            </motion.h3>
            <motion.p 
              className="font-body text-sm text-muted-foreground"
              initial={{ opacity: 0.6, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
            >
              {f.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
