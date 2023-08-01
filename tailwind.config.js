module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('../public/assets/sponsors/parallax1.jpg')",
        'bannerImg2': "url('../public/assets/sponsors/parallax2.jpg')",
        'bannerImg3': "url('../public/assets/sponsors/parallax3.jpg')",
      },
      colors: {
        'motorsports-yellow': '#FFD600',
        'timeline-yellow': '#FFCC02',
        'motorsports-blue': '#01002B',
      }
    },
  },
  plugins: [],
};
