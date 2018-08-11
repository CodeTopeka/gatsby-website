module.exports = {
  siteMetadata: {
    title: `Holm School`,
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `lqmdv1zoyyfy`,
    //     accessToken: `d19ce56754cbec57c57361d7a221fc916c44f9b53447477a1e059f2aef737ae5`,
    //   },
    // },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}