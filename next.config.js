const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    /* Agrega todo lo que contenga un archivo
     a todos los archivos de sass, en este caso
     main.sass tiene las variables y otros imports
     que nos van a ser de utilidad en muchos archivos: */
    prependData: `@import "main.sass"`,
  },
};

module.exports = nextConfig
