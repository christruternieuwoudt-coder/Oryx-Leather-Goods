import ProductClient from './ProductClient';

export async function generateStaticParams() {
  return [
    { id: 'classic-card-holder' },
    { id: 'artisan-bifold-wallet' }
  ];
}

export default function Page({ params }) {
  return <ProductClient params={params} />;
}
