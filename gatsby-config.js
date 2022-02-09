module.exports = {
  siteMetadata: {
    title: <pre>  Ruoxi Shang</pre>,
    description: <pre>  HCI Researcher</pre>,
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
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/avatar.jpg', // This path is relative to the root of the site.
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
