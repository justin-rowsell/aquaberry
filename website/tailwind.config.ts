import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'], // Add this line
      },
      backgroundImage: {
        'jaguar-bg': "url('https://images.unsplash.com/photo-1486173789830-3a5236a03ab1')"
      }
    },
  },
	daisyui: {
    themes: [ 'autumn' ],
  },

	plugins: [ daisyui]
} satisfies Config;
