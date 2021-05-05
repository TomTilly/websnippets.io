import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
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
    width: var(--sidebar-width);
    height: 100vh;
    overflow: auto;
    flex-shrink: 0;
    padding: var(--vertical-page-margins) 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
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

  .hamburger {
    @media (max-width: 1039px) {
      display: none;
    }
  }

  .github-link {
    align-self: center;
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
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin-top: 68px; /* height of navbar */
    transition: transform 0.2s ease-in-out;
    transform: translateX(100%);
    background: var(--white);
    z-index: 10;
    border-top: 1px solid var(--grey-300);
    padding: 1rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    @media (min-width: 1040px) {
      position: static;
      margin: 0;
      transform: none;
      transition: none;
      border-top: none;
      align-items: flex-start;
      padding: 0;
      overflow: unset;

      hr {
        margin-left: 0;
      }
    }

    &.open {
      transform: translateX(0);
    }
  }

  .footer-note {
    margin: 0.5rem 0;
  }

  .social-link {
    margin: 0 0.25em;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    svg {
      width: 1.2em;
      height: 1.2em;
      vertical-align: text-top;
    }
  }
`;

function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // Hide scrollbars on document when navigation menu is showing on mobile
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

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
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        style={{ background: 'red' }}
      />
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
        <p className="small footer-note">
          Submit improvements or bug fixes over on{' '}
          <ExternalLink to="https://github.com/TomTilly/websnippets.io">
            Github
          </ExternalLink>
          !
        </p>
        <hr />
        <p className="small footer-note">
          Built by <a href="https://tomtillistrand.com">Tom Tillistrand</a>
        </p>
        <hr />
        <p className="small footer-note">
          Find me on social media!{' '}
          <ExternalLink
            to="https://www.linkedin.com/in/tomtillistrand/"
            className="social-link"
          >
            <LinkedInLogo className="linkedin-logo" />
          </ExternalLink>
          <ExternalLink
            to="https://twitter.com/tomtillistrand"
            className="social-link"
          >
            <TwitterLogo className="twitter-logo" />
          </ExternalLink>
        </p>
      </div>
    </HeaderStyles>
  );
}

export default Header;
