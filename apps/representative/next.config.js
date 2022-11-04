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
    svgr: false
  },
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'representative',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          host: `host_app@http://localhost:4200/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
          customer: `customer@http://localhost:4201/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
          representative: `representative@http://localhost:4202/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`
        },
        exposes: {},
        shared: {
          ui: {
            singleton: true
          },
          recoil: {
            singleton: true
          }
        },
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
          automaticPageStitching: true
        }
      })
    );
    return config;
  }
};

module.exports = withPlugins([withTM], withNx(nextConfig));
