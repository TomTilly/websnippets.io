import React from 'react';

function ExternalLink({ children, to, className }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
