const brooklynBridgeTrackingId = 'UA-39887590-12';

module.exports = {
  siteMetadata: {
    title: 'Brooklyn Bridge Bike Rent',
    description: 'Brooklyn Bridge Bike Rent',
    author: 'tabillamar@gmail.com',
    siteUrl: 'https://brooklynbridgebikerent.com/',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // brooklyn bridge
        trackingId: brooklynBridgeTrackingId,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://brooklynbridgebikerent.com/',
        sitemap: 'https://brooklynbridgebikerent.com/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            disallow: ['/checkout/*'],
          },
          {
            userAgent: '*',
            disallow: ['/404'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/checkout/*',
          '/404',
        ],
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        entitiesArray: [
          {
            url: 'https://nvp.bikerent.nyc/api/home',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'HomeContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/bikes',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'BikeSliderContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/accessories',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'AccessoriesSliderContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/bike-rental',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'BikeRentalContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/guided-bike-tour',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'GuidedToursContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/special-offers',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'SpecialOffersContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/site-general-info',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'SiteGeneralInfoContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/testing-guided-bike-tour',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'GuidedToursContent2',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/about',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'AboutContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/about-faq',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'AboutFaqContent',
          },
          {
            url: 'https://nvp.bikerent.nyc/api/about-location',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            name: 'AboutLocationContent',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-responsive-iframe'],
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/App.jsx'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/starter/gatsby-icon.png',
      },
    },
  ],
};
