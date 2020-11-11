require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          `http://memesat.work/przyklad1-cms/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        includedRoutes: [
          `**/pages`
        ]
        // type: {
        //   Post: {
        //     limit:
        //       process.env.NODE_ENV === `development`
        //         ? // Lets just pull 50 posts in development to make it easy on ourselves.
        //           50
        //         : // and we don't actually need more than 5000 in production for this particular site
        //           5000,
        //   },
        // },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
    {
      resolve: "gatsby-plugin-web-font-loader",

      options: {
        custom: {
          families: ["LilyScriptOne, Montserrat, MontserratBold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-anchor-links`
  ],
}
