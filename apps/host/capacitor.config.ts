import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.host.app',
  appName: 'host',
  webDir: '../../dist/apps/host/exported',
  bundledWebRuntime: false
};

export default config;
