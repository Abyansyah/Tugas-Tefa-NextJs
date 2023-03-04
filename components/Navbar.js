import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toogleNav = () => {
    setShowMenu(!showMenu);
  };

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const closeNav = () => {
    setShowMenu(false);
  };

  return (
    <>
      <nav className={navbar ? `${styles.navbar} ${styles.active}` : styles.navbar}>
        <Link href="/" >
          <h1 className={styles.title}>
            GJI<span className={styles.dot}>.</span>
          </h1>
        </Link>

        <div className={showMenu ? `${styles.menu} ${styles.mobile_menu}` : styles.menu} onClick={closeNav}>
          <ul className={styles.menu_item} >
            <i className={styles.famatime} onClick={toogleNav}>
              <FaTimes />
            </i>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Product">Product</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div onClick={toogleNav} className={styles.fa_bars}>
          <FaBars />
        </div>
        <div className={showMenu ? `${styles.over} ${styles.actived}` : styles.over}></div>
      </nav>
    </>
  );
}

export default Navbar;
