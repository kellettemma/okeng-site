/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// To resolve childImageSharp issue: https://github.com/strapi/gatsby-source-strapi/issues/98
exports.createResolvers = ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  }) => {
    const { createNode } = actions
    createResolvers({
      StrapiInnovationLabArticlesSectionsImage: {
        image: {
          type: `File`,
          resolve(source, args, context, info) {
            return createRemoteFileNode({
              url: `http://localhost:1337${source.url}`, // `${source.url}` for S3 upload. For local: `http://localhost:1337${source.url}`,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          },
        },
      },
    })
  }
  