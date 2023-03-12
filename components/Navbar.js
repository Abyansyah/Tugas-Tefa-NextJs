import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingBag, FaUser, FaEnvelope } from 'react-icons/fa';
import styles from 'ahmad/styles/navbar.module.css';
import { useRouter } from 'next/router';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isLinkActive = (href) => {
    return router.pathname === href;
  };

  return (
    <>
      <header className={scroll ? `${styles.header} ${styles.scroll_header}` : styles.header}>
        <nav className={`${styles.nav} ${styles.container}`}>
          <Link href="/" className={styles.nav_logo}>
            GJI<span className={styles.dot}>.</span>
          </Link>

          <div className={styles.nav_menu}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <Link href="/" className={`${styles.nav_link} ${isLinkActive('/') ? styles.active_link : ''} `}>
                  <FaHome className={styles.nav_icon} />
                  <span className={styles.nav_name}>Home</span>
                </Link>
              </li>

              <li className={styles.nav_name}>
                <Link href="/Product" className={`${styles.nav_link} ${isLinkActive('/Product') ? styles.active_link : ''} `}>
                  <FaShoppingBag className={styles.nav_icon} />

                  <span className={styles.nav_name}>Product</span>
                </Link>
              </li>

              <li className={styles.nav_name}>
                <Link href="/About" className={`${styles.nav_link} ${isLinkActive('/About') ? styles.active_link : ''} `}>
                  <FaUser className={styles.nav_icon} />

                  <span className={styles.nav_name}>About</span>
                </Link>
              </li>

              <li className={styles.nav_name}>
                <Link href="/Contact" className={`${styles.nav_link} ${isLinkActive('/Contact') ? styles.active_link : ''} `}>
                  <FaEnvelope className={styles.nav_icon} />

                  <span className={styles.nav_name}>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <FaEnvelope className={styles.nav_img} />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
