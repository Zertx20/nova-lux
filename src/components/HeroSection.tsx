import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <motion.img
          src={logo}
          alt="Nova Lux Mode"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-luxury mb-8"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.1, type: "spring" as const, stiffness: 100 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" as const, stiffness: 80 }}
        >
          Élégance Italienne,{" "}
          <span className="text-gold-gradient">Maintenant en Algérie</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          initial={{ opacity: 0, y: 30, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" as const, stiffness: 60 }}
        >
          Sac femme Terranova — tendance, pratique et élégant pour le quotidien.
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
