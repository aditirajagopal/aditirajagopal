module.exports = {
  siteMetadata: {
    title: `revamped, redesigned`,
    description: `Website/Portfolio/Blog`,
    author: `@aditirajagopal`,
    summary: `Michigan made, Charlottesville based, Aditi Rajagopal is a technologist, aspiring artist,
    SWE advocate, and rising policy wonk. She is a student at University of Virginia where she
    is pursuing her MBA and Masters in Data Science.`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [{
                resolve: `gatsby-remark-autolink-headers`,
                options: {
                  className: `anchorClass`,
                  elements: [`h1`, `h2`, `h3`],
                }
              }]
            },            
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aditi-rajagopal-website`,
        short_name: `ARwebsite`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
