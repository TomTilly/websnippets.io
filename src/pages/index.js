import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </>
);

export default IndexPage;
