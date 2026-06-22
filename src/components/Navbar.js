'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="font-serif text-2xl tracking-wide font-semibold text-leather-dark">
            ORYX <span className="text-sm font-sans uppercase font-light tracking-[0.2em] text-leather-tan block">Leather Goods</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
            <Link href="/products" className="hover:text-leather-tan transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-leather-tan transition-colors">Our Story</Link>
            <Link href="/care" className="hover:text-leather-tan transition-colors">Leather Care</Link>
            <Link href="/contact" className="hover:text-leather-tan transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/order" className="relative p-2 text-stone-700 hover:text-leather-tan transition-colors">
              <ShoppingBag size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-leather-tan text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-stone-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 flex flex-col space-y-4 uppercase tracking-wider text-sm">
          <Link href="/products" onClick={() => setIsOpen(false)}>Shop Collection</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>Our Story</Link>
          <Link href="/care" onClick={() => setIsOpen(false)}>Leather Care</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
