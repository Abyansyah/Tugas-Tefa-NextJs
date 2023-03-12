import styles from 'ahmad/styles/products.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Data from 'ahmad/data/data.json';
import ReadMore from './readmore';
import { FaStar } from 'react-icons/fa';

function RecProduct() {
  const newProduct = Data.filter((product) => product.new);

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <h1 className={styles.head}>New Products</h1>
        <p className={styles.para}>
          New innovation, best quality than before. <br /> Make every moment flying operation become unforgettable.
        </p>
        <div className={styles.card}>
          {newProduct.map((item) => (
            <div className={styles.card_item}>
              <Link href={`/Product/${item.id}`}>
                <Image className={styles.img} src={item.image} width={250} height={250} alt="foto produk" />
              </Link>
              <div className={styles.new}>
                <div className={styles.new_head}>Product New</div>
              </div>
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
  );
}

export default RecProduct;
