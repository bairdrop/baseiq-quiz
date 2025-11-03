'use client';

import { useEffect } from 'react';
import QuizApp from '../components/QuizApp';
import { sdk } from '@farcaster/miniapp-sdk';

export default function Home() {
  useEffect(() => {
    const init = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        await sdk.actions.ready();
        console.log('✅ BaseIQ Quiz ready!');
      } catch (err) {
        console.error('Error calling sdk.actions.ready:', err);
      }
    };

    init();
  }, []);

  return ;
}
