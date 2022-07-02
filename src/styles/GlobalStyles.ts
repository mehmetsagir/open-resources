import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: theme.colors.bg,
    fontFamily: theme.fontFamily,
    color: theme.colors.text,
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
