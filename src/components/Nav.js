import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { capitalize } from '../utils/util';

const NavStyles = styled.nav`
  width: 100%;
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: 1040px) {
    text-align: left;
  }

  .header {
    text-transform: uppercase;
    font-size: 1.8rem;
    color: var(--grey-400);
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    @media (min-width: 1040px) {
      font-size: 1.6rem;
    }
  }

  ul {
    margin: 0;
    padding: 0 0 0 1rem;
    list-style: none;
  }

  li {
    border-top: 1px solid var(--grey-300);

    @media (min-width: 1040px) {
      border: none;
    }
  }

  li:last-child {
    border-bottom: 1px solid var(--grey-300);

    @media (min-width: 1040px) {
      border: none;
    }
  }

  a {
    color: var(--black);
    font-size: 2rem;
    width: 100%;
    display: block;

    @media (min-width: 1040px) {
      font-size: 1.6rem;
    }

    &:hover,
    &:focus {
      color: var(--primary-200);
      text-decoration: none;
      background-color: var(--grey-200);

      @media (min-width: 1040px) {
        background-color: unset;
      }
    }

    &[aria-current] {
      color: var(--primary-400);
      font-weight: 600;
    }
  }
`;

function Nav({ setOpen }) {
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
            <Link onClick={() => setOpen(false)} to={node.fields.slug}>
              {capitalize(node.base)}
            </Link>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
}

export default Nav;
