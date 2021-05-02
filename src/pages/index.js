import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import InlineCode from '../components/InlineCode';

const IndexPage = () => (
  <>
    <h1>About</h1>
    <p>
      websnippets.io is a free, open source, and minimalist component library
      for website UI elements. Each component is built upon the foundations of
      accessibility, simplicity, and best practices. They are available in
      vanilla form (raw HTML, CSS, and JavaScript) and as React components. Use
      them as is or as a base for your own components.
    </p>
    <h2>Getting Started</h2>
    <p>
      There are a few ways to use a component. The easiest is to just copy and
      paste the HTML, CSS, and JavaScript straight into your projects.
      Alternatively, you can run
      <InlineCode>npm install websnippets-standard</InlineCode> in your project
      directory and link to the appropriate CSS and JS files in your HTML.
    </p>

    <p>
      If you’re working in React, run{' '}
      <InlineCode>npm install websnippets-react</InlineCode> and import
      whichever components you need. Enjoy!
    </p>
    <h2>Background</h2>
    <p>
      This site was built to share my personal component library with other web
      developers. The code is open source, which I hope leads to other
      developers submitting improvements which we can all learn and benefit
      from. I also hope these components serve as consistent, well-formed code
      references for newer web developers. Many components have companion "How
      To" articles on my website.
    </p>
    <h2>Contributing</h2>
    <p>
      Find a bug? See an improvement? Have suggestions for other components?
      Start an issue or send a pull request on{' '}
      <a
        href="https://github.com/TomTilly/websnippets.io/issues"
        rel="noopener noreferrer"
        target="_blank"
      >
        Github
      </a>
      !
    </p>
  </>
);

export default IndexPage;
