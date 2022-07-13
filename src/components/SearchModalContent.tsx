import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

type Props = {
  onClose: () => void;
};

const SearchModalContent: React.FC<Props> = ({ onClose }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keydown', () => {
      inputRef.current?.focus();
    });
  }, []);

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      router.push(`/?q=${e.target.value}`);
      onClose();
    }
  };

  return (
    <Container>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type to search"
          onKeyDown={handleSearch}
          ref={inputRef}
        />
        <span>ESC</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .input-box {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: rgba(204, 204, 204, 0.6);
    /* border-bottom: 1px solid rgb(44, 44, 44); */
    input {
      flex: 1;
      height: 50px;
      border: none;
      background: none;
      padding-right: 8px;
      font-size: 15 px;
      color: inherit;
    }
    span {
      padding: 4px;
      background: rgb(44, 44, 44);
      border-radius: 4px;
      font-size: 10px;
    }
  }
`;

export default SearchModalContent;
