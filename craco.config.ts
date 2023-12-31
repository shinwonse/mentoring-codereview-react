module.exports = {
  plugins: [
    {
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.json',
      },
      plugin: require('craco-alias'),
    },
  ],
};

export {};
