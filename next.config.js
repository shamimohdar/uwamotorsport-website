const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/',
            outputPath: 'static/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
