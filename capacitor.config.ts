import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aguimob',
  appName: 'aguimob',
  webDir: 'www',

  plugins: {
  SplashScreen: {
    launchShowDuration: 3000,
    backgroundColor: "#ffffff",
    showSpinner: false
  }
}
};

export default config;
