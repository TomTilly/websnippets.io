import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.inline.svg';
import githubLogo from '../assets/images/github-logo.png';
import Nav from './Nav';

const HeaderStyles = styled.header`
  background-color: var(--white);
  width: 300px;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .home-link {
    display: flex;
  }
  .logo {
    max-width: 100%;
  }
  .github-link {
    display: flex;
  }
  .github-logo {
    width: 3.2rem;
    &:hover {
      opacity: 0.8;
    }
  }
`;

function Header() {
  return (
    <HeaderStyles>
      <Link to="/" className="home-link" aria-label="Link to home page">
        <Logo className="logo" />
      </Link>
      <p className="small">
        Minimal, clean code snippets ready to plug into your projects.
      </p>
      <Link
        to="https://github.com/TomTilly/websnippets.io"
        aria-label="Link to Github repo"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img
          src={githubLogo}
          className="github-logo"
          alt="Octocat Github Logo"
        />
      </Link>
      <Nav />
    </HeaderStyles>
  );
}

export default Header;
