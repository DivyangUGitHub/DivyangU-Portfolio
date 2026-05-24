import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'What is JavaScript? A Complete Beginner Guide',
    date: 'May 15, 2026',
    excerpt: 'JavaScript is one of the most popular programming languages in the world. It\'s used by millions of developers to create interactive websites...',
    readTime: '8 min read',
    slug: 'javascript-beginner-guide',
    tags: ['JavaScript', 'Web Development', 'Beginner'],
  },
  {
    id: '2',
    title: 'Mastering Micro-interactions in React',
    date: 'May 10, 2026',
    excerpt: 'Learn how to add delightful animations that enhance UX and make your applications feel alive with Framer Motion and React...',
    readTime: '6 min read',
    slug: 'micro-interactions-react',
    tags: ['React', 'Framer Motion', 'UX'],
  },
  {
    id: '3',
    title: 'Building Scalable Full-Stack Apps with Next.js',
    date: 'May 5, 2026',
    excerpt: 'Best practices for architecture, performance, and deployment when building production-ready applications with Next.js...',
    readTime: '10 min read',
    slug: 'scalable-nextjs',
    tags: ['Next.js', 'Full Stack', 'Performance'],
  },
];