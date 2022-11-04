import App, { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../styles/styles.css';
function CustomerApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

CustomerApp.getInitialProps = async ctx => {
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

export default CustomerApp;
