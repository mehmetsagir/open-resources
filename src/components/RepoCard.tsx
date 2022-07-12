import NumberFormat from 'react-number-format';
import styled from 'styled-components';

import repoLanguageColor from '/public/assets/repo-language-color.json';
import GithubForkIcon from '/public/svg/github-fork.svg';
import GithubRepoIcon from '/public/svg/github-repo.svg';
import GithubStarIcon from '/public/svg/github-star.svg';

type Repo = {
  repo: string;
  link: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
};

type Props = {
  repo: Repo;
  maxHeight?: boolean;
};

const RepoCard: React.FC<Props> = ({ repo, maxHeight }) => (
  <Container className={maxHeight ? 'max' : ''}>
    <div className="title">
      <GithubRepoIcon />
      <a href={repo.link} target="_blank" rel="noreferrer" title={repo.repo}>
        {repo.repo}
      </a>
    </div>
    <p className="description">{repo.description}</p>
    <div className="info">
      {repo.language && (
        <div>
          <span
            className="language-color"
            style={{
              // @ts-ignore
              backgroundColor: repoLanguageColor[repo.language] || '#ccc',
            }}
          />
          <span>{repo.language}</span>
        </div>
      )}
      {repo.stars > 0 && (
        <a href={`${repo.link}/stargazers`} target="_blank" rel="noreferrer">
          <GithubStarIcon />
          <span>
            <NumberFormat
              value={repo.stars}
              displayType="text"
              thousandSeparator
            />
          </span>
        </a>
      )}
      {repo.forks > 0 && (
        <a
          href={`${repo.link}/network/members`}
          target="_blank"
          rel="noreferrer"
        >
          <GithubForkIcon />
          <span>
            <NumberFormat
              value={repo.forks}
              displayType="text"
              thousandSeparator
            />
          </span>
        </a>
      )}
    </div>
  </Container>
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgb(44, 44, 44);
  padding: 16px;
  border-radius: 6px;
  line-height: 1.5;
  color: rgba(204, 204, 204, 0.6);
  height: 100%;

  &.max {
    min-height: 150px;
    max-height: 150px;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 6px;

    a {
      flex: 1;
      font-size: 14px;
      color: rgb(89, 166, 255);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .description {
    flex: 1;
    margin-top: 8px;
    font-size: 12px;
    color: inherit;

    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    font-size: 12px;
    div,
    a {
      display: flex;
      align-items: center;
      gap: 6px;
      color: inherit;

      .language-color {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
    }
    a:hover {
      color: rgb(89, 166, 255);
    }
  }
`;

export default RepoCard;
