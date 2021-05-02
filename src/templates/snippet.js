import React from 'react';
import { graphql } from 'gatsby';
import snippets from '../snippets/snippet-list';
import Button from '../components/Button';

function Snippet({ data }) {
  const { html, css, js } = data.directory.fields;
  const snippet = snippets.find((item) => item.id === data.directory.base);
  if (!snippet) {
    return null;
  }
  const { name, description } = snippet;

  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <Button
        type="primary"
        href="https://github.com/TomTilly/websnippets.io"
        isExternal
        isLink
      >
        View on Github
      </Button>
      <h2>Preview</h2>
      <snippet.Component />
      <h2>Usage</h2>
      <p>{html}</p>
      <p>{css}</p>
      <p>{js}</p>
    </>
  );
}

export default Snippet;

export const query = graphql`
  query($slug: String!) {
    directory(fields: { slug: { eq: $slug } }) {
      fields {
        html
        css
        js
      }
      base
    }
  }
`;
