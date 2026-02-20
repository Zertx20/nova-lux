import { motion } from "framer-motion";

const FinalCTA = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-display text-3xl md:text-5xl text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          حسّن أسلوبك{" "}
          <span className="text-gold-gradient">اليوم</span>
        </motion.h2>
        <motion.p
          className="font-body text-lg text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          الرفاهية يمكن أن تكون في متناول الجميع.
        </motion.p>
        <motion.button
          onClick={scrollToOrder}
          className="bg-gold-gradient text-primary-foreground font-body font-semibold text-lg px-12 py-4 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          اطلب حقيبة تيرانوفا
        </motion.button>
      </div>
    </section>
  );
};

export default FinalCTA;
