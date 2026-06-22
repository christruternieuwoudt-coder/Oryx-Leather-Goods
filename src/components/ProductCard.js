import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}/`} className="group block bg-white border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-square bg-stone-100 relative overflow-hidden">
        {/* Placeholder image representation */}
        <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 group-hover:scale-105 transition-transform duration-500">
          <span className="text-xs uppercase tracking-widest">[ {product.name} Image ]</span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-widest text-leather-tan font-medium">{product.category.replace('-', ' ')}</span>
        <h3 className="font-serif text-lg text-leather-dark mt-1 group-hover:text-leather-tan transition-colors">{product.name}</h3>
        <p className="text-stone-500 text-sm mt-1 line-clamp-2">{product.shortDescription}</p>
        <div className="mt-4 pt-4 border-t border-stone-100 flex justify-between items-center">
          <span className="font-medium text-stone-900">${product.price.toFixed(2)} USD</span>
          <span className="text-xs uppercase tracking-wider text-stone-400 group-hover:text-leather-dark transition-colors font-medium">Configure &rarr;</span>
        </div>
      </div>
    </Link>
  );
}
