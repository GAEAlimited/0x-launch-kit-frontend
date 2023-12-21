// browserify.config.js
module.exports = {
  entries: ['src/index.js'], // Adjust this based on your project structure
  debug: true, // Enable source maps for debugging
  transform: [['babelify', { presets: ['@babel/preset-env', '@babel/preset-react'] }]],
};
