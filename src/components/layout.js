import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

const LayoutStyles = styled.div`
  display: flex;
  main {
    flex-grow: 1;
    max-width: 800px;
    background: var(--white);
    margin: var(--vertical-page-margins) 6rem;
    box-shadow: var(--elevation-2);
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
