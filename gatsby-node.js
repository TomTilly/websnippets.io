const path = require('path');
const { readFileSync, existsSync } = require('fs');

const { createFilePath } = require(`gatsby-source-filesystem`);

// Creates a field on a given node with the value set to a file's contents
function createTextFieldFromFile(pathToFile, name, node, createNodeFieldFn) {
  if (existsSync(pathToFile)) {
    console.log(`${pathToFile} - path exists`);
    const value = readFileSync(path.resolve(pathToFile), 'utf8');
    return createNodeFieldFn({
      node,
      name,
      value,
    });
  }
  console.log(`${pathToFile} - path doesn't exist`);
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Directory`) {
    // We only want to add slugs for each top level snippet directory
    // Examples: src/snippets/card or src/snippets/navbar
    const isSnippetDir =
      node.relativePath && node.relativePath.split('/').length === 1;
    if (isSnippetDir) {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      const paths = {
        html: `./src/snippets/${node.base}/standard/${node.base}.html`,
        css: `./src/snippets/${node.base}/standard/${node.base}.css`,
        js: `./src/snippets/${node.base}/standard/${node.base}.js`,
      };

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });

      for (const [key, value] of Object.entries(paths)) {
        createTextFieldFromFile(value, key, node, createNodeField);
      }
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // This query selects only the top level directories within src/snippet
  const result = await graphql(`
    query {
      allDirectory(filter: { relativeDirectory: { eq: "" } }) {
        nodes {
          fields {
            slug
          }
          base
        }
      }
    }
  `);

  result.data.allDirectory.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/snippet.js`),
      context: {
        slug: node.fields.slug,
      },
    });
    console.log('created page');
  });
};
