module.exports = {
   siteMetadata: {
      title: `Gatsby Default Starter`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`
   },
   plugins: [
      {
         resolve: `gatsby-source-contentful`,
         options: {
            spaceId: `huyfk325as1q`,
            accessToken: `c275c159e7bacc0e8a06c132ca4e3532ce2f4cd174c9f3979c7dceab4b238d7f`,
            downloadLocal: true
         }
      },
      `gatsby-plugin-sass`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`
         }
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
            icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
         }
      }
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ]
}
