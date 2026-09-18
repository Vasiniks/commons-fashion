import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { navigation } from '../data/navigation';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__newsletter">
          <h3 className="footer__wordmark">COMMONS</h3>
          <p className="footer__newsletter-text">
            Join our world. New arrivals, stories, and quiet inspiration.
          </p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="footer__newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="footer__newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h4 className="footer__column-title">Shop</h4>
            <ul className="footer__column-list">
              {navigation.footer.shop.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Help</h4>
            <ul className="footer__column-list">
              {navigation.footer.help.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 {brand.name}
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" className="footer__social-link" aria-label="Pinterest">
              Pinterest
            </a>
            <a href="#" className="footer__social-link" aria-label="TikTok">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
