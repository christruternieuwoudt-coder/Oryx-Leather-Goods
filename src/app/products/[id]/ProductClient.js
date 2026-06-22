'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import productsData from '@/app/data/products.json';
import { useCart } from '@/context/CartContext';
import { CheckCircle2, ChevronRight, Maximize2 } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find(p => p.id === id);

  const [selectedColor, setSelectedColor] = useState(product?.availableColors[0] || '');
  const [threadColor, setThreadColor] = useState('Cream Waxed Thread');
  const [engraving, setEngraving] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return <div className="text-center py-24">Product not found.</div>;

  const handleAddToRequest = () => {
    const customConfig = {
      selectedColor,
      threadColor,
      engraving: engraving.trim() || 'None Requested'
    };
    addToCart(product, customConfig);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* BREADCRUMB */}
      <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-400 mb-8">
        <Link href="/products" className="hover:text-leather-tan">Atelier</Link>
        <ChevronRight size={12} />
        <span className="text-stone-600 font-medium truncate max-w-xs">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* INTERACTIVE MEDIA CONTROLLER */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-square bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-400 relative group cursor-zoom-in">
            <span className="text-xs uppercase tracking-widest">[ Image Zoom Container: {product.name} ]</span>
            <Maximize2 size={18} className="absolute right-4 bottom-4 text-stone-500 opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* ORDER SPECS CONFIGURATOR */}
        <div className="lg:col-span-5 bg-white border border-stone-200 p-8 space-y-6 shadow-sm">
          <div>
            <h1 className="font-serif text-3xl text-leather-dark tracking-tight">{product.name}</h1>
            <p className="text-2xl text-stone-900 font-medium mt-2">${product.price.toFixed(2)} USD</p>
          </div>
          <hr className="border-stone-200" />
          
          <div className="space-y-2 text-sm text-stone-600 leading-relaxed font-light">
            <p><strong>Leather Base:</strong> {product.leatherType}</p>
            <p>{product.fullDescription}</p>
          </div>

          {/* CUSTOMIZATION LOGIC LAYERS */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-leather-dark">Studio Customization Specs</h3>
            
            {/* COLOR SPEC */}
            <div className="space-y-2">
              <label className="block text-xs uppercase text-stone-500">Primary Leather Hide Color</label>
              <select 
                value={selectedColor} 
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 text-sm p-3 focus:outline-none focus:border-leather-tan font-sans"
              >
                {product.availableColors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>

            {/* THREAD SPEC */}
            <div className="space-y-2">
              <label className="block text-xs uppercase text-stone-500">Fil Au Chinois Stitching Thread</label>
              <select 
                value={threadColor} 
                onChange={(e) => setThreadColor(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 text-sm p-3 focus:outline-none focus:border-leather-tan font-sans"
              >
                <option value="Cream Waxed Thread">Cream Waxed Thread (High Contrast)</option>
                <option value="Matching Tonal Thread">Matching Tonal Thread (Subtle Elegance)</option>
                <option value="Dark Charcoal Thread">Dark Charcoal Thread</option>
              </select>
            </div>

            {/* STAMP SPEC */}
            <div className="space-y-2">
              <label className="block text-xs uppercase text-stone-500">Initial Stamping / Monogramming (Optional)</label>
              <input 
                type="text" 
                maxLength={8}
                placeholder="E.g., A.K.O. (Max 8 characters)"
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 text-sm p-3 focus:outline-none focus:border-leather-tan font-sans"
              />
              <p className="text-[11px] text-stone-400">Hand-stamped into the leather focal matrix via premium brass typefaces.</p>
            </div>
          </div>

          <button
            onClick={handleAddToRequest}
            className="w-full bg-leather-tan hover:bg-leather-cognac text-white py-4 uppercase text-xs tracking-widest font-semibold transition-colors shadow-md mt-6"
          >
            Add to Request Cart
          </button>

          {addedNotice && (
            <div className="bg-stone-900 text-white p-4 flex items-center space-x-3 text-xs uppercase tracking-wider animate-fade-in">
              <CheckCircle2 size={16} className="text-leather-cream" />
              <span>Added to profile. Proceed to <Link href="/order" className="underline text-leather-cream font-semibold">Begin Your Order</Link></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export async function generateStaticParams() {
  return [
    { id: 'classic-card-holder' },
    { id: 'artisan-bifold-wallet' }
  ];
}
