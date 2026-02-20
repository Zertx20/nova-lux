import { motion } from "framer-motion";
import whatsapp1 from "@/assets/whatsapp-1.jpeg";

const StorySection = () => (
  <section className="py-24 px-6 bg-card">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        transition={{ 
          duration: 0.6, 
          type: "spring" as const, 
          stiffness: 100,
          damping: 15
        }}
      >
        <motion.h2 
          className="font-display text-3xl md:text-5xl text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          لمسة إيطالية{" "}
          <span className="text-gold-gradient">في حياتك اليومية</span>
        </motion.h2>
        <motion.p 
          className="font-body text-muted-foreground text-lg leading-relaxed mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          حقيبة تيرانوفا تجسد الموضة الإيطالية العصرية.
          مصممة للنساء النشطات اللواتي يبحثن عن الأناقة والعملية،
          ترافقك بشكل مثالي في جميع أيامك: الجامعة، العمل،
          التسوق أو الخروجات.
        </motion.p>
        <motion.div 
          className="w-16 h-0.5 bg-primary mt-8" 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-100px" }}
        transition={{ 
          duration: 0.6, 
          type: "spring" as const, 
          stiffness: 100,
          damping: 15
        }}
      >
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-luxury"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={whatsapp1}
            alt="أسلوب حياة تيرانوفا"
            className="w-full h-[400px] object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
