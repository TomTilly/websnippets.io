import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.inline.svg';
import LinkedInLogo from '../assets/images/linkedin.inline.svg';
import TwitterLogo from '../assets/images/twitter.inline.svg';
import githubLogo from '../assets/images/github-logo.png';
import Nav from './Nav';
import ExternalLink from './ExternalLink';

const HeaderStyles = styled.header`
  background-color: var(--white);
  width: 300px;
  min-height: 100vh;
  padding: var(--vertical-page-margins) 3rem;
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
      <ExternalLink
        to="https://github.com/TomTilly/websnippets.io"
        className="github-logo"
      >
        <img
          src={githubLogo}
          className="github-logo"
          alt="Octocat Github Logo"
        />
      </ExternalLink>
      <Nav />
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
    </HeaderStyles>
  );
}

export default Header;
