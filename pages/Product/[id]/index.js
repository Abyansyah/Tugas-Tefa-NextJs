import { useState, useRef, useEffect } from 'react';
import styles from 'ahmad/styles/detail.module.css';
import Image from 'next/image';
import { FaCamera, FaMemory, FaBatteryFull, FaTrashAlt } from 'react-icons/fa';
import { MdSpeed } from 'react-icons/md';
import RootLayout from 'ahmad/components/Layout';
import Link from 'next/link';
import Data from '../../../data/data.json';
import DetailImg from 'ahmad/components/detailimg';

function DetailProduk({ data }) {
  const [product] = useState(data);
  const [stock] = useState(data.stock);
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace(`${styles.active}`, `${styles.column_content}`);
    }
    images[index].className = `${styles.active}`;
  };

  const formatIDR = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity <= stock) {
      setQuantity(newQuantity);
    }
  };

  const handlePlusClick = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleMinClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleReset = () => {
    setQuantity(1);
  };
  useEffect(() => {
    const images = myRef.current.children;
    images[index].className = `${styles.active}`;
  }, [index]);

  return (
    <>
      <RootLayout tittle={`Produk ${data.heading}`}>
        <section className={styles.detail}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.left_content}>
                <div className={styles.column_top}>
                  <Image className={styles.img_top} priority={true} src={product.img[index]} width={400} height={400} alt="foto" />
                </div>
                <DetailImg data={data.img} tab={handleTab} myRef={myRef} />
              </div>
              <div className={styles.right_content}>
                <h3>{data.heading}</h3>
                <p className={styles.paragraph}>Super fast, easy control drone</p>
                <h1 className={styles.price}>{formatIDR(data.price)}</h1>
                <p className={styles.right_fe}>Drone features:</p>
                <div className={styles.features}>
                  {data.feature.map((elem, key) => (
                    <div key={key}>
                      <div className={styles.features_content}>
                        <FaCamera size={20} />
                        <p className={styles.content_head}>{elem.camera}</p>
                      </div>
                      <div className={styles.features_content}>
                        <FaMemory size={20} />
                        <p className={styles.content_head}>{elem.memory}</p>
                      </div>
                      <div className={styles.features_content}>
                        <MdSpeed size={20} />
                        <p className={styles.content_head}>{elem.speed}</p>
                      </div>
                      <div className={styles.features_content}>
                        <FaBatteryFull size={20} />
                        <p className={styles.content_head}>{elem.battery}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.quantity}>
                  <div className={styles.quantity_content}>
                    <div className={styles.reset} onClick={handleReset}>
                      <FaTrashAlt />
                    </div>
                    <button className={`${styles.btn_min} ${quantity === 1 ? styles.btn_disable : ''} `} onClick={handleMinClick}>
                      -
                    </button>
                    <input className={styles.input_quantity} type="text" id="quantity" name="quantity" value={quantity} min="1" max={stock} onChange={handleQuantityChange} />
                    <button className={`${styles.btn_plus} ${quantity === stock ? styles.btn_disable : ''}`} onClick={handlePlusClick}>
                      +
                    </button>
                    <p className={styles.stock}>Stok : {stock}</p>
                  </div>
                </div>
                <button className={styles.feature_btn}>
                  <Link href="/">Beli sekarang</Link>
                </button>
              </div>
            </div>
            <div className={styles.desc}>
              <div className={styles.item}>
                <h1 className={styles.item_head}>Description</h1>
                <p className={styles.item_des}>{data.paragraph}</p>
              </div>
            </div>
            <div className={styles.spec}>
              <div className={styles.spec_wrap}>
                <div className={styles.spec_item}>
                  <h1 className={styles.spec_head}>Feature : </h1>
                  <div className={styles.feature}>
                    {data.detail_product.map((elem, key) => (
                      <ul className={styles.feature_list} key={key}>
                        <li className={styles.list}>{elem}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className={styles.spec_item}>
                  <h1 className={styles.spec_head}>Specification : </h1>
                  <div className={styles.feature}>
                    {data.specification.map((elem, key) => (
                      <ul className={styles.feature_list} key={key}>
                        <li className={styles.list}>{elem}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className={styles.spec_item}>
                  <h1 className={styles.spec_head}>In the box : </h1>
                  <div className={styles.feature}>
                    {data.inbox.map((elem, key) => (
                      <ul className={styles.feature_list} key={key}>
                        <li className={styles.list}>{elem}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.review}>
              <div className={styles.review_content}>
                <h1 className={styles.review_head}>Review's</h1>
                <div className={styles.wrap}>
                  {data.review.map((elem, key) => (
                    <div className={styles.review_item} key={key}>
                      <div className={styles.profile}>
                        <Image className={styles.img_review} src={elem.img} width={60} height={60} />
                        <div className={styles.profile_item}>
                          <h2 className={styles.profile_item_head}>{elem.name}</h2>
                          <p className={styles.job}>{elem.job}</p>
                        </div>
                      </div>
                      <div className={styles.comment}>
                        <p className={styles.p_comment}>{elem.comment}</p>
                        <p className={styles.rating}>{elem.rate}</p>
                        <p className={styles.p_date}>{elem.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = Data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = Data.find((item) => item.id.toString() === params.id);

  return { props: { data } };
}

export default DetailProduk;
