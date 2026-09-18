import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Product } from '../data/products';
import { formatPrice } from '../utils';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  index?: number;
  featured?: boolean;
}

export function ProductCard({ product, index = 0, featured = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className={`product-card ${featured ? 'product-card--featured' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="product-card__link">
        <div className="product-card__image-wrapper">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`product-card__image ${isHovered ? 'product-card__image--hovered' : ''}`}
            loading={index < 4 ? 'eager' : 'lazy'}
          />
          {product.isNew && (
            <span className="product-card__badge">New</span>
          )}
        </div>
        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__price">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.article>
  );
}
