import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				darkblue: '#1E1E2A',
				whiteslate: '#dddddb',
			},
			borderRadius: {
				large: '80px',
			},
			screens: {
				'custom-lg': { max: '850px' },
				'custom-footer': { max: '950px' },
			},
			boxShadow: {},
		},
	},
	plugins: [],
}
export default config
