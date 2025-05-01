'use client'; 
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Link2 } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/xanoqgav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else throw new Error();
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-8">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          PersonaOS
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
          Build your personal brand, stay focused, and pitch like a pro – all powered by AI.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          Join Early Access
        </button>
      </div>

      {/* Features Section */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Why PersonaOS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <Brain className="mx-auto text-blue-600 mb-3" size={40} />
            <h3 className="font-semibold text-lg mb-1">AI Daily Focus</h3>
            <p className="text-sm text-gray-600">Boost your mindset every morning with smart motivation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <Sparkles className="mx-auto text-blue-600 mb-3" size={40} />
            <h3 className="font-semibold text-lg mb-1">Smart Pitches</h3>
            <p className="text-sm text-gray-600">Create AI-powered elevator pitches for networking and branding.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow-md text-center"
          >
            <Link2 className="mx-auto text-blue-600 mb-3" size={40} />
            <h3 className="font-semibold text-lg mb-1">Smart Bio Pages</h3>
            <p className="text-sm text-gray-600">Build beautiful bio pages to showcase your personal brand.</p>
          </motion.div>
        </div>
      </section>

      {/* Email Signup Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded shadow-md max-w-md w-full"
            >
              <h2 className="text-xl font-semibold mb-4">Get Notified</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded px-3 py-2"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Notify Me'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-sm">✅ Thank you! You’re on the list.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm">❌ Something went wrong. Try again.</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-16 text-sm text-gray-400">
        © 2025 PersonaOS. All rights reserved.
      </footer>
    </main>
  );
}
