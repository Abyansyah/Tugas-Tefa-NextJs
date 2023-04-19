import { useState, createContext } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('itemCount') || 0 : 0
  );

  const updateItemCount = (count) => {
    setItemCount(count);
    localStorage.setItem('itemCount', count);
  };

  return (
    <CartContext.Provider value={{ itemCount, updateItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

