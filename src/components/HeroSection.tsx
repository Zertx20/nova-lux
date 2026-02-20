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
          alt="نوفا لوكس للموضة"
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
          أناقة إيطالية،{" "}
          <span className="text-gold-gradient">الآن في الجزائر</span>
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
          initial={{ opacity: 0, y: 30, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" as const, stiffness: 60 }}
        >
          حقيبة تيرانوفا النسائية — أناقة وعملية لكل يوم.
        </motion.p>

        <motion.button
          onClick={scrollToOrder}
          className="bg-gold-gradient text-primary-foreground font-body font-semibold text-lg px-10 py-4 rounded-full shadow-luxury hover:shadow-luxury-hover transition-all duration-300"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring" as const, stiffness: 80 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          اطلب حقيبتك الآن
        </motion.button>
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
