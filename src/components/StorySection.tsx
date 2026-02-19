import { motion } from "framer-motion";
import whatsapp1 from "@/assets/whatsapp-1.jpeg";

const StorySection = () => (
  <section className="py-24 px-6 bg-card">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -60, rotateY: -15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" as const, stiffness: 70 }}
      >
        <motion.h2 
          className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Une touche d'Italie{" "}
          <span className="text-gold-gradient">dans votre quotidien</span>
        </motion.h2>
        <motion.p 
          className="font-body text-muted-foreground text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Le sac Terranova incarne la mode italienne moderne.
          Conçu pour les femmes actives qui recherchent élégance et praticité,
          il accompagne parfaitement vos journées : université, travail,
          shopping ou sorties.
        </motion.p>
        <motion.div 
          className="w-16 h-0.5 bg-primary mt-8" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 60, rotateY: 15 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" as const, stiffness: 70 }}
      >
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-luxury"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" as const, stiffness: 60 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={whatsapp1}
            alt="Terranova lifestyle"
            className="w-full h-[400px] object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
