module.exports = {
  siteMetadata: {
    title: 'Ruoxi Shang',
    description: 'HCI Researcher',
    site: '@rxshang',
    image: 'https://shamann.dev/rxshang.jpg',
    navLinks: [
      { name: 'About Me', path: '/' },
      { name: 'Projects', path: '/projects/' },
      { name: 'Publications', path: '/publications/' },
      //{ name: 'Fun', path: '/fun/' },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ruoxi Shang',
        short_name: 'rxshang',
        start_url: '/',
        background_color: '#6667AB',
        theme_color: '#6667AB',
        display: 'minimal-ui',
        icon: 'src/images/avatar.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          // families: ['Roboto+Mono:300,700', 'Roboto:400,700&display=swap'],
          families: ['Ubuntu Serif', 'Ubuntu Sans'],
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-remove-serviceworker',
  ],
};
