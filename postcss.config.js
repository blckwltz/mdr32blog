// ATTENTION! Please note that the plugins order is important here.
module.exports = {
  plugins: [
    [
      '@csstools/postcss-global-data',
      {
        files: ['src/styles/variables.css'],
      },
    ],
    [
      'postcss-preset-env',
      {
        stage: 2,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
