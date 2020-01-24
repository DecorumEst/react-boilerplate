module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: false
        }
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = ['react-hot-loader/babel'];

  return {
    presets,
    plugins
  };
}
