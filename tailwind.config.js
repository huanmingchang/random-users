module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    gridTemplateColumns: {
      'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
    },
    gridTemplateRows: {
      'auto-fit': 'repeat(auto-fit, minmax(250px, 350px))',
    },
    plugins: [],
  },
}
