import React from 'react';
import { Link } from 'gatsby';

// type can be "primary" or "secondary"
function Button({ type, isLink, href, isExternal, children }) {
  const classes = `btn btn--${type}`;
  if (isLink) {
    if (isExternal) {
      return (
        <a href={href} className={classes} target="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}

export default Button;
