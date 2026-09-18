import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks';
import { products } from '../data/products';
import { formatPrice } from '../utils';
import './CollectionPreview.css';

export function CollectionPreview() {
  const { ref, isInView } = useInView();
  const featuredProducts = products.filter(p => p.isNew).slice(0, 3);

  return (
    <section className="collection-preview" id="collection" ref={ref}>
      <div className="collection-preview__header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="collection-preview__title">The Quiet Collection</h2>
          <p className="collection-preview__subtitle">22 pieces. No excess. Each designed to speak to the next.</p>
        </motion.div>
      </div>

      <div className="collection-preview__grid">
        <motion.div
          className="collection-preview__item collection-preview__item--large"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to={`/product/${featuredProducts[0]?.id}`} className="collection-preview__link">
            <div className="collection-preview__image-wrapper">
              <img
                src={featuredProducts[0]?.images[0]}
                alt={featuredProducts[0]?.name}
                className="collection-preview__image"
                loading="eager"
              />
            </div>
            <div className="collection-preview__info">
              <h3 className="collection-preview__product-name">{featuredProducts[0]?.name}</h3>
              <p className="collection-preview__product-price">{formatPrice(featuredProducts[0]?.price || 0)}</p>
            </div>
          </Link>
        </motion.div>

        <div className="collection-preview__stack">
          {featuredProducts.slice(1, 3).map((product, i) => (
            <motion.div
              key={product.id}
              className="collection-preview__item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/product/${product.id}`} className="collection-preview__link">
                <div className="collection-preview__image-wrapper collection-preview__image-wrapper--small">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="collection-preview__image"
                    loading="lazy"
                  />
                </div>
                <div className="collection-preview__info">
                  <h3 className="collection-preview__product-name">{product.name}</h3>
                  <p className="collection-preview__product-price">{formatPrice(product.price)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="collection-preview__cta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link to="/collections" className="collection-preview__view-all">
          View Full Collection
        </Link>
      </motion.div>
    </section>
  );
}
