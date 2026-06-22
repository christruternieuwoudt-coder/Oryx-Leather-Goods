'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('oryx_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('oryx_cart', JSON.stringify(newCart));
  };

  const addToCart = (product, customization) => {
    const cartItemId = `${product.id}-${Date.now()}`;
    const newCart = [...cart, { ...product, cartItemId, customization, quantity: 1 }];
    saveCart(newCart);
  };

  const removeFromCart = (cartItemId) => {
    const newCart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCart(newCart);
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity <= 0) return removeFromCart(cartItemId);
    const newCart = cart.map(item => item.cartItemId === cartItemId ? { ...item, quantity } : item);
    saveCart(newCart);
  };

  const clearCart = () => saveCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
