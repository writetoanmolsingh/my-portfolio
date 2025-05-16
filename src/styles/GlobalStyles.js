import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw; /* Ensure full width */
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    transition: ${props => props.theme.transition};
    margin: 0;
    padding: 0;
  }
  
  #root {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.main};
  }
  
  section {
    padding: 100px 0;
    width: 100%;
  }
  
  section:first-of-type {
    margin-top: 0;
    padding-top: 80px; /* Adjust based on your header height */
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 36px;
    margin-bottom: 50px;
    text-align: center;
    color: ${props => props.theme.colors.dark};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 4px;
      background-color: ${props => props.theme.colors.primary};
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  /* Fix for mobile devices */
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles; 