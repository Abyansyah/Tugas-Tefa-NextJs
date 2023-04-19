import { useState, useEffect, useContext } from 'react';
import { CartContext } from 'ahmad/hooks/cartcontexts';
import styles from 'ahmad/styles/cart.module.css';
import RootLayout from 'ahmad/components/Layout';
import Image from 'next/image';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { itemCount, updateItemCount } = useContext(CartContext);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCart(updatedCart);
    updateItemCount(itemCount - cart);
  };

  const kurang = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCart(updatedCart);
    updateItemCount(itemCount - 1);
  };

  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotal(total);
  }, [cart]);
  return (
    <RootLayout>
      <section className={styles.cart}>
        <div className={styles.container}>
          <div className={styles.list}>
            <div className={styles.list_left}>
              <h1 className={styles.heading}>Cart</h1>
              <div className={styles.cart}>
                <div className={styles.cart_item}>
                  <Image src="/asset/about.png" width={150} height={150} />
                  <div className={styles.item}>
                    <h3 className={styles.head}>Drone Mavic Mini 3</h3>
                    <p className={styles.price}>13000</p>
                  </div>
                </div>
                <div className={styles.quantity}>
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <h1>Hallo</h1>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
    // <div>
    //   <h2>Cart</h2>
    //   <ul>
    //     {cart.map((item, index) => (
    //       <li key={index}>
    //         {item.price} {item.quantity} x {item.name} quantity <p>Total cost: Rp{item.price * item.quantity} </p>
    //         <Image src={item.img} width={200} height={200} />
    //         <button onClick={() => removeFromCart(item.id)}>Remove</button>
    //         <button onClick={() => kurang(item.id)}>-</button>
    //         <button onClick={() => tambah(item.id)}>+</button>
    //       </li>
    //     ))}
    //   </ul>
    //   <p>Total cost: Rp.{total.toLocaleString('id-ID')}</p>
    // </div>
  );
}

export default Cart;
