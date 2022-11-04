//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      customer: `customer@http://localhost:4201/_next/static/${
        isServer ? 'ssr' : 'chunks'
      }/remoteEntry.js`,
      representative: `representative@http://localhost:4202/_next/static/${
        isServer ? 'ssr' : 'chunks'
      }/remoteEntry.js`
    };

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host_app',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          customer: remotes.customer
        },
        exposes: {
          './Layout': './components/layout/layout',
          './GlobalNavigation': './components/layout/globalnav',
          './store': './store'
        },
        shared: {
          ui: {
            singleton: true
          },
          recoil: {
            singleton: true,
            eager: true
          }
        },
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
          skipSharingNextInternals: false,
          automaticPageStitching: true
        }
      })
    );
    return config;
  }
};

module.exports = withPlugins([withTM], withNx(nextConfig));
