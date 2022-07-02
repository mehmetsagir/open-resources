import StyledThemeProvider from 'src/styles/ThemeProvider';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <StyledThemeProvider>
    <Container>{children}</Container>
  </StyledThemeProvider>
);

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 0;

  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 32px 16px;
  }
`;

export default Layout;
