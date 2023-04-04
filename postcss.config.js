// module.exports = cfg => {
//     const
//     dev = cfg.env === 'development',
//     scss = cfg.file.extname === '.scss';
//     return {

//         map: dev ? { inline: false } : false,
//         parser:  scss ? 'postcss-scss' : false,
//         plugins: [
//           require('postcss-advanced-variables')(),
//           require('postcss-nested')(),
//           require('autoprefixer')()
//         ]

//       };
// }
module.exports = {
  plugins: {
    // parser: 'postcss-scss',
    'postcss-import': {},
    // 'tailwindcss/nesting': 'postcss-nesting',
    // tailwindcss: {},
    // autoprefixer: {},
    tailwindcss: {},
    'tailwindcss/nesting': {},
    // 'tailwindcss-flip': {},
    autoprefixer: {},
    // 'postcss-easy-import': { prefix: '_', extensions: ['.css', '.scss'] },
  },
};
