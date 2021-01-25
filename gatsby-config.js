module.exports = {
  siteMetadata: {
    title: `Inmobiliaria Barreras`,
    description: `INMOBILIARIA BARRERAS nace en pintoresco pueblo de pescadores de nombre Los Abrigos ubicado en la parte sur de la isla de Tenerife en el año 1995.`,
    author: `Jorge Daniel Sosa <jdsosa@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,400,400i,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          // apiKey: "<YOUR_FIREBASE_API_KEY>",
          // authDomain: "<YOUR_FIREBASE_AUTH_DOMAIN>",
          // databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "barrerastenerife", // <YOUR_FIREBASE_PROJECT_ID>
          // storageBucket: "<YOUR_FIREBASE_STORAGE_BUCKET>",
          // messagingSenderId: "<YOUR_FIREBASE_MESSAGING_SENDER_ID>",
          // appId: "<YOUR_FIREBASE_APP_ID>",
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
