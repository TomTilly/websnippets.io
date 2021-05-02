import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import Logo from '../assets/images/logo.inline.svg';
import LinkedInLogo from '../assets/images/linkedin.inline.svg';
import TwitterLogo from '../assets/images/twitter.inline.svg';
import githubLogo from '../assets/images/github-logo.png';
import Nav from './Nav';
import ExternalLink from './ExternalLink';

const HeaderStyles = styled.header`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 2.5rem;
  box-shadow: var(--elevation-1);

  @media (min-width: 1040px) {
    width: 300px;
    min-height: 100vh;
    padding: var(--vertical-page-margins) 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .home-link {
    line-height: 1;
  }

  .logo {
    max-width: 100%;
    width: 250px;
    display: block;
  }

  .tagline {
    @media (max-width: 1039px) {
      display: none;
    }
  }

  .github-link {
    text-align: center;
    display: inline-block;
  }

  .github-logo {
    display: block;
    margin: 0 auto;
    width: 3.2rem;
    &:hover {
      opacity: 0.8;
    }
  }

  .menu {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 100%;
    transition: transform 0.2s ease-in-out;
    background: var(--white);
    z-index: 10;
    border-top: 1px solid var(--grey-300);
    padding: 1rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.open {
      transform: translateX(-100%);
    }
  }
`;

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderStyles>
      <Link
        onClick={(e) => setOpen(false)}
        to="/"
        className="home-link"
        aria-label="Link to home page"
      >
        <Logo className="logo" />
      </Link>
      <p className="tagline small">
        Minimal, clean code snippets ready to plug into your projects.
      </p>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ExternalLink
          to="https://github.com/TomTilly/websnippets.io"
          className="github-link"
        >
          <img
            src={githubLogo}
            className="github-logo"
            alt="Octocat Github Logo"
          />
        </ExternalLink>
        <Nav setOpen={setOpen} />
        <p className="small">
          Submit improvements or bug fixes over on{' '}
          <ExternalLink to="https://github.com/TomTilly/websnippets.io">
            Github
          </ExternalLink>
          !
        </p>
        <hr />
        <p className="small">
          Built by <a href="https://tomtillistrand.com">Tom Tillistrand</a>
        </p>
        <hr />
        <div>
          <div className="social-icons">
            <ExternalLink to="https://www.linkedin.com/in/tomtillistrand/">
              <LinkedInLogo />
            </ExternalLink>
            <ExternalLink to="https://twitter.com/tomtillistrand">
              <TwitterLogo />
            </ExternalLink>
          </div>
          <p className="small">Find me on social media!</p>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
