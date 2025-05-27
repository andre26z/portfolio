import { Code, LayoutDashboard, Cloud, Wrench } from 'lucide-react';
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
		skills: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'Quasar', 'Vuetify', 'SASS'],
	},
	{
		name: 'UI/UX & Styling',
		Icon: LayoutDashboard,
		color: 'bg-pink-500/10 text-pink-500',
		skills: [
			'Tailwind CSS',
			'Figma',
			'Responsive Design',
			'Performance Optimization',
			'Mobile-First Design',
			'Pixel-Perfect Implementation',
		],
	},
	{
		name: 'DevOps & Cloud',
		Icon: Cloud,
		color: 'bg-blue-500/10 text-blue-500',
		skills: ['Docker', 'Git', 'AWS', 'Google Cloud', 'CI/CD'],
	},
	{
		name: 'Full-Stack & Tools',
		Icon: Wrench,
		color: 'bg-yellow-500/10 text-yellow-500',
		skills: [
			'TypeScript',
			'JavaScript',
			'PHP',
			'Laravel',
			'MongoDB',
			'MySQL',
			'Cypress',
			'REST APIs',
			'GraphQL',
		],
	},
];
