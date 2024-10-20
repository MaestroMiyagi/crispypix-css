module.exports = {
  plugins: [
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' && require('cssnano')
  ].filter(Boolean)
};

export default config;
