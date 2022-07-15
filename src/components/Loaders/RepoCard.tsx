import ContentLoader from 'react-content-loader';

import GithubForkIcon from '/public/svg/github-fork.svg';
import GithubRepoIcon from '/public/svg/github-repo.svg';
import GithubStarIcon from '/public/svg/github-star.svg';

import { Container as Repo } from '../RepoCard';

const ReposLoader = () => {
  return (
    <>
      {Array.from({ length: 30 }).map((_, index) => (
        <Repo key={index}>
          <div className="title">
            <GithubRepoIcon />
            <a>
              <ContentLoader
                speed={2}
                width="40%"
                height={12}
                backgroundColor="#2c2c2c"
                foregroundColor="#121212"
              >
                <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
              </ContentLoader>
            </a>
          </div>
          <p className="description">
            <ContentLoader
              speed={2}
              width="100%"
              height={10}
              backgroundColor="#2c2c2c"
              foregroundColor="#121212"
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
            <ContentLoader
              speed={2}
              width="100%"
              height={10}
              backgroundColor="#2c2c2c"
              foregroundColor="#121212"
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
            <ContentLoader
              speed={2}
              width="60%"
              height={10}
              backgroundColor="#2c2c2c"
              foregroundColor="#121212"
            >
              <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
            </ContentLoader>
          </p>
          <div className="info">
            <div>
              <span
                className="language-color"
                style={{
                  backgroundColor: '#2c2c2c',
                }}
              />
              <span>0</span>
            </div>
            <a>
              <GithubStarIcon />
              <span>0</span>
            </a>

            <a>
              <GithubForkIcon />
              <span>0</span>
            </a>
          </div>
        </Repo>
      ))}
    </>
  );
};

export default ReposLoader;
