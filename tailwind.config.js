/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0B0B0B',
          secondary: '#171717',
          card: '#151515',
          elevated: '#1E1E1E',
          glass: 'rgba(18, 18, 18, 0.75)',
        },
        gold: {
          light: '#E5C992',
          DEFAULT: '#C9A46A',
          dark: '#A58046',
          muted: '#8F713B',
          glow: 'rgba(201, 164, 106, 0.2)',
        },
        primary: {
          text: '#FFFFFF',
        },
        secondary: {
          text: '#B5B5B5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.2em',
        widest: '0.15em',
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(201, 164, 106, 0.15)',
        'gold-glow': '0 0 30px rgba(201, 164, 106, 0.22)',
        'gold-glow-lg': '0 0 50px rgba(201, 164, 106, 0.35)',
        'dark-deep': '0 25px 50px -12px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3DFB0 0%, #C9A46A 50%, #9F7B3E 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(201,164,106,0.15) 0%, rgba(201,164,106,0.03) 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 50%, #171717 0%, #0B0B0B 100%)',
      }
    },
  },
  plugins: [],
}
