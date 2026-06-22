'use client';
import { useState } from 'react';
import productsData from '@/app/data/products.json';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';

export default function ShopCatalog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'card-holders', 'wallets', 'keychains', 'belts', 'passport-holders', 'notebook-covers'];

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.shortDescription.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pb-6 border-b border-stone-200">
        <div>
          <h1 className="font-serif text-4xl text-leather-dark">The Atelier Catalog</h1>
          <p className="text-stone-500 text-sm mt-1">Select an architectural profile to begin tailoring configuration choices.</p>
        </div>
        <div className="relative max-w-sm w-full">
          <input 
            type="text" 
            placeholder="Search our catalog..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-stone-300 py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-leather-tan font-sans"
          />
          <Search className="absolute left-4 top-3.5 text-stone-400" size={16} />
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 uppercase text-xs tracking-wider border font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-leather-dark text-white border-leather-dark' 
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
            }`}
          >
            {cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* GRID DISPLAY */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-stone-100">
          <p className="text-stone-500 font-light">No premium options match your filter selections.</p>
        </div>
      )}
    </div>
  );
}
