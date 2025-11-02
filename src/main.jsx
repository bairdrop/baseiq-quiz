import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import QuizApp from './QuizApp';
import { sdk } from '@farcaster/miniapp-sdk'; // ✅ import SDK directly

const AppWrapper = () => {
  useEffect(() => {
    const init = async () => {
      try {
        // Wait until React renders the first frame
        await new Promise(resolve => setTimeout(resolve, 300));

        // ✅ Tell the Farcaster MiniApp SDK that we’re ready
        await sdk.actions.ready();
        console.log('✅ BaseIQ Quiz ready!');
      } catch (err) {
        console.error('Error calling sdk.actions.ready:', err);
      }
    };

    init();
  }, []);

  return <QuizApp />;
};

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
