import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'src/components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Repo Hunter</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
