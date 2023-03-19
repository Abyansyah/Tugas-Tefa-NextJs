import 'ahmad/styles/globals.css';
import { CartProvider } from 'ahmad/hooks/cartcontexts';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
