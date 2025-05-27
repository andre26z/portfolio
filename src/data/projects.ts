import { Project } from '@/types/project';

export const projectsData: Project[] = [
	{
		id: '1',
		title: 'Network Graph Visualization Application',
		description:
			'Visualize and analyze large-scale network data with up to 100,000 node connections, each with multiple metrics. Provides an interactive graph and detailed data exploration interface.',
		image: '/projects/network-graph.png', // replace with actual image if available
		technologies: [
			'React.js',
			'JavaScript',
			'Bootstrap',
			'Front-End Design',
			'User Interface Design',
		],
		category: 'Web Development',
		links: {
			live: 'https://acuvity.vercel.app/',
		},
		featured: true,
	},
	{
		id: '2',
		title: 'Wordle - BR Version',
		description:
			'A Brazilian version of the famous Wordle game built with Vue.js and Pinia. Fully localized and optimized for performance. this project showcases my skills in Vue.js and state management with Pinia and the ability to deal with problems since I had to take all the most used words of the brazilian language to be able to create this project.',
		image: '/projects/wordle-br.png', // replace with actual image if available
		technologies: ['Vue.js', 'Pinia'],
		category: 'Games',
		links: {
			live: 'https://termofree.vercel.app/',
		},
		featured: false,
	},
	{
		id: '3',
		title: 'PokeApi',
		description:
			'A performant Pokémon search and info app built with Nuxt3, Vue.js 3, Tailwind, and Pinia. Designed with optimization and clean UI in mind, based on a Figma prototype.',
		image: '/projects/pokeapi.png', // replace with actual image if available
		technologies: [
			'Nuxt.js',
			'Vue.js 3',
			'Tailwind CSS',
			'Composition API',
			'Pinia',
			'API Development',
		],
		category: 'Web Development',
		links: {
			live: 'https://pokemon-this-is-a-challenge-by-coodesh.vercel.app/',
		},
		featured: false,
	},
	{
		id: '4',
		title: 'Roast My Steam',
		description:
			'A fun application built with Next.js, React, Tailwind, and Shadcn that roasts your Steam profile based on your game activity.',
		image: '/projects/roast-my-steam.png', // replace with actual image if available
		technologies: ['Next.js', 'React', 'Tailwind CSS', 'Shadcn'],
		category: 'Entertainment',
		links: {
			live: 'https://roastmysteam.vercel.app/',
		},
		featured: false,
	},
	{
		id: '5',
		title: 'React Timeline',
		description:
			'A fully custom timeline component with zoom, drag, resize, and info features built in React without any external libraries.',
		image: '/projects/react-timeline.png', // replace with actual image if available
		technologies: ['React.js', 'Tailwind CSS', 'CSS'],
		category: 'UI Components',
		links: {
			live: 'https://react-timeline-component-teal.vercel.app/',
		},
		featured: false,
	},
];
