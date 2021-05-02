import React from 'react';
import styled from 'styled-components';

const InlineCodeStyles = styled.code`
  background: var(--secondary-200);
  color: var(--primary-300);
  padding: 0.25em;
`;

function InlineCode({ children }) {
  return <InlineCodeStyles>{children}</InlineCodeStyles>;
}

export default InlineCode;
