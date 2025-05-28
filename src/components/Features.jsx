import { FaBatteryFull, FaVolumeUp, FaHeadphonesAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Features.css';

function Features() {
  return (
    <section className="features-section" id="caracteristicas">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Características principales
      </motion.h2>

      <div className="features-grid">
        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaBatteryFull size={40} />
          <h3>Batería duradera</h3>
          <p>Hasta 24 horas de autonomía con estuche de carga.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaVolumeUp size={40} />
          <h3>Sonido envolvente</h3>
          <p>Calidad profesional con cancelación activa de ruido.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <FaHeadphonesAlt size={40} />
          <h3>Comodidad total</h3>
          <p>Diseño ergonómico y ajuste perfecto para todo el día.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
