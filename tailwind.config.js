/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        martini: {
          'blue-deep': '#1a2b45',
          'blue-card': '#1e3252',
          'red-main': '#dc2626',
        }
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'], 
        'body': ['Inter', 'sans-serif'], 
      },
      // ADICIONE ESTAS LINHAS ABAIXO:
      animation: {
        'subtle-zoom': 'subtleZoom 20s infinite alternate',
      },
      keyframes: {
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
    },
  },
  plugins: [],
}