import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'RuneHub',
    description: 'The knowledge engine for builders. Access massive library of tutorials, technical guides, and real-time tech news.',
    longDescription: 'RuneHub is a comprehensive platform for developers...',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    image: '',
    link: '#',
    gradient: 'from-purple-600 to-pink-600',
    featured: true,
  },
  {
    id: '2',
    title: 'RuneAI',
    description: 'AI-powered productivity suite with 145+ tools for learning, creating, and working smarter.',
    longDescription: 'Everything you need to build, learn, and get hired...',
    tech: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    image: '',
    link: '#',
    gradient: 'from-cyan-600 to-blue-600',
    featured: true,
  },
  {
    id: '3',
    title: 'RuneLearn',
    description: 'Master any skill with AI-powered quizzes, flashcards, learning roadmaps, and spaced repetition.',
    longDescription: 'Personalized learning platform...',
    tech: ['React Native', 'Expo', 'MongoDB', 'Express'],
    image: '',
    link: '#',
    gradient: 'from-orange-600 to-red-600',
    featured: true,
  },
];