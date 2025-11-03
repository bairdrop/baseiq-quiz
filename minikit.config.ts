// Base Mini App Configuration
interface AccountAssociation {
  header?: string;
  payload?: string;
  signature?: string;
}

interface MiniAppConfig {
  name: string;
  subtitle?: string;
  description?: string;
  version: string;
  url: string;
  iconUrl: string;
  splashImageUrl: string;
  splashBackgroundColor: string;
  homeUrl: string;
  screenshotUrls?: string[];
  primaryCategory?: string;
  tags?: string[];
  accountAssociation?: AccountAssociation;
}

interface AppConfig {
  miniapp: MiniAppConfig;
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://baseiq-seven.vercel.app/';

export const config: { app: AppConfig } = {
  app: {
    miniapp: {
      name: 'BaseIQ',
      subtitle: 'test your Base brainpower.',
      description: 'BaseIQ - Test your knowledge about Base blockchain',
      version: '1.0.0',
      url: APP_URL,
      iconUrl: `${APP_URL}/icon.png`,
      splashImageUrl: `${APP_URL}/screenshot.png`,
      splashBackgroundColor: '#0100ff',
      homeUrl: APP_URL,
      screenshotUrls: [
        `${APP_URL}/screenshot.png`,
        `${APP_URL}/screenshot.png`
      ],
      primaryCategory: 'games',
      tags: ['game', 'quiz', 'base', 'baseapp', 'miniapp'],
      accountAssociation: {
        header: "eyJmaWQiOjUyNjk5NiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQ4YURERTk1ZkY1OGNjQzRBRTkxYjM3YzY4NkVmQTA3OTFhMDUxMDcifQ",
        payload: "eyJkb21haW4iOiJiYXNlaXEtc2V2ZW4udmVyY2VsLmFwcCJ9",
        signature: "0Y7W6Fv05SKmv/oazJIPXUwZlrjFfcHcWNQKyVh6ogRiarUxKBVfVZ2CHhxNVbL09fbV5ixbIbiIDmq4cNor6xw="
      }
    }
  }
};
