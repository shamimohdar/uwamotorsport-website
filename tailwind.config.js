module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('../public/assets/sponsors/2024/Sponsor Image 2.jpg')",
        'bannerImg2': "url('../public/assets/sponsors/2024/Sponsor Image 3.jpg')",
        'bannerImg3': "url('../public/assets/sponsors/2024/Sponsor Image 4.jpg')",
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
