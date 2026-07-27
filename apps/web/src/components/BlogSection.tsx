'use client';

import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Blog & Guías
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Aprende a importar como un Experto
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Artículos educativos sobre normativas SUNAT, consejos de compra y más.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-brand-red/40 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/90 text-gray-900 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-2 text-xs font-bold text-brand-red">
                <span>Leer artículo completo</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border border-gray-200 p-8 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative space-y-6"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 text-gray-500 hover:text-gray-900 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {selectedPost.title}
              </h2>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-56 object-cover rounded-xl border border-gray-200"
              />

              <div className="text-sm text-gray-500 space-y-4 leading-relaxed">
                <p>{selectedPost.content}</p>
                <p>
                  Para consultar detalles específicos sobre tu tipo de mercadería o exoneraciones aduaneras de SUNAT en Perú, contáctate directamente con nuestros especialistas vía WhatsApp.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs rounded-xl"
                >
                  Cerrar Artículo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
