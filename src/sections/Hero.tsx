import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import './Hero.css';

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="hero" ref={ref}>
      <div className="hero__image-wrapper">
        <motion.img
          src="/images/campaign/hero-main.jpg"
          alt="COMMONS Autumn Campaign - Model in motion wearing linen"
          className="hero__image"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Autumn / Winter 2026
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Designed well.<br />Made to last.
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          Luxury-level design at accessible prices.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <a href="#collection" className="hero__cta">
            Explore the Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
