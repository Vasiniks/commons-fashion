import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks';
import { products } from '../data/products';
import './SignaturePieces.css';

export function SignaturePieces() {
  const { ref, isInView } = useInView();
  const signatureProducts = [products[3], products[6], products[9]];

  return (
    <section className="signature-pieces" ref={ref}>
      <div className="signature-pieces__inner">
        <motion.div
          className="signature-pieces__header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="signature-pieces__title">The Three</h2>
          <p className="signature-pieces__subtitle">Every collection begins with three. The rest follows.</p>
        </motion.div>

        <div className="signature-pieces__grid">
          {signatureProducts.map((product, i) => (
            <motion.div
              key={product.id}
              className="signature-pieces__item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link to={`/product/${product.id}`} className="signature-pieces__link">
                <div className="signature-pieces__image-wrapper">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="signature-pieces__image"
                    loading="lazy"
                  />
                </div>
                <h3 className="signature-pieces__product-name">{product.name}</h3>
                <p className="signature-pieces__product-desc">{product.description.split('.')[0]}.</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
