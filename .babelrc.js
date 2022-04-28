const path = require('path');

module.exports = {
   presets: [],
   plugins: [
      [
         'module-resolver',
         {
            root: ['.'],
            extensions: ['.css', '.js', '.json'],
            alias: {
               'components': path.resolve(__dirname, './src/components'),
               'assets': path.resolve(__dirname, './src/assets'),
               'styles': path.resolve(__dirname, './src/styles'),
               'css': path.resolve(__dirname, './src/assets/css'),
               'tracks': path.resolve(__dirname, './public/tracks'),
               'tracks-img': path.resolve(__dirname, './public/tracks_images'),
            },
         },
      ]
   ]
};