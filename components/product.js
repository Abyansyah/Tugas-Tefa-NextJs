import styles from 'ahmad/styles/products.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Data from 'ahmad/data/data.json';
import ReadMore from './readmore';

function RecProduct() {
  const newProduct = Data.filter((product) => product.new)

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
        <p className={styles.para}>New innovation, best quality than before. Make every moment flying operation become unforgettable.</p>
        <div data-aos="fade-up" className={styles.card}>
          {newProduct.map((item) => (
            <div className={styles.card_item}>
              <Image className={styles.img} src={item.image} width={299} height={299} />  
              <div className={styles.item}>
                <h2 className={styles.heading}>{item.heading}</h2>
                <h1 className={styles.price}>{formatIDR(item.price)}</h1>
                <ReadMore content={item.paragraph} classname={styles.paragraph} slice="35" />
                <Link href={`Product/${item.id}`}>
                  <button className={styles.btn}>Get Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecProduct;
