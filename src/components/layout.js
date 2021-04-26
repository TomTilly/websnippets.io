import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

const LayoutStyles = styled.div`
  display: flex;
`;

const Layout = ({ children }) => (
  <LayoutStyles>
    <GlobalStyles />
    <Header />
    {children}
  </LayoutStyles>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
