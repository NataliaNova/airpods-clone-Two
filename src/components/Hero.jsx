import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AirPods Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cancelación activa de ruido. Sonido de otro nivel.
        </motion.p>

        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Comprar ahora
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
