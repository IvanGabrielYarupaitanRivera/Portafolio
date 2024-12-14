import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi', 'sans-serif'],
				cabinet: ['Cabinet Grotesk', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
