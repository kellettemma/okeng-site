import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductPage = ({data}) => (
  <Layout>
    <SEO title="Products" />
<h2>Products</h2>
    <div className="container products">
      {data.allStrapiArticle.edges.map(document => (
        <div className="product" key={document.node.id}>
          <Img fixed={document.node.Image.childImageSharp.fixed} />
          <p><strong>{document.node.Title}</strong></p>
          <ReactMarkdown source={document.node.Content}
          transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}/>
        </div>
      ))}
      </div>
  </Layout>
)

export default ProductPage

export const pageQuery = graphql`
  query ProductQuery {
    allStrapiArticle {
        edges {
          node {
            id
            Title
            Content
            Image {
              childImageSharp {
                fixed(width: 300, height: 220) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
    }
  }`