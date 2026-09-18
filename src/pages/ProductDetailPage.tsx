import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { formatPrice } from '../utils';
import { ProductCard } from '../components/ProductCard';
import './ProductDetailPage.css';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [addedToBag, setAddedToBag] = useState(false);

  if (!product) {
    return (
      <main className="product-detail">
        <div className="product-detail__not-found">
          <h1>Product not found</h1>
          <Link to="/collections">Return to collection</Link>
        </div>
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToBag = () => {
    if (!selectedSize) {
      return;
    }
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 1500);
  };

  return (
    <main className="product-detail">
      <div className="product-detail__breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/collections">{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail__layout">
        <motion.div
          className="product-detail__gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="product-detail__main-image">
            <img
              src={product.images[0]}
              alt={product.name}
              className="product-detail__image"
            />
          </div>
          <div className="product-detail__thumbnails">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`product-detail__thumbnail ${i === 0 ? 'product-detail__thumbnail--active' : ''}`}
              >
                <img src={img} alt={`${product.name} view ${i + 1}`} />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="product-detail__info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__price">{formatPrice(product.price)}</p>

          <p className="product-detail__description">{product.description}</p>

          <div className="product-detail__options">
            <div className="product-detail__option">
              <p className="product-detail__option-label">Color</p>
              <div className="product-detail__colors">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    className={`product-detail__color ${i === selectedColor ? 'product-detail__color--active' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(i)}
                    aria-label={color.name}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="product-detail__option">
              <div className="product-detail__option-header">
                <p className="product-detail__option-label">Size</p>
                <button className="product-detail__size-guide">Size Guide</button>
              </div>
              <div className="product-detail__sizes">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`product-detail__size ${selectedSize === size ? 'product-detail__size--active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            className={`product-detail__add-to-bag ${addedToBag ? 'product-detail__add-to-bag--added' : ''}`}
            onClick={handleAddToBag}
          >
            {addedToBag ? 'Added ✓' : 'Add to Bag'}
          </button>

          <div className="product-detail__accordions">
            <details className="product-detail__accordion">
              <summary className="product-detail__accordion-header">
                Material & Care
              </summary>
              <div className="product-detail__accordion-content">
                <p><strong>Material</strong></p>
                <p>{product.materials}</p>
                <p><strong>Care</strong></p>
                <p>{product.care}</p>
              </div>
            </details>

            <details className="product-detail__accordion">
              <summary className="product-detail__accordion-header">
                Shipping & Returns
              </summary>
              <div className="product-detail__accordion-content">
                <p>Free standard shipping on all orders.</p>
                <p>Express: 1-2 business days</p>
                <p>Standard: 3-5 business days</p>
                <p><strong>Returns</strong></p>
                <p>Free returns within 30 days of delivery.</p>
                <p>Items must be unworn with tags attached.</p>
              </div>
            </details>
          </div>
        </motion.div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="product-detail__related">
          <h2 className="product-detail__related-title">You may also like</h2>
          <div className="product-detail__related-grid">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
