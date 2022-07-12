import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  const languages = ['JavaScript', 'Rust', 'CSS', 'TypeScript', 'Python'];
  const selectedLanguage =
    languages[Math.floor(Math.random() * languages.length)];

  useEffect(() => {
    router.push(`/results?q=${selectedLanguage}&sort=stars&order=desc`);
  }, []);

  return null;
};

export default Home;
