import styled from 'styled-components';

import SearchSvg from '/public/svg/search.svg';

const Header = () => {
  return (
    <Container>
      <h3>RepoHunter</h3>
      <button>
        <SearchSvg />
      </button>
    </Container>
  );
};

const Container = styled.header`
  padding: 20px 0;
  display: flex;
  align-content: center;
  justify-content: space-between;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #ccc;
    margin-bottom: 20px;
  }

  button {
    width: 38px;
    height: 38px;
    background-color: #161616;

    border-radius: 4px;
    cursor: pointer;

    svg {
      width: 14px;
      fill: #ccc;
    }
  }
`;

export default Header;
