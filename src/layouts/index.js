import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
                {
          name: `keywords`,
          content: data.site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: data.site.siteMetadata.title,
        },
        {
          property: `og:url`,
          content: `https://www.aaronbutlerdesign.co.uk/`,
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: data.site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description,
        },
      ]}
    />
    <Header />
    {children()}
    <Footer data={data}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
    </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
      }
    }
    allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }
`
