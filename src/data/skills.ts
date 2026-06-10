import { Code, LayoutDashboard, Cloud, Wrench, Sparkles } from 'lucide-react';
import { ElementType } from 'react';

export interface SkillCategory {
	name: string;
	Icon: ElementType;
	skills: string[];
	color: string;
}

export const skillCategories: SkillCategory[] = [
	{
		name: 'Frontend Frameworks',
		Icon: Code,
		color: 'bg-green-500/10 text-green-500',
		skills: [
			'React',
			'Next.js',
			'Vue.js',
			'Nuxt',
			'TanStack',
			'JavaScript',
			'jQuery',
		],
	},
	{
		name: 'UI/UX & Styling',
		Icon: LayoutDashboard,
		color: 'bg-pink-500/10 text-pink-500',
		skills: [
			'Tailwind CSS',
			'Bootstrap',
			'Vuetify',
			'Sass',
			'CSS3',
			'HTML5',
			'Figma',
			'WordPress',
		],
	},
	{
		name: 'Backend & Databases',
		Icon: Wrench,
		color: 'bg-yellow-500/10 text-yellow-500',
		skills: [
			'PHP',
			'Laravel',
			'RESTful APIs',
			'MongoDB',
			'MySQL',
			'Supabase',
			'Firebase',
		],
	},
	{
		name: 'DevOps & Cloud',
		Icon: Cloud,
		color: 'bg-blue-500/10 text-blue-500',
		skills: [
			'Docker',
			'Git',
			'Git Flow',
			'AWS',
			'Google Cloud',
			'Cypress',
		],
	},
	{
		name: 'AI & Automation',
		Icon: Sparkles,
		color: 'bg-purple-500/10 text-purple-500',
		skills: [
			'AI Integration',
			'Automation',
			'N8N',
			'Adaline',
		],
	},
];
