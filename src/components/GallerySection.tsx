import { useState } from "react";
import { motion } from "framer-motion";
import whatsapp1 from "@/assets/whatsapp-1.jpeg";
import whatsapp2 from "@/assets/whatsapp-2.jpeg";
import whatsapp3 from "@/assets/whatsapp-3.jpeg";
import whatsapp4 from "@/assets/whatsapp-4.jpeg";
import whatsapp5 from "@/assets/whatsapp-5.jpeg";

const images = [whatsapp1, whatsapp2, whatsapp3, whatsapp4, whatsapp5];

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, type: "spring" as const, stiffness: 80 },
  }),
};

const GallerySection = () => {
  const [selected, setSelected] = useState(0);

  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-5xl text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" as const, stiffness: 70 }}
        >
          La Collection
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main image */}
          <motion.div
            className="flex-1 rounded-2xl overflow-hidden shadow-luxury bg-card"
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" as const, stiffness: 60 }}
          >
            <motion.img
              src={images[selected]}
              alt="Terranova Bag"
              className="w-full h-[400px] md:h-[550px] object-cover"
              key={selected}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {images.map((img, i) => (
              <motion.button
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelected(i)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selected === i
                    ? "border-primary shadow-luxury-hover scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={img}
                  alt={`Vue ${i + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" as const, stiffness: 70 }}
        >
          <motion.button
            onClick={scrollToOrder}
            className="bg-gold-gradient text-primary-foreground font-body font-medium text-lg px-10 py-4 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Commander Maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
