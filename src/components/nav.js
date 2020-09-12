import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
 <nav>
     <ul>
     <li><Link to="/" activeClassName="active">Home</Link></li>
     <li><Link to="/products" activeClassName="active">Products</Link></li>
     <li><Link to="/contact"activeClassName="active">Contact</Link></li>
     </ul>
 </nav>
)



export default Nav