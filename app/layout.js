export const metadata = {
  title: 'BaseIQ Quiz',
  description: 'Challenge yourself with questions about Base blockchain! 🔵 Three difficulty levels: Easy, Medium, and Hard. 10 questions in 10 seconds each.',
  openGraph: {
    title: 'BaseIQ Quiz - Test Your Base Knowledge',
    description: 'Challenge yourself with questions about Base blockchain! 🔵 Three difficulty levels: Easy, Medium, and Hard. 10 questions in 10 seconds each.',
    images: ['https://baseiq-seven.vercel.app/hero.png'],
    url: 'https://baseiq-seven.vercel.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaseIQ Quiz - Test Your Base Knowledge',
    description: 'Challenge yourself with questions about Base blockchain! Three difficulty levels available.',
    images: ['https://baseiq-seven.vercel.app/hero.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://baseiq-seven.vercel.app/hero.png',
    'fc:frame:button:1': 'Start Quiz 🔵',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://baseiq-seven.vercel.app/',
  },
  keywords: 'Base, blockchain, quiz, Base chain, crypto, Coinbase, Layer 2, Ethereum',
}

export default function RootLayout({ children }) {
  return (
    
      
         50) {
                  callReady();
                  clearInterval(checkInterval);
                }
              }, 100);
              
              window.addEventListener('message', function(event) {
                if (event.data === 'sdkReady' || event.data?.type === 'sdkReady') {
                  callReady();
                }
              });
              
              window.addEventListener('load', function() {
                setTimeout(callReady, 1000);
              });
            })();
          `
        }} />
      
      
        {children}
      
    
  )
}
