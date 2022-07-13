import { useEffect, useState } from 'react';
import styled from 'styled-components';

import SearchSvg from '/public/svg/search.svg';

import Modal from './Modal';
import SearchModalContent from './SearchModalContent';
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (
        (e.metaKey || e.altKey) &&
        e.key === 'k' &&
        e.defaultPrevented === false
      ) {
        setShowModal(true);
      }
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    });
  }, []);

  return (
    <Container>
      <h1>RepoHunter</h1>
      <button onClick={() => setShowModal(true)}>
        <SearchSvg />
      </button>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <SearchModalContent onClose={() => setShowModal(false)} />
      </Modal>
    </Container>
  );
};

const Container = styled.header`
  padding: 20px 0;
  display: flex;
  align-content: center;
  justify-content: space-between;

  h1 {
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
