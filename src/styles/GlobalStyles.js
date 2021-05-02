import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-400: #3917DB;
    --primary-300: #5031E8;
    --primary-200: #6448EA;
    --secondary-400: #D1D1E9;;
    --secondary-300: #E3E3F2;
    --secondary-200: #F5F5FA;
    --tertiary-400: #E45858;
    --tertiary-300: #E86E6E;
    --tertiary-200: #EB8484;
    --black: #2B2C34;
    --grey: #BFBFBF;
    --light-grey: #FBFBFB;
    --white: #FFFFFE;
    --snippet-400: #2082DD;
    --snippet-300: #4D9CE5;
    --snippet-200: #79B5EC;
    --elevation-minus-1: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
    --elevation-0: 0px 1px 3px rgba(0, 0, 0, 0.15);
    --elevation-1: 0px 2px 4px rgba(0, 0, 0, 0.1);
    --elevation-2: 0px 4px 6px rgba(0, 0, 0, 0.12);
    --elevation-3: 0px 7px 15px rgba(0, 0, 0, 0.09);
    --elevation-4: 0px 15px 25px rgba(0, 0, 0, 0.09);
    --elevation-test: 10px 10px 0 #000;
    --vertical-page-margins: 3rem;
  }

  html {
    font-size: 62.5%; // Sets 1rem = 10px if the user hasn't changed the default browser font size
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    color: var(--black);
    font-size: 1.6rem;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.75;
    background-color: var(--secondary-400);
  }

  /* Typography */
  p {
    letter-spacing: 0.5px;
    margin-top: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    line-height: 1.2;
    margin: 3rem 0 1.38rem;
    position: relative;
    z-index: 1;
  }

  /* :is(h2, h3, h4, h5, h6)::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: .4em;
    height: .4em;
    transform: translateX(-50%);
    z-index: -1;
    background-color: var(--primary-200);
  }

  :is(h2, h3, h4, h5, h6)::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: .3em;
    height: .3em;
    transform: translate(15%, -50%);
    z-index: -2;
    background-color: var(--secondary-400);
  } */

  h1, .h1 {
    font-size: 3.98rem;
    margin-top: 0;
  }

  h1 {
    display: inline-block;
  }

  h1::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 3px;
    background-color: var(--primary-200);
  }

  h2, .h2 {
    font-size: 3.31rem;
  }

  h3, .h3 {
    font-size: 2.76rem;
  }

  h4, .h4 {
    font-size: 2.3rem;
  }

  h5, .h5 {
    font-size: 1.92rem;
  }

  h6, .h6 {
    font-size: 1.6rem;
  }

  small, .small {
    font-size: 1.28rem;
  }

  a {
    color: var(--primary-400);
    text-decoration: none;
  }

  a:hover, a:focus {
    color: var(--primary-200);
    text-decoration: underline;
  }

  /* Global button styles */

  .btn {
    padding: 1.25rem 2.75rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: var(--elevation-1);
    transition: background-color .05s linear, transform .05s linear, box-shadow .05s linear;
    display: inline-block;
  }

  .btn:hover, .btn:focus {
    box-shadow: var(--elevation-2);
    transform: translateY(-1px)
  }

  .btn:active {
    box-shadow: var(--elevation-0);
    transform: translateY(0px);
  }

  .btn--primary {
    background: var(--primary-400);
    color: var(--white);
    border-color: var(--primary-400);
  }

  .btn--primary:hover, .btn--primary:focus {
    background: var(--primary-300);
    color: var(--white);
    text-decoration: none;
    border-color: var(--primary-300);
  }

  .btn--primary:active {
    background: var(--primary-200);
    border-color: var(--primary-200);
  }

  .btn--secondary {
    background: transparent;
    border-color: var(--primary-400);
    color: var(--primary-400);
  }

  .btn--secondary:hover, .btn--secondary:focus {
    background: var(--light-grey);
  }
`;

export default GlobalStyles;
