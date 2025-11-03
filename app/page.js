'use client';

import { useEffect } from 'react';
import QuizApp from '../components/QuizApp';

export default function Home() {
  useEffect(() => {
    const init = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (typeof window !== 'undefined' && window.sdk && window.sdk.actions && window.sdk.actions.ready) {
          await window.sdk.actions.ready();
          console.log('✅ BaseIQ Quiz ready!');
        }
      } catch (err) {
        console.error('Error calling sdk.actions.ready:', err);
      }
    };

    init();
  }, []);

  return <QuizApp />;
}
