// ✅ Tailwind v4 config (with dark mode enabled)
import defaultTheme from 'tailwindcss/defaultTheme'
import { tailwindcssPlugin } from 'tailwindcss/plugin'

export default {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
