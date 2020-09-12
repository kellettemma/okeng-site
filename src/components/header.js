import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header>
      <h1 className="logo">
      <Link to="/">
          <span className="element--hidden">{siteTitle}</span>
      </Link>
      </h1>
      <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
