const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
  images: {
    /* A las imágenes que carguemos en nuestro proyecto
    que provengan de un hostname diferente deben tener una
    configuración previa para poder usarlas con el componente next/image: */
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https',
      },
    ]
  }
};

module.exports = withBundleAnalyzer(nextConfig)
