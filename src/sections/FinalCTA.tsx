import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks';
import './FinalCTA.css';

export function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="final-cta" ref={ref}>
      <div className="final-cta__background">
        <motion.img
          src="/images/campaign/hero-alt.jpg"
          alt="An empty room with morning light"
          className="final-cta__image"
          initial={{ scale: 1.05 }}
          animate={isInView ? { scale: 1.02 } : {}}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="final-cta__overlay" />
      </div>

      <motion.div
        className="final-cta__content"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="final-cta__title">Go Slowly.</h2>
        <p className="final-cta__subtitle">
          The collection is not going anywhere. Take your time.
        </p>
        <Link to="/collections" className="final-cta__link">
          Enter
        </Link>
      </motion.div>
    </section>
  );
}
