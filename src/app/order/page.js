'use client';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Trash2, ShieldCheck, MailCheck } from 'lucide-react';
import Link from 'next/link';

export default function OrderRequestPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });
  const [status, setStatus] = useState({ dynamic: 'idle', message: '' });

  // Initialize EmailJS via Public Key Client Key safely without environment leaking dependencies
  useEffect(() => {
    // Replace with your real Public Key from your EmailJS dashboard settings
    emailjs.init(pNJMERzh7IYoeilDK);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setStatus({ dynamic: 'loading', message: 'Syncing studio requirements...' });

    // Format selected options into a highly legible structural string block
    const itemsFormatted = cart.map(item => (
      `Product: ${item.name} (ID: ${item.id})\n` +
      `Quantity: ${item.quantity}\n` +
      `Color Selection: ${item.customization.selectedColor}\n` +
      `Thread Type: ${item.customization.threadColor}\n` +
      `Monogramming Stamping: ${item.customization.engraving}\n` +
      `---------------------------------------\n`
    )).join('\n');

    const emailParams = {
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      additional_notes: formData.notes || "None Provided",
      ordered_items: itemsFormatted,
      submission_time: new Date().toLocaleString()
    };

    try {
      // Replace with your real Service ID and Template ID strings
      await emailjs.send("template_q70uqjg", "YOUR_TEMPLATE_ID", emailParams);
      
      setStatus({ dynamic: 'success', message: 'Order Request successfully locked.' });
      clearCart();
    } catch (err) {
      console.error(err);
      setStatus({ dynamic: 'error', message: 'Submission anomaly occurred. Please interface directly at oryxleathergoods@gmail.com' });
    }
  };

  if (status.dynamic === 'success') {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="inline-flex p-4 bg-stone-900 rounded-full text-leather-cream mb-4"><MailCheck size={36} /></div>
        <h1 className="font-serif text-4xl text-leather-dark">Your Order Has Begun</h1>
        <p className="text-stone-600 font-light leading-relaxed">
          Thank you for choosing Oryx Leather Goods, <strong>{formData.name}</strong>. A receipt record has been transmitted directly to your studio configuration stack. 
        </p>
        <p className="text-stone-500 text-sm font-light">
          We will contact you via <strong>{formData.email}</strong> within 24–48 hours to confirm structural choices and setup your dedicated crafting schedule.
        </p>
        <div className="pt-6">
          <Link href="/products" className="bg-leather-dark text-white px-8 py-3 uppercase text-xs tracking-widest font-semibold transition-all">Return To Atelier</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl text-leather-dark mb-4">Begin Your Order</h1>
      <p className="text-stone-500 text-sm max-w-2xl mb-12">
        Every Oryx Leather Goods item is individually handcrafted and made to order. Before production begins, we confirm your preferred leather selections and custom requirements to ensure your item is crafted exactly as you envision it.
      </p>

      {/* PROCESS TIMELINE */}
      <div className="bg-white border border-stone-200 p-8 rounded-none mb-12 shadow-sm">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-leather-dark text-center mb-8">The Handcrafted Journey Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center relative">
          <div className="space-y-2">
            <span className="w-8 h-8 rounded-full bg-leather-tan text-white text-xs flex items-center justify-center mx-auto font-bold font-sans">1</span>
            <h4 className="text-xs uppercase tracking-wider font-semibold">Order Request</h4>
            <p className="text-[11px] text-stone-500">Lock configurations via form transmission.</p>
          </div>
          <div className="space-y-2">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center mx-auto font-bold font-sans">2</span>
            <h4 className="text-xs uppercase tracking-wider font-semibold">Design Validation</h4>
            <p className="text-[11px] text-stone-500">Artisan review and detail adjustment validation.</p>
          </div>
          <div className="space-y-2">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center mx-auto font-bold font-sans">3</span>
            <h4 className="text-xs uppercase tracking-wider font-semibold">Bench Crafting</h4>
            <p className="text-[11px] text-stone-500">Traditional hand cutting, alignment, and stitch work.</p>
          </div>
          <div className="space-y-2">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center mx-auto font-bold font-sans">4</span>
            <h4 className="text-xs uppercase tracking-wider font-semibold">Inspection</h4>
            <p className="text-[11px] text-stone-500">Structural integrity validation audit.</p>
          </div>
          <div className="space-y-2">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center mx-auto font-bold font-sans">5</span>
            <h4 className="text-xs uppercase tracking-wider font-semibold">Secure Shipping</h4>
            <p className="text-[11px] text-stone-500">Global tracking dispatched directly to your location.</p>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white border border-stone-200">
          <p className="text-stone-500 font-light">Your request profile is empty.</p>
          <Link href="/products" className="inline-block mt-4 bg-leather-tan text-white px-6 py-2.5 uppercase text-xs tracking-wider transition-all font-semibold">Explore Catalog</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* PROFILE INVENTORY LIST */}
          <div className="lg:col-span-7 space-y-4">
            {cart.map((item) => (
              <div key={item.cartItemId} className="bg-white border border-stone-200 p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-leather-dark">{item.name}</h3>
                  <p className="text-xs text-stone-500 tracking-wider uppercase font-medium">Base: {item.customization.selectedColor} | Thread: {item.customization.threadColor}</p>
                  <p className="text-xs italic text-stone-400">Stamp: Configuration Initials &ldquo;{item.customization.engraving}&rdquo;</p>
                  <p className="text-sm font-medium text-stone-900 mt-2">${(item.price * item.quantity).toFixed(2)} USD</p>
                </div>
                <div className="flex items-center space-x-4 self-end sm:self-auto">
                  <div className="flex border border-stone-300">
                    <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} className="px-3 py-1 bg-stone-50 text-stone-600 hover:bg-stone-100">-</button>
                    <span className="px-4 py-1 bg-white font-sans text-sm border-x border-stone-300">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} className="px-3 py-1 bg-stone-50 text-stone-600 hover:bg-stone-100">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.cartItemId)} className="text-stone-400 hover:text-red-600 p-2 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* STUDIO DISPATCH INTERFACE FORM */}
          <div className="lg:col-span-5 bg-white border border-stone-200 p-8 shadow-sm">
            <h2 className="font-serif text-xl text-leather-dark mb-6">Studio Dispatch Interface</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs uppercase text-stone-500 mb-1 font-medium">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-stone-50 border border-stone-300 p-3 text-sm focus:outline-none focus:border-leather-tan" />
              </div>
              <div>
                <label className="block text-xs uppercase text-stone-500 mb-1 font-medium">Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-stone-50 border border-stone-300 p-3 text-sm focus:outline-none focus:border-leather-tan" />
              </div>
              <div>
                <label className="block text-xs uppercase text-stone-500 mb-1 font-medium">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-stone-50 border border-stone-300 p-3 text-sm focus:outline-none focus:border-leather-tan" />
              </div>
              <div>
                <label className="block text-xs uppercase text-stone-500 mb-1 font-medium">Special Request / Dimensional Notes (Optional)</label>
                <textarea rows={4} name="notes" value={formData.notes} onChange={handleInputChange} placeholder="E.g., Please use the reverse color placement scheme on the structural card wings..." className="w-full bg-stone-50 border border-stone-300 p-3 text-sm focus:outline-none focus:border-leather-tan resize-none" />
              </div>

              <button
                type="submit"
                disabled={status.dynamic === 'loading'}
                className="w-full bg-leather-dark hover:bg-stone-800 disabled:bg-stone-400 text-white py-4 uppercase text-xs tracking-widest font-semibold transition-colors mt-4 shadow-md"
              >
                {status.dynamic === 'loading' ? 'Transmitting Specs...' : 'Submit Order Request'}
              </button>

              {status.dynamic === 'error' && (
                <p className="text-xs text-red-600 mt-2 text-center">{status.message}</p>
              )}
              
              <div className="flex items-start space-x-2 text-[11px] text-stone-400 mt-4 leading-normal">
                <ShieldCheck size={14} className="text-leather-tan shrink-0 mt-0.5" />
                <span>Zero pre-payment requested now. All specifications remain subject to personalization changes before manual invoice confirmation.</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
