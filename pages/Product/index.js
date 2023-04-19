import React, { useState } from 'react';
import styles from '../../styles/product.module.css';
import Menu from '../../data/data.json';
import Link from 'next/link';
import ReadMore from 'ahmad/components/readmore';
import RootLayout from 'ahmad/components/Layout';
import { FaStar, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

function Product() {
  const [items, setItems] = useState(Menu);
  const [search, setSearch] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const filteredData = items.filter((item) => {
    if (search && !item.heading.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    if (filterOption && item.category !== filterOption) {
      return false;
    }
    return true;
  });

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const getFiltered = (itemps) => {
    if (!itemps || itemps.length === 0) {
      return <p className={styles.par}>Tersedia 0 Produk</p>;
    } else {
      return <p className={styles.par}>Tersedia {itemps.length} Produk </p>;
    }
  };
  return (
    <>
      <RootLayout tittle="Product Page">
        <section className={styles.product}>
          <div className={styles.container}>
            <div className={styles.wrap}>
              <h1 className={styles.head}>Product DJI</h1>
              <div className={styles.filter}>
                <div className={styles.search}>
                  <FaSearch className={styles.icon} /> <input type="text" className={styles.input} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here.." />
                </div>
                <select className={styles.select} value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                  <option value="" className={styles.option}>
                    All
                  </option>
                  <option value="mavic" className={styles.option}>
                    Mavic
                  </option>
                  <option value="avata" className={styles.option}>
                    Avata
                  </option>
                  <option value="phantom" className={styles.option}>
                    Phantom
                  </option>
                  <option value="mini" className={styles.option}>
                    Mini
                  </option>
                </select>
              </div>
              {getFiltered(filteredData)}
            </div>

            <div className={styles.card}>
              {filteredData.map((item, index) => (
                <div className={styles.card_item} key={index}>
                  <Link href={`/Product/${item.id}`}>
                    <Image className={styles.img} src={item.image} width={250} height={250} alt="foto" />
                  </Link>
                  <div className={styles.item}>
                    <h2 className={styles.heading}>{item.heading}</h2>
                    <ReadMore content={item.paragraph} classname={styles.paragraph} slice="35" />
                    <h1 className={styles.price}>{formatIDR(item.price)}</h1>
                    <div className={styles.chasback}>{item.chas}</div>
                    <div className={styles.rating}>
                      <FaStar color="#FFC107" />
                      <h5 className={styles.rat_head}>Rating {item.rating}</h5> | <p className={styles.sold}>Terjual {item.terjual}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
}

export default Product;
