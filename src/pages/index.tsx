import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Count from '../components/Count';
import RepoCard from '../components/RepoCard';
import useSearch from '../hooks/useSearch';

const languages = ['JavaScript', 'Rust', 'CSS', 'TypeScript', 'Python'];
const selectedLanguage =
  languages[Math.floor(Math.random() * languages.length)];

const Home: NextPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const router = useRouter();

  const { q } = router.query;

  useEffect(() => {
    if (typeof q === 'string') {
      setSearchText(q);
      return;
    }
    setSearchText(selectedLanguage);
    router.push(`/?q=${selectedLanguage.toLowerCase()}&sort=stars&order=desc`);
  }, [q]);

  useSearch({
    type: 'repositories',
    searchText: searchText || undefined,
    codeRequired: true,
    enabled: !!searchText,
    params: {
      page,
    },
    onSuccess: (data) => {
      setTotalItems(data.total_count || 0);
      setData((prevState): any => {
        const items =
          data?.items?.map((item: any) => ({
            repo: item?.name,
            link: item?.html_url,
            language: item?.language,
            description: item?.description,
            stars: item?.stargazers_count,
            forks: item?.forks_count,
          })) || [];
        return [...(prevState || []), ...items];
      });
      setIsLoading(false);
    },
  });

  useEffect(() => {
    setData([]);
  }, [q]);

  if (isLoading) null;
  return (
    <Container>
      <div className="header">
        <h1>
          Search results for <b>{searchText}</b>
        </h1>
        <Count page={page} value={totalItems} />
      </div>
      <div className="repos">
        {data?.map((item: any) => (
          <RepoCard key={item.repo} repo={item} />
        ))}
      </div>
      <div className="load-more">
        <Count page={page} value={totalItems} />
        <button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            setPage(page + 1);
          }}
        >
          Load More
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ccc;

    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      font-weight: 400;

      b {
        color: #ddd;
      }
    }

    p {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .repos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }
  .load-more {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin-top: 32px;

    p {
      font-weight: 400;
      color: #ccc;
      letter-spacing: 0.4px;
    }

    button {
      padding: 8px 24px;
      border-radius: 3px;
      color: #ccc;
      background-color: #161616;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;

export default Home;
