import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-leather-dark text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="font-serif text-xl tracking-wide font-semibold text-white block">ORYX</span>
          <p className="text-xs uppercase tracking-widest text-leather-tan mt-1">Handcrafted in Taiwan</p>
          <p className="mt-4 text-sm text-stone-400 leading-relaxed">
            Premium custom accessories individually engineered for a lifetime of clean lines and rich, historic character.
          </p>
        </div>
        <div>
          <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-4">Collection</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/products?category=wallets" className="hover:text-white transition-colors">Wallets</Link></li>
            <li><Link href="/products?category=card-holders" className="hover:text-white transition-colors">Card Holders</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-4">Information</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/care" className="hover:text-white transition-colors">Leather Care Guide</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Get Help</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-4">Inquiries</h4>
          <p className="text-sm text-stone-400">Direct studio interface:</p>
          <a href="mailto:oryxleathergoods@gmail.com" className="text-leather-tan hover:underline text-sm block mt-1 font-medium">oryxleathergoods@gmail.com</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} Oryx Leather Goods. Independently Crafted in Taiwan. Made to Last.
      </div>
    </footer>
  );
}
