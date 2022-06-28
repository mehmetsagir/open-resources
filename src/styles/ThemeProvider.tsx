import { ReactNode } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import GlobalStyle from './GlobalStyles';
import defaultTheme from './theme';

type Props = {
  children: ReactNode;
}

const StyledThemeProvider: React.FC<Props> = ({ children }) => (
  <Provider theme={defaultTheme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </Provider>
);

export default StyledThemeProvider;