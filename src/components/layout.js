import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

const LayoutStyles = styled.div`
  @media (min-width: 1040px) {
    display: flex;
  }
  main {
    background: var(--white);
    margin: var(--vertical-page-margins) 6rem;
    box-shadow: var(--elevation-2);
    padding: 3rem;

    @media (min-width: 1040px) {
      max-width: 900px;
    }
  }
`;

const Layout = ({ children }) => (
  <LayoutStyles>
    <GlobalStyles />
    <Header />
    <main>{children}</main>
  </LayoutStyles>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
