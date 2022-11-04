import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import Layout from '../components/layout/layout';
import '../styles/styles.css';

function HostApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

HostApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);

  return {
    ...appProps,
    mfRoutes: {
      'host_app@http://localhost:4200/_next/static/chunks/remoteEntry.js': [
        '/'
      ],
      'customer@http://localhost:4201/_next/static/chunks/remoteEntry.js': [
        '/customer'
      ],
      'representative@http://localhost:4202/_next/static/chunks/remoteEntry.js':
        ['/representative']
    }
  };
};

export default HostApp;
