
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Oryx Leather Goods | Handcrafted Leather Goods Made to Last',
  description: 'Premium leather accessories individually crafted with care and made specifically for you in Taiwan.',
  metadataBase: new URL('https://oryxleathergoods.com'), // Replace with actual domain later
  openGraph: {
    title: 'Oryx Leather Goods',
    description: 'Premium artisan handcrafted leather goods made to order.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-leather-bone text-leather-charcoal font-sans min-h-screen flex flex-col antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
