import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { navigation } from '../data/navigation';
import { useScrollDirection } from '../hooks';
import './Header.css';

export function Header() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isHidden = scrollDirection === 'down' && !isAtTop && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`header ${isAtTop ? 'header--top' : 'header--scrolled'} ${isHidden ? 'header--hidden' : ''}`}
      >
        <div className="header__inner">
          <Link to="/" className="header__wordmark">
            COMMONS
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`header__nav-link ${location.pathname === item.href ? 'header__nav-link--active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__utilities">
            <button className="header__icon-btn" aria-label="Search">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="header__icon-btn" aria-label="Account">
              <User size={18} strokeWidth={1.5} />
            </button>
            <Link to="/bag" className="header__icon-btn" aria-label="Shopping bag">
              <ShoppingBag size={18} strokeWidth={1.5} />
            </Link>
            <button
              className="header__icon-btn header__menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu__content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <button
                className="mobile-menu__close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <nav className="mobile-menu__nav" aria-label="Mobile navigation">
                {navigation.main.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  >
                    <Link to={item.href} className="mobile-menu__link">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mobile-menu__utilities"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link to="/search" className="mobile-menu__utility">
                  Search
                </Link>
                <Link to="/account" className="mobile-menu__utility">
                  Account
                </Link>
                <Link to="/bag" className="mobile-menu__utility">
                  Bag
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
