import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { capitalize } from '../utils/util';

const NavStyles = styled.nav``;

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
