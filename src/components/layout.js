/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <ul>
          <li> &copy; {new Date().getFullYear()} OK Engineering (CMX) Limited, Castleblayney rd,
            Carrickmacross
          </li>
          <li> Email:
            <a href="mailto:okengineeringcmx@gmail.com">okengineeringcmx@gmail.com </a>
          </li>
          <li> Phone: <a href="tel:(042) 9662516">(042) 9662516</a></li>
        </ul>
</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
