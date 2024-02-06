import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.capacitorapppoc.app',
  appName: 'capacitor-app-poc',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
