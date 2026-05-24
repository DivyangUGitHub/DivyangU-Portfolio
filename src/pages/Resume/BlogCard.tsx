import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 8 }}
      className="glass-card p-6 hover:border-white/20 transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <span className="text-xs text-gray-500">{post.readTime}</span>
      </div>
      <p className="text-gray-400 text-sm mb-2">{post.date}</p>
      <p className="text-gray-300">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400">{tag}</span>
        ))}
      </div>
      <div className="mt-4 text-cyan-400 text-sm flex items-center gap-1">
        Read more <ChevronRight size={14} />
      </div>
    </motion.article>
  );
};

export default BlogCard;