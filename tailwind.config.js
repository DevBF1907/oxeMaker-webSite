/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        logo: ['Londrina Solid', 'cursive'],
        display: ['Londrina Solid', 'cursive'],
      },
      colors: {
        oxe: {
          dark: '#050D34',
          primary: '#0030B5',
          blue: '#0030B5',
          accent: '#01B1FD',
          lightBlue: '#01B1FD',
          yellow: '#FCC140',
          neutral: '#1E292D',
          slate: '#1E292D',
          orange: '#FCC140',
          green: '#01B1FD',
          red: '#0030B5',
          sand: '#fef3c7',
        }
      }
    },
  },
  plugins: [],
}
