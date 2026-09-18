import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import './EditorialStory.css';

export function EditorialStory() {
  const { ref, isInView } = useInView();

  return (
    <section className="editorial-story" ref={ref}>
      <div className="editorial-story__inner">
        <motion.div
          className="editorial-story__image-wrapper"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/editorial/lifestyle-2.jpg"
            alt="A garment's best version comes after the third wearing"
            className="editorial-story__image"
          />
        </motion.div>

        <motion.div
          className="editorial-story__content"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="editorial-story__label">Worn In</p>
          <h2 className="editorial-story__headline">
            A garment's best version of itself comes after the third wearing.
          </h2>
          <p className="editorial-story__body">
            We design for that moment. Not the first time you put it on, but the fiftieth.
            When the fabric has shaped to your body, when the color has settled,
            when it becomes yours in a way no new garment can.
          </p>
          <p className="editorial-story__body">
            Our clothes are made to age with you. That is the quiet luxury we believe in.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
