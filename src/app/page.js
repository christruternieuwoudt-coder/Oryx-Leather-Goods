import Link from 'next/link';
import productsData from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { ShieldCheck, Sparkles, Clock, Compass } from 'lucide-react';

export default function Home() {
  const featured = productsData.filter(p => p.featured);

  return (
    <div className="space-y-24 pb-20">
      {/* HERO BANNER */}
      <section className="relative bg-stone-900 text-white min-h-[85vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('/images/workshop/hero.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="relative max-w-3xl space-y-6 z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-leather-tan font-semibold block">Artisan Leather Atelier</span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-tight leading-none text-white">
            Handcrafted Leather Goods Made to Last
          </h1>
          <p className="text-stone-300 max-w-xl mx-auto font-light text-base sm:text-lg">
            Premium leather accessories individually crafted with care and made specifically for you in our studio workspace.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/products" className="bg-leather-tan hover:bg-leather-cognac text-white px-8 py-4 uppercase text-xs tracking-widest font-semibold transition-all shadow-lg w-full sm:w-auto">
              Shop Collection
            </Link>
            <Link href="/about" className="border border-white/40 hover:border-white hover:bg-white/5 text-white px-8 py-4 uppercase text-xs tracking-widest font-semibold transition-all w-full sm:w-auto">
              Our Journey
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND STORY OVERVIEW */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-leather-tan font-medium">The Oryx Philosophy</span>
          <h2 className="font-serif text-3xl text-leather-dark">Luxury Without Pretension</h2>
          <p className="text-stone-600 leading-relaxed font-light">
            Every creation at Oryx begins with selecting elite grade full-grain vegetable-tanned structures. We abandon assembly lines in favor of precision traditional methods. 
          </p>
          <p className="text-stone-600 leading-relaxed font-light">
            Your selection undergoes rigorous processing tailored specifically around your preferred specifications. We build beautiful expressions meant to build historic architectural patina across generations.
          </p>
        </div>
        <div className="bg-stone-200 aspect-[4/3] flex items-center justify-center text-stone-400 text-xs uppercase tracking-widest border border-stone-300">
          [ Studio / Crafting Heritage Image ]
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl text-leather-dark">Featured Commissions</h2>
          <p className="text-stone-500 text-sm max-w-md mx-auto">Explore architectural, minimal profiles hand-selected for dynamic configurations.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="bg-white border-y border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center p-4 space-y-3">
            <Sparkles className="text-leather-tan" size={28} />
            <h4 className="font-serif font-semibold text-leather-dark">100% Handcrafted</h4>
            <p className="text-xs text-stone-500 max-w-[200px]">Individually cut, aligned, and edge-finished by an artisan.</p>
          </div>
          <div className="flex flex-col items-center p-4 space-y-3">
            <Compass className="text-leather-tan" size={28} />
            <h4 className="font-serif font-semibold text-leather-dark">Made to Order</h4>
            <p className="text-xs text-stone-500 max-w-[200px]">Tailored setup specifications mapped precisely to your requirements.</p>
          </div>
          <div className="flex flex-col items-center p-4 space-y-3">
            <ShieldCheck className="text-leather-tan" size={28} />
            <h4 className="font-serif font-semibold text-leather-dark">Genuine Full Grain</h4>
            <p className="text-xs text-stone-500 max-w-[200px]">Premium vegetable-tanned choices selected for supreme dynamic aging.</p>
          </div>
          <div className="flex flex-col items-center p-4 space-y-3">
            <Clock className="text-leather-tan" size={28} />
            <h4 className="font-serif font-semibold text-leather-dark">Built to Last</h4>
            <p className="text-xs text-stone-500 max-w-[200px]">Engineered via saddle-stitching ensuring structurally robust wear.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
