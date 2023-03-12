/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  await graphql(`
     {
      allWpProject {
        nodes {
          uri
          title
          slug
          content
        }
      }
     }
   `).then(result => {
    result.data.allWpProject.nodes.forEach(node => {
     
      createPage({
        path: `${node.uri}`,
        component: path.resolve(`./src/templates/project.tsx`),
        context: {
          // This is the $slug variable passed to blog-post.js
          slug: node.slug,
        },
      });
    });
  });
}