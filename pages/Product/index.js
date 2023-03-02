'use client';
import React, { useState } from 'react';
import styles from '../../styles/product.module.css';
import Menu from '../../data/data.json';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import ReadMore from 'ahmad/components/readmore';
import RootLayout from 'ahmad/components/Layout';

function Product() {
  const [items, setItems] = useState(Menu);

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((cureElem) => {
      return cureElem.category === categItem;
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  });

  // console.log(items);

  // function getFiltered(itemps) {
  //   if (!itemps || itemps.length === 0) {wh
  //     return <p>0 Produk</p>;
  //   } else {
  //     return <p> {itemps.length} Produk </p>;
  //   }
  // }
  return (
    <>
      <RootLayout tittle="Product Page">
        <section className={styles.product}>
          <div data-aos="fade-down" className={styles.product_tittle}>
            <h2>Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
            <div className={styles.product_line}></div>
            {/* {getFiltered(items)} */}
          </div>

          <div data-aos="zoom-in" className={styles.nav}>
            <ul className={styles.nav_list}>
              <li onClick={() => setItems(Menu)}>
                <a className={`${styles.img_filter} ${styles.active}`}>All</a>
              </li>
              <li onClick={() => filterItem('mavic')}>
                <a className={styles.img_filter}>Mavic</a>
              </li>
              <li onClick={() => filterItem('avata')}>
                <a className={styles.img_filter}>Avata</a>
              </li>
              <li onClick={() => filterItem('phantom')}>
                <a className={styles.img_filter}>Phantom</a>
              </li>
              <li onClick={() => filterItem('mini')}>
                <a className={styles.img_filter}>Mini</a>
              </li>
            </ul>
          </div>

          <div data-aos="zoom-in" className={styles.product_row}>
            {items.map((elem) => {
              return (
                <div className={styles.product_cols} key={elem.id}>
                  <div className={styles.product_img}>
                    <img className={styles.imge} src={elem.image} alt="" />
                    <div className={styles.img_tag}>
                      {' '}
                      <h3 className={styles.s_text}>{elem.tag}</h3>{' '}
                    </div>
                  </div>
                  <div className={styles.post_content}>
                    <p>
                      {' '}
                      <span>Rating: </span>
                      {elem.rating}{' '}
                    </p>
                    <div className={styles.post_title}>
                      <Link href={`Product/${elem.id}`}>
                        <h4>{elem.heading}</h4>
                      </Link>
                    </div>
                    <div className={styles.price}>
                      <p>{formatIDR(elem.price)}</p>
                    </div>
                    <div className={styles.post_text}>
                      <ReadMore content={elem.paragraph} />
                    </div>
                    <Link href={`Product/${elem.id}`} className={styles.post_more}>
                      Buy now
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </RootLayout>
    </>
  );
}

export default Product;
