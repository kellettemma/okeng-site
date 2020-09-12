import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
   <div className="masthead">
      <h2> Manufacturer of machines parts, press tools, jigs and precision engineering</h2>
      <Link to="/contact/" className="btn btn-primary">Contact Us</Link>
    </div>
    <div className="container">
    <h3>About</h3>
      <p>OK Engineering was founded in 1991 by Olly Kellett. We are a precision engineering
        company specialising in all types of machine parts including CNC turning, Centre lathe turning,
        and CNC milling. We can manufacture large volume parts or one off parts in mild stainless steel,
         brass, aluminum and brass.</p>

      <p> We also manufacture Press tools, Extrusion dies, heat treated and tempered cutting 
           blades for woodwork, steel work or plastics. </p>

           <p>We specialise in catering for the food industry with all stainless steel components such as 
             turned and machine parts, shafts, pins, busges and couplings, hex, bolts and special screws.</p>
      <h3>Customers</h3>
      <ul className='customers'>
      {data.allStrapiClient.edges.map(client => (
          <li key={client.node.id}>     
          {client.node.image.map(image => (
           <img src={`http://localhost:1337${image.url}`}/>
           ))}
          </li>
      ))}
        </ul> 
      </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiClient {
      edges {
        node {
          id
          title
          image {
            id
            url
            name
          }
        }
      }
    }
  }`