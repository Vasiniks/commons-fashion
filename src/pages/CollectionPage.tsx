import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import './CollectionPage.css';

type Subcategory = 'All' | 'Outerwear' | 'Tops' | 'Trousers' | 'Knitwear' | 'Shirts';

export function CollectionPage() {
  const [activeSub, setActiveSub] = useState<Subcategory>('All');

  const filteredProducts = activeSub === 'All'
    ? products
    : products.filter(p => p.subcategory === activeSub);

  const subcategories: Subcategory[] = ['All', 'Outerwear', 'Tops', 'Trousers', 'Knitwear', 'Shirts'];

  return (
    <main className="collection-page">
      <div className="collection-page__header">
        <motion.h1
          className="collection-page__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          The Collection
        </motion.h1>
        <motion.p
          className="collection-page__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Every piece designed to speak to the next.
        </motion.p>
      </div>

      <div className="collection-page__filters">
        {subcategories.map((cat) => (
          <button
            key={cat}
            className={`collection-page__filter ${activeSub === cat ? 'collection-page__filter--active' : ''}`}
            onClick={() => setActiveSub(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="collection-page__grid">
        {filteredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="collection-page__editorial-break">
        <motion.h2
          className="collection-page__break-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Quiet Collection
        </motion.h2>
      </div>

      <div className="collection-page__grid collection-page__grid--secondary">
        {filteredProducts.slice().reverse().map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </main>
  );
}
