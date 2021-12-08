module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')],
  theme: {
    screens: {
      sm: '600px', // Small to medium tablet
      md: '960px', // Large tablet to laptop
      lg: '1264px', // Desktop
      xl: '1904px' // 4k and ultra-wide
    },
    fontFamily: {
      sans: ['Roboto']
    }
  }
}
