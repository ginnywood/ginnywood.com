module.exports = {
  siteMetadata: {
    title: 'Ross Moody',
    description:
      'Product designer by trade, front of the front-end engineer at heart.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-156181386-1',
        head: true
      }
    }
  ]
}
