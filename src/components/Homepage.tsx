"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Mail, MessageCircle, Pill } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Tirzepitide",
    category: "GLP-1 Peptide",
    image: "/tirzepitide.png", 
    facts: [
      "Dual GIP and GLP-1 receptor agonist",
      "Supports weight management",
      "Promotes improved glycemic control",
      "Popular for body recomposition"
    ],
    description: "Tirzepitide is a cutting-edge peptide that targets both GIP and GLP-1 receptors, making it highly effective for weight loss and metabolic health."
  },
  {
    id: 2,
    name: "Retatrutide",
    category: "Multi-Agonist Peptide",
    image: "/retatrutide.png", 
    facts: [
      "Triple agonist: GIP, GLP-1, and glucagon receptors",
      "Emerging for rapid fat loss",
      "Potential for enhanced metabolic outcomes",
      "Next-gen peptide therapy"
    ],
    description: "Retatrutide is a novel multi-agonist peptide showing promise for accelerated fat loss and metabolic improvements."
  },
  {
    id: 3,
    name: "Testosterone",
    category: "Hormone Therapy",
    image: "/testosterone.png", 
    facts: [
      "Supports muscle growth and strength",
      "Improves energy and libido",
      "Essential for male hormone balance",
      "Widely used in HRT protocols"
    ],
    description: "Testosterone is the foundational hormone for muscle gain, vitality, and overall male health, used in various hormone replacement therapies."
  }
];

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <div className="w-40 h-16 flex items-center justify-center overflow-hidden p-1 md:p-2">
              <Image src="/logo.png" className="object-contain" alt="NEXOGEN logo" width={160} height={56} priority />
            </div>
          </motion.div>
          {/* Desktop Nav */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#products" className="text-blue-200 hover:text-white transition-colors font-semibold tracking-wide">Products</a>
            <a href="#contact" className="text-blue-200 hover:text-white transition-colors font-semibold tracking-wide">Contact</a>
          </motion.div>
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              className="relative z-20 w-10 h-10 flex flex-col justify-center items-center group"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-7 h-1 bg-blue-300 rounded transition-all duration-300 mb-1"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-7 h-1 bg-blue-300 rounded transition-all duration-300 mb-1"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-7 h-1 bg-blue-300 rounded transition-all duration-300"
              />
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -20, pointerEvents: 'none' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="md:hidden absolute left-0 right-0 top-24 bg-slate-950/95 backdrop-blur-lg shadow-lg rounded-b-2xl px-8 py-8 flex flex-col items-center space-y-6 z-10"
          style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
        >
          <a
            href="#products"
            className="text-blue-200 hover:text-white text-lg font-semibold tracking-wide transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-blue-200 hover:text-white text-lg font-semibold tracking-wide transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              <span className="inline-flex items-center justify-center gap-2">
                <Pill className="w-10 h-10 text-blue-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
                NEXOGEN
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-2">
                LabS
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-mono">
              Elite GLP-1s, peptides, and hormone therapies for advanced body recomposition and performance. Trusted by athletes, professionals, and researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:nexogenlabs@proton.me"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border-2 border-blue-400 shadow-blue-700/40"
              >
                <Mail className="w-5 h-5 mr-2" />
                Order via ProtonMail
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border-2 border-blue-400 shadow-blue-700/40"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Products</h2>
            <p className="text-blue-100 text-lg font-mono">Explore our most advanced performance enhancement pharmaceuticals</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 0 32px 0 #60a5fa55" }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/70 transition-all duration-300 shadow-lg shadow-blue-900/20"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 flex items-center justify-center h-48 bg-gradient-to-br from-blue-900/40 to-slate-900/60 border border-blue-400/20">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={140}
                      height={140}
                      className="object-contain h-36 w-full drop-shadow-lg"
                    />
                  ) : (
                    <Pill className="w-16 h-16 text-blue-400 opacity-80 drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]" />
                  )}
                  <div className="absolute top-4 right-4 hidden bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-mono border border-blue-400/60">
                    {product.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide font-mono">{product.name}</h3>
                <p className="text-blue-100 mb-4 font-mono text-sm">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.facts.map((fact, i) => (
                    <div key={i} className="flex items-center text-blue-100">
                      <Star className="w-4 h-4 text-blue-300 mr-2" />
                      <span className="text-xs font-mono">{fact}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Contact</h2>
            <p className="text-blue-100 mb-10 font-mono text-lg">For orders, questions, or to join our community, reach out via ProtonMail or Discord. We respond promptly and professionally.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:nexogenlabs@proton.me"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border-2 border-blue-400 shadow-blue-700/40"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact via ProtonMail
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border-2 border-blue-400 shadow-blue-700/40"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-blue-400/20 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-300 font-mono">© 2025 NEXOGEN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;