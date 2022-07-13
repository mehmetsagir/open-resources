import { ReactNode } from 'react';

import GlobalStyle from './GlobalStyles';

type Props = {
  children: ReactNode;
};

const StyledThemeProvider: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default StyledThemeProvider;
