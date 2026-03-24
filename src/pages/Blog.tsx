import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../types';

export const Blog = () => {
  return (
    <div className="pt-20">
      <section className="bg-safari-accent py-20 text-safari-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Kenya Safari Blog</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80 font-light">
            Expert advice, travel guides, and the latest news from the Kenyan wilderness.
          </p>
        </div>
      </section>

      <section className="py-20 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl overflow-hidden safari-card-shadow group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-safari-accent uppercase tracking-widest mb-3 block">{post.date}</span>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-safari-earth">{post.title}</h3>
                  <p className="text-sm text-safari-earth/70 mb-6 leading-relaxed">{post.excerpt}</p>
                  <button className="text-safari-olive font-bold hover:underline">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
