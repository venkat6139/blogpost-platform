import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       background-color: #f4f4f9;
       color: #333;
   }

   a {
       text-decoration: none;
       color: #3498db;
   }

   a:hover {
       text-decoration: underline;
   }

   button {
       cursor: pointer;
       background-color: #3498db;
       color: white;
       border: none;
       padding: 0.5em 1em;
       border-radius: 4px;
   }

   button:hover {
       background-color: #2980b9;
   }
`;

export default GlobalStyle;
