import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { brand } from '../data/brand';
import './BrandPhilosophy.css';

export function BrandPhilosophy() {
  const { ref, isInView } = useInView();

  return (
    <section className="brand-philosophy" ref={ref}>
      <div className="brand-philosophy__inner">
        <motion.div
          className="brand-philosophy__line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.h2
          className="brand-philosophy__headline"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Luxury should be a right,<br />not a privilege.
        </motion.h2>
        <motion.p
          className="brand-philosophy__body"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {brand.description}
        </motion.p>
      </div>
    </section>
  );
}
