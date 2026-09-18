import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import './PricingPhilosophy.css';

export function PricingPhilosophy() {
  const { ref, isInView } = useInView();

  const breakdown = [
    { label: 'Materials', percentage: 35 },
    { label: 'Manufacturing', percentage: 25 },
    { label: 'Transport', percentage: 10 },
    { label: 'Our Margin', percentage: 30 },
  ];

  return (
    <section className="pricing" ref={ref}>
      <div className="pricing__inner">
        <div className="pricing__content">
          <motion.h2
            className="pricing__title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            No Markup. No Markup.
          </motion.h2>
          <motion.p
            className="pricing__body"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            We removed the layers between you and the maker. What you pay is what the craft
            costs, plus a fair margin for us to keep going.
          </motion.p>
        </div>

        <motion.div
          className="pricing__chart"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {breakdown.map((item, i) => (
            <div key={item.label} className="pricing__bar-group">
              <div className="pricing__bar-label">
                <span>{item.label}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="pricing__bar-track">
                <motion.div
                  className="pricing__bar-fill"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
