import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'rgb(18, 18, 18)',
    fontFamily:
      'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    color: '#ccc',
  },
  button: {
    border: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  ul: {
    listStyle: 'none',
  },
}));

export default GlobalStyle;
