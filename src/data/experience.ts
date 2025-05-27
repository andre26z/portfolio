export interface Achievement {
	text: string;
}

export interface Skill {
	name: string;
}

export interface Experience {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	isRemote?: boolean;
	achievements: Achievement[];
	skills: Skill[];
}

export const experiences: Experience[] = [
	{
		title: 'Frontend Developer',
		company: 'Cometa Gaming',
		location: 'Remote',
		startDate: 'Nov 2023',
		endDate: 'Present',
		isRemote: true,
		achievements: [
			{
				text: 'Optimized initial load time by 50% through code splitting, lazy loading, and build improvements.',
			},
			{
				text: 'Designed and implemented critical UI components for Providers & Categories pages, enhancing UX and functionality.',
			},
			{
				text: 'Integrated 3rd-party KYC and FACEINDEX systems into the application, improving verification workflow.',
			},
			{
				text: 'Collaborated with backend and product teams to roll out secure and scalable features for iGaming users.',
			},
		],
		skills: [
			{ name: 'Vue.js' },
			{ name: 'Nuxt' },
			{ name: 'React' },
			{ name: 'Tailwind CSS' },
			{ name: 'AWS' },
			{ name: 'Pinia' },
			{ name: 'Next.js' },
		],
	},
	{
		title: 'Full-stack Developer',
		company: 'Fortics',
		location: 'Remote',
		startDate: 'Aug 2022',
		endDate: 'Nov 2023',
		isRemote: true,
		achievements: [
			{
				text: 'Developed new features and maintained legacy code using Vue.js, Laravel, and Golang.',
			},
			{
				text: 'Reduced Redis-related server costs by 50% through efficient agent chat architecture redesign.',
			},
			{
				text: 'Consolidated APIs from multiple social platforms into a unified omnichannel communication hub.',
			},
			{
				text: 'Wrote automated tests to ensure application reliability and secure data handling.',
			},
		],
		skills: [
			{ name: 'Vue.js' },
			{ name: 'Nuxt' },
			{ name: 'Laravel' },
			{ name: 'Golang' },
			{ name: 'React' },
			{ name: 'GraphQL' },
			{ name: 'MongoDB' },
			{ name: 'Docker' },
			{ name: 'TypeScript' },
		],
	},
	{
		title: 'Frontend Developer',
		company: 'K13 Web Agency',
		location: 'Guarapuava, Brazil',
		startDate: 'Jul 2021',
		endDate: 'Jul 2022',
		achievements: [
			{
				text: 'Rebuilt the company-wide frontend stack from HTML/CSS to Vue.js & Nuxt, improving maintainability.',
			},
			{
				text: 'Delivered 20+ pixel-perfect, fully responsive websites using Figma designs.',
			},
			{
				text: 'Improved UX by implementing best-in-class performance and mobile-first practices.',
			},
		],
		skills: [
			{ name: 'Vue.js' },
			{ name: 'React' },
			{ name: 'HTML5' },
			{ name: 'SASS' },
			{ name: 'Vuetify' },
			{ name: 'Tailwind CSS' },
			{ name: 'Docker' },
			{ name: 'Git' },
		],
	},
	{
		title: 'Frontend Developer',
		company: 'Fallout Miami Dev Team',
		location: 'Remote',
		startDate: 'Aug 2019',
		endDate: 'Jul 2021',
		isRemote: true,
		achievements: [
			{
				text: 'Designed a web platform and custom forum for the Fallout Miami mod, increasing community engagement.',
			},
			{
				text: 'Built feature-rich systems including login/registration, mod updates, and discussion boards.',
			},
			{
				text: 'Collaborated with international teams using Agile methodology and Git-based workflows.',
			},
		],
		skills: [
			{ name: 'Vue.js' },
			{ name: 'Quasar' },
			{ name: 'PHP' },
			{ name: 'Laravel' },
			{ name: 'MongoDB' },
			{ name: 'Tailwind CSS' },
			{ name: 'Docker' },
		],
	},
];
