import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BaseIQ Quiz',
  description: 'Challenge yourself with questions about Base blockchain! Three difficulty levels: Easy, Medium, and Hard. 10 questions in 10 seconds each.',
  openGraph: {
    title: 'BaseIQ Quiz - Test Your Base Knowledge',
    description: 'Challenge yourself with questions about Base blockchain! Three difficulty levels: Easy, Medium, and Hard. 10 questions in 10 seconds each.',
    images: ['https://baseiq-seven.vercel.app/screenshot1.png'],
    url: 'https://baseiq-seven.vercel.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaseIQ Quiz - Test Your Base Knowledge',
    description: 'Challenge yourself with questions about Base blockchain! Three difficulty levels available.',
    images: ['https://baseiq-seven.vercel.app/screenshot1.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://baseiq-seven.vercel.app/screenshot1.png',
    'fc:frame:button:1': 'Start Quiz',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://baseiq-seven.vercel.app/',
  },
  keywords: 'Base, blockchain, quiz, Base chain, crypto, Coinbase, Layer 2, Ethereum',
}

const sdkScript = `
(function() {
  var readyCalled = false;
  
  function callReady() {
    if (readyCalled) return;
    
    if (window.sdk && window.sdk.actions && window.sdk.actions.ready) {
      console.log('Calling sdk.actions.ready()');
      window.sdk.actions.ready();
      readyCalled = true;
    } else if (window.parent) {
      console.log('Posting message to parent');
      window.parent.postMessage({ type: 'ready' }, '*');
      window.parent.postMessage('ready', '*');
      readyCalled = true;
    }
  }
  
  var attempts = 0;
  var checkInterval = setInterval(function() {
    attempts = attempts + 1;
    if (window.sdk && window.sdk.actions && window.sdk.actions.ready) {
      callReady();
      clearInterval(checkInterval);
    } else if (attempts > 50) {
      callReady();
      clearInterval(checkInterval);
    }
  }, 100);
  
  window.addEventListener('message', function(event) {
    if (event.data === 'sdkReady' || (event.data && event.data.type === 'sdkReady')) {
      callReady();
    }
  });
  
  window.addEventListener('load', function() {
    setTimeout(callReady, 1000);
  });
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: sdkScript }} />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#000000' }}>
        {children}
      </body>
    </html>
  )
}
