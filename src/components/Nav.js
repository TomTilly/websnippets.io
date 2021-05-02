import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { capitalize } from '../utils/util';

const NavStyles = styled.nav`
  width: 100%;
  margin-bottom: 3rem;
  .header {
    text-transform: uppercase;
    font-size: 1.6rem;
    color: var(--grey);
    margin-bottom: 0.5rem;
  }
  ul {
    margin: 0;
    padding: 0 0 0 1rem;
    list-style: none;
  }
  a {
    color: var(--black);
    &:hover,
    &:focus {
      color: var(--primary-200);
      text-decoration: none;
    }
    &[aria-current] {
      color: var(--primary-400);
      font-weight: 600;
    }
  }
`;

function Nav() {
  const data = useStaticQuery(graphql`
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

  return (
    <NavStyles>
      <h2 className="header">Components</h2>
      <ul>
        {data.allDirectory.nodes.map((node) => (
          <li key={node.base}>
            <Link to={node.fields.slug}>{capitalize(node.base)}</Link>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
}

export default Nav;
