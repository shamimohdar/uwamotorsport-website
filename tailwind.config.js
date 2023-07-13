module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('../public/assets/sponsorsBanner.jpg')",
        'bannerImg2': "url('../public/assets/banner2.jpg')",
        'bannerImg3': "url('../public/assets/bannerImg2.jpg')",
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
