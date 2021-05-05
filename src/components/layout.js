import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

const LayoutStyles = styled.div`
  main {
    padding: 0;

    @media (min-width: 400px) {
      padding: var(--vertical-page-margins) 5vw;
    }

    @media (min-width: 1040px) {
      padding-left: calc(var(--sidebar-width) + 6rem);
    }
  }

  section {
    padding: 3rem 5vw;
    box-shadow: var(--elevation-2);
    background: var(--white);

    @media (min-width: 400px) {
      padding: 3rem;
    }
  }
`;

const Layout = ({ children }) => (
  <LayoutStyles>
    <GlobalStyles />
    <Header />
    <main>
      <section>{children}</section>
    </main>
  </LayoutStyles>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
