import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5E52',
          dark: '#0f3d35',
          light: '#247d6a',
          muted: '#e8f4f1',
        },
        accent: {
          DEFAULT: '#D4860A',
          dark: '#b06e06',
          light: '#f5c842',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f0f2f0',
          200: '#e0e4e0',
          300: '#c0c8c0',
          400: '#8a9a8a',
          500: '#6a7a6a',
          600: '#4a5a4a',
          700: '#3a4a3a',
          800: '#2a3a2a',
          900: '#1a2a1a',
        },
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}

export default config
