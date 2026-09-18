import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import './MaterialStory.css';

export function MaterialStory() {
  const { ref, isInView } = useInView();

  return (
    <section className="material-story" ref={ref}>
      <div className="material-story__background">
        <img
          src="/images/editorial/material-closeup.jpg"
          alt="Close-up of fabric texture and weave"
          className="material-story__bg-image"
        />
        <div className="material-story__overlay" />
      </div>

      <motion.div
        className="material-story__card"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="material-story__title">Touch This</h2>
        <p className="material-story__body">
          Our wool is milled in Biella. Our cotton is woven in Okayama.
          Every fabric has a provenance. Every stitch has a reason.
        </p>
        <div className="material-story__details">
          <div className="material-story__detail">
            <p className="material-story__detail-label">Fabric</p>
            <p className="material-story__detail-value">Selected from mills in Japan, Portugal, and Italy</p>
          </div>
          <div className="material-story__detail">
            <p className="material-story__detail-label">Construction</p>
            <p className="material-story__detail-value">Made in Portugal by skilled artisans</p>
          </div>
          <div className="material-story__detail">
            <p className="material-story__detail-label">Finish</p>
            <p className="material-story__detail-value">Garment-dyed, pre-washed, built to age</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
