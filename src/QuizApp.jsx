import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [screen, setScreen] = useState('start');
  const [level, setLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [fadeIn, setFadeIn] = useState(true);

  const questions = {
    easy: [
      {
        question: "What company developed Base blockchain?",
        options: ["Binance", "Coinbase", "Kraken", "Gemini"],
        correct: 1
      },
      {
        question: "What type of blockchain solution is Base?",
        options: ["Layer 1", "Layer 2", "Layer 3", "Sidechain"],
        correct: 1
      },
      {
        question: "Which blockchain does Base build on top of?",
        options: ["Bitcoin", "Solana", "Ethereum", "Cardano"],
        correct: 2
      },
      {
        question: "What is the native gas token on Base?",
        options: ["BASE", "USDC", "ETH", "BTC"],
        correct: 2
      },
      {
        question: "Does Base plan to issue its own network token?",
        options: ["Yes, already launched", "Yes, coming soon", "No current plans", "Maybe in future"],
        correct: 2
      },
      {
        question: "Base is built using which technology stack?",
        options: ["Polygon SDK", "OP Stack", "Cosmos SDK", "Substrate"],
        correct: 1
      },
      {
        question: "What is Base's primary goal?",
        options: ["Replace Ethereum", "Bring users onchain", "Mining crypto", "NFT marketplace"],
        correct: 1
      },
      {
        question: "Base is compatible with which Virtual Machine?",
        options: ["JVM", "EVM", "WASM", "CVM"],
        correct: 1
      },
      {
        question: "What type of rollup technology does Base use?",
        options: ["ZK Rollup", "Optimistic Rollup", "Plasma", "State Channels"],
        correct: 1
      },
      {
        question: "Base aims to onboard how many users into crypto?",
        options: ["1 million+", "10 million+", "100 million+", "1 billion+"],
        correct: 3
      },
      {
        question: "Is Base open source?",
        options: ["Yes", "No", "Partially", "Unknown"],
        correct: 0
      },
      {
        question: "Base was developed in collaboration with which project?",
        options: ["Arbitrum", "Optimism", "zkSync", "Polygon"],
        correct: 1
      },
      {
        question: "What is the main benefit of using Base over Ethereum L1?",
        options: ["More decentralized", "Lower fees", "Better security", "Faster mining"],
        correct: 1
      },
      {
        question: "Can developers easily migrate Ethereum dApps to Base?",
        options: ["Yes, with EVM compatibility", "No, complete rewrite needed", "Only smart contracts", "Only frontend"],
        correct: 0
      },
      {
        question: "Base provides access to how many Coinbase verified users?",
        options: ["10M+", "50M+", "110M+", "500M+"],
        correct: 2
      },
      {
        question: "What color is primarily associated with Base brand?",
        options: ["Red", "Green", "Blue", "Orange"],
        correct: 2
      },
      {
        question: "Base transactions are finalized on which network?",
        options: ["Base mainnet only", "Ethereum mainnet", "Polygon", "BSC"],
        correct: 1
      },
      {
        question: "What is Base's approach to decentralization?",
        options: ["Fully decentralized now", "Progressive over time", "Never planned", "Centralized always"],
        correct: 1
      },
      {
        question: "Base enables what type of transactions for dApps?",
        options: ["Only paid", "Only free", "Gasless transactions", "Mining-based"],
        correct: 2
      },
      {
        question: "Which stablecoin is prominent in the Base ecosystem?",
        options: ["USDT", "USDC", "DAI", "BUSD"],
        correct: 1
      },
      {
        question: "Base was publicly announced in which year?",
        options: ["2021", "2022", "2023", "2024"],
        correct: 2
      },
      {
        question: "What does L2 stand for in Base L2?",
        options: ["Level 2", "Layer 2", "Link 2", "Ledger 2"],
        correct: 1
      },
      {
        question: "Base offers integration with Coinbase for what?",
        options: ["Mining only", "Fiat onramps", "Staking only", "NFTs only"],
        correct: 1
      },
      {
        question: "Is Base permissionless?",
        options: ["Yes", "No", "Only for developers", "Only for Coinbase users"],
        correct: 0
      },
      {
        question: "Base aims to make onchain the next what?",
        options: ["Bitcoin", "Online", "Ethereum", "DeFi"],
        correct: 1
      },
      {
        question: "What security does Base leverage?",
        options: ["Its own security", "Bitcoin security", "Ethereum security", "Solana security"],
        correct: 2
      },
      {
        question: "Base testnet was launched before mainnet?",
        options: ["Yes", "No", "Simultaneously", "No testnet"],
        correct: 0
      },
      {
        question: "Can you bridge assets to Base from Ethereum?",
        options: ["Yes", "No", "Only ETH", "Only ERC-20"],
        correct: 0
      },
      {
        question: "Base is described as developer-friendly?",
        options: ["Yes", "No", "Only for experts", "Only for beginners"],
        correct: 0
      },
      {
        question: "What is Base's vision for the blockchain ecosystem?",
        options: ["Closed and exclusive", "Open and inclusive", "Coinbase only", "Enterprise only"],
        correct: 1
      }
    ],
    medium: [
      {
        question: "Approximately how many transactions per second can Base process?",
        options: ["15 TPS", "100 TPS", "1000+ TPS", "10,000 TPS"],
        correct: 2
      },
      {
        question: "What is the Base Ecosystem Fund designed for?",
        options: ["Mining rewards", "User airdrops", "Supporting early-stage projects", "Staking rewards"],
        correct: 2
      },
      {
        question: "Base uses which fraud-proof mechanism?",
        options: ["Pessimistic", "Optimistic", "Zero-knowledge", "Hybrid"],
        correct: 1
      },
      {
        question: "How does Base reduce transaction costs?",
        options: ["Mining subsidies", "Batch processing off-chain", "Lower security", "Centralization"],
        correct: 1
      },
      {
        question: "Which popular DEX is native to Base?",
        options: ["Uniswap", "SushiSwap", "Aerodrome", "PancakeSwap"],
        correct: 2
      },
      {
        question: "What does account abstraction enable on Base?",
        options: ["Higher fees", "Gasless transactions", "Slower speeds", "More centralization"],
        correct: 1
      },
      {
        question: "Base was incubated where?",
        options: ["Y Combinator", "Inside Coinbase", "Ethereum Foundation", "Optimism Labs"],
        correct: 1
      },
      {
        question: "What is the OP Stack?",
        options: ["Mining algorithm", "Open-source toolkit for L2s", "Smart contract language", "Wallet software"],
        correct: 1
      },
      {
        question: "How much in assets does Coinbase ecosystem have?",
        options: ["$1B+", "$10B+", "$80B+", "$1T+"],
        correct: 2
      },
      {
        question: "Base supports building what type of applications?",
        options: ["Only DeFi", "Only NFTs", "Only games", "Multichain dApps"],
        correct: 3
      },
      {
        question: "What is a key advantage of Base's EVM equivalence?",
        options: ["Higher fees", "Seamless dApp migration", "Slower transactions", "Limited features"],
        correct: 1
      },
      {
        question: "Base processes transactions where before finalizing on Ethereum?",
        options: ["On-chain only", "Off-chain in batches", "On sidechains", "Through validators"],
        correct: 1
      },
      {
        question: "What blockchain explorer is used for Base?",
        options: ["Etherscan variant", "BaseScan", "BlockScout", "All of these"],
        correct: 3
      },
      {
        question: "Base enables cross-chain communication through what?",
        options: ["Atomic swaps", "Easy-to-use bridges", "Centralized exchanges", "Mining pools"],
        correct: 1
      },
      {
        question: "Which AI protocol is part of Base ecosystem?",
        options: ["OpenAI", "Virtuals Protocol", "Google AI", "Meta AI"],
        correct: 1
      },
      {
        question: "What does Base aim to be alongside Coinbase products?",
        options: ["Replacement", "Competitor", "Open ecosystem", "Private network"],
        correct: 2
      },
      {
        question: "Base's architecture prioritizes which three aspects?",
        options: ["Cost, speed, privacy", "Scalability, efficiency, accessibility", "Mining, staking, trading", "NFTs, DeFi, gaming"],
        correct: 1
      },
      {
        question: "What major DeFi protocol is available on Base?",
        options: ["Compound", "Aave", "MakerDAO", "Curve"],
        correct: 1
      },
      {
        question: "Base's transaction fees are compared to Ethereum as?",
        options: ["Same cost", "Fraction of the cost", "Higher cost", "Double the cost"],
        correct: 1
      },
      {
        question: "What type of data does Base publish to Ethereum?",
        options: ["All transactions", "Batched transaction data", "User data", "No data"],
        correct: 1
      },
      {
        question: "Base contributes to which broader vision?",
        options: ["Ethereum killer", "Bitcoin 2.0", "Superchain ecosystem", "Private blockchain"],
        correct: 2
      },
      {
        question: "How does Base verify suspicious transactions?",
        options: ["Pre-verification", "Fraud-proofs", "Mining consensus", "Voting"],
        correct: 1
      },
      {
        question: "What wallet is seamlessly integrated with Base?",
        options: ["MetaMask only", "Coinbase Wallet", "Trust Wallet", "Ledger only"],
        correct: 1
      },
      {
        question: "Base provides developer APIs for what?",
        options: ["Mining", "Account abstraction", "Token creation only", "Trading bots"],
        correct: 1
      },
      {
        question: "What does Base prioritize for the user experience?",
        options: ["Complexity", "Simplicity and ease", "Technical depth", "Advanced features only"],
        correct: 1
      },
      {
        question: "Base's infrastructure is backed by?",
        options: ["Anonymous team", "Coinbase's practices", "Community only", "No backing"],
        correct: 1
      },
      {
        question: "What is Aerodrome on Base?",
        options: ["NFT marketplace", "DEX and liquidity pool", "Lending protocol", "Oracle service"],
        correct: 1
      },
      {
        question: "Base enables developers to create what?",
        options: ["L1 chains only", "Gasless user experiences", "Mining algorithms", "New blockchains"],
        correct: 1
      },
      {
        question: "What is Base's stance on network fees?",
        options: ["High fees preferred", "Big features, small fees", "No fees ever", "Premium pricing"],
        correct: 1
      },
      {
        question: "Base documentation is described as?",
        options: ["Limited", "Non-existent", "Comprehensive", "Expert-only"],
        correct: 2
      }
    ],
    hard: [
      {
        question: "What is the relationship between Base and the Superchain?",
        options: ["Competitor", "Core contributor to vision", "Unrelated", "Replacement"],
        correct: 1
      },
      {
        question: "How does Base handle finality compared to Ethereum L1?",
        options: ["Instant finality", "Optimistic assumption then L1 finality", "Same speed", "Slower finality"],
        correct: 1
      },
      {
        question: "What is the technical architecture behind Base's scalability?",
        options: ["Sharding", "Optimistic Rollup with OP Stack", "State channels", "Plasma chains"],
        correct: 1
      },
      {
        question: "Base's block time is approximately?",
        options: ["12 seconds", "2 seconds", "1 second", "15 seconds"],
        correct: 1
      },
      {
        question: "What cross-chain protocol enables interoperability on Base?",
        options: ["Polkadot", "Axelar", "Cosmos IBC", "Chainlink CCIP"],
        correct: 1
      },
      {
        question: "How does Base contribute to Optimism development?",
        options: ["Financial only", "Core Dev on OP Stack", "Not involved", "Competitor"],
        correct: 1
      },
      {
        question: "What is Base's approach to sequencer decentralization?",
        options: ["Already decentralized", "Progressive decentralization", "Never planned", "Centralized permanently"],
        correct: 1
      },
      {
        question: "Base's data availability is secured through?",
        options: ["Own validators", "Ethereum DA", "Off-chain DA", "No DA"],
        correct: 1
      },
      {
        question: "What advanced feature might Base incorporate in the future?",
        options: ["Proof of Work", "ZK rollups or hybrid models", "Pure L1", "Centralized validation"],
        correct: 1
      },
      {
        question: "How does Base handle state transitions?",
        options: ["On Ethereum only", "Off-chain execution, on-chain finalization", "Fully off-chain", "Manual updates"],
        correct: 1
      },
      {
        question: "What is the challenge period for fraud proofs on Base?",
        options: ["1 hour", "24 hours", "7 days", "Instant"],
        correct: 2
      },
      {
        question: "Base's architecture supports which advanced developer feature?",
        options: ["Only basic contracts", "Account abstraction and gasless txs", "No smart contracts", "Limited functionality"],
        correct: 1
      },
      {
        question: "How does Base compare to Arbitrum technically?",
        options: ["Identical", "Different rollup tech, Coinbase integration", "Completely different L1", "No comparison"],
        correct: 1
      },
      {
        question: "What role does the sequencer play in Base?",
        options: ["Mining blocks", "Ordering and executing transactions", "Validating only", "No role"],
        correct: 1
      },
      {
        question: "Base's MIT license indicates what?",
        options: ["Proprietary", "Open source and permissive", "Restricted use", "No license"],
        correct: 1
      },
      {
        question: "How are Base transaction fees calculated?",
        options: ["Fixed price", "L2 execution + L1 data cost", "No fees", "Mining difficulty"],
        correct: 1
      },
      {
        question: "What is Base's approach to MEV?",
        options: ["Ignores it", "Addressing through sequencer design", "Encourages it", "No position"],
        correct: 1
      },
      {
        question: "Base's compatibility extends to which Ethereum features?",
        options: ["Limited subset", "Full EVM equivalence", "Only transfers", "No compatibility"],
        correct: 1
      },
      {
        question: "How does Base handle smart contract deployment?",
        options: ["Restricted", "Same as Ethereum with lower costs", "Not supported", "Approval needed"],
        correct: 1
      },
      {
        question: "What is the significance of Base being rollup-agnostic?",
        options: ["No significance", "Supports Superchain interoperability", "Marketing only", "Technical limitation"],
        correct: 1
      },
      {
        question: "Base's tokenomics model is best described as?",
        options: ["Native token planned", "ETH as gas, no Base token", "Dual token system", "Proof of Stake"],
        correct: 1
      },
      {
        question: "How does Base achieve EVM equivalence vs compatibility?",
        options: ["Same thing", "Equivalence = exact matching at bytecode level", "Marketing term", "No difference"],
        correct: 1
      },
      {
        question: "What is Base's strategy for censorship resistance?",
        options: ["Fully censorship resistant now", "Ethereum's security + decentralization plans", "Not prioritized", "Impossible"],
        correct: 1
      },
      {
        question: "Base's relationship with Optimism is structured as?",
        options: ["Competitor", "Collaborative, Core Dev on OP Stack", "Acquired", "Independent"],
        correct: 1
      },
      {
        question: "How does Base handle state root publication?",
        options: ["Never published", "Regularly to Ethereum L1", "Only internally", "Manual process"],
        correct: 1
      },
      {
        question: "What is Base's approach to upgradability?",
        options: ["Immutable", "Governed upgrades with timelock", "Random updates", "No updates"],
        correct: 1
      },
      {
        question: "Base's data compression techniques achieve what?",
        options: ["No compression", "Reduced L1 data costs", "Slower speeds", "No impact"],
        correct: 1
      },
      {
        question: "How does Base implement calldata optimization?",
        options: ["Doesn't use calldata", "Batching and compression", "Unlimited calldata", "No optimization"],
        correct: 1
      },
      {
        question: "What makes Base's bridge secure?",
        options: ["Third-party custodians", "Ethereum L1 security guarantees", "Multisig only", "No security"],
        correct: 1
      },
      {
        question: "Base's vision for composability includes?",
        options: ["Isolated ecosystem", "Cross-chain and multichain apps", "Base only", "No composability"],
        correct: 1
      }
    ]
  };

  useEffect(() => {
    let timer;
    if (screen === 'quiz' && timeLeft > 0 && !showResult) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [screen, timeLeft, showResult]);

  const selectLevel = (selectedLevel) => {
    setLevel(selectedLevel);
    const shuffled = [...questions[selectedLevel]]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    setAnsweredQuestions(shuffled);
    setScreen('quiz');
    setTimeLeft(10);
    setFadeIn(true);
  };

  const handleTimeout = () => {
    if (!showResult) {
      setShowResult(true);
      setTimeout(() => {
        if (currentQuestion < 9) {
          setFadeIn(false);
          setTimeout(() => {
            setCurrentQuestion(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setTimeLeft(10);
            setFadeIn(true);
          }, 300);
        } else {
          setScreen('result');
        }
      }, 1500);
    }
  };

  const selectAnswer = (index) => {
    if (selectedAnswer === null && !showResult) {
      setSelectedAnswer(index);
      setShowResult(true);
      
      if (index === answeredQuestions[currentQuestion].correct) {
        setScore(prev => prev + 1);
      }

      setTimeout(() => {
        if (currentQuestion < 9) {
          setFadeIn(false);
          setTimeout(() => {
            setCurrentQuestion(prev => prev + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setTimeLeft(10);
            setFadeIn(true);
          }, 300);
        } else {
          setScreen('result');
        }
      }, 1500);
    }
  };

  const restart = () => {
    setScreen('start');
    setLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(10);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnsweredQuestions([]);
    setFadeIn(true);
  };

  const shareScore = () => {
    const percentage = (score / 10) * 100;
    const text = `I scored ${score}/10 (${percentage}%) on the Base Quiz! 🔵\n\nTest your knowledge about Base blockchain!\n\n#BaseChain #Crypto`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Base Quiz Score',
        text: text,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert('Score copied to clipboard!');
      });
    }
  };

  const styles = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(1, 0, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 40px rgba(1, 0, 255, 0.8);
      }
    }

    .fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }

    .fade-out {
      animation: fadeOut 0.3s ease-out forwards;
    }

    .slide-up {
      animation: slideUp 0.6s ease-out forwards;
    }

    .pulse {
      animation: pulse 2s ease-in-out infinite;
    }

    .spin {
      animation: spin 20s linear infinite;
    }

    .glow {
      animation: glow 2s ease-in-out infinite;
    }

    .stagger-1 {
      animation-delay: 0.1s;
    }

    .stagger-2 {
      animation-delay: 0.2s;
    }

    .stagger-3 {
      animation-delay: 0.3s;
    }

    .stagger-4 {
      animation-delay: 0.4s;
    }
  `;

  if (screen === 'start') {
    return (
      <>
        <style>{styles}</style>
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(1,0,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '-100px',
            right: '-100px',
          }} className="spin" />
          
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(1,0,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            bottom: '-50px',
            left: '-50px',
          }} className="spin" />

          <div style={{
            width: '12px',
            height: '12px',
            background: '#0100ff',
            borderRadius: '2px',
            marginBottom: '30px'
          }} className="pulse glow" />
          
          <h1 style={{
            color: '#ffffff',
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '10px',
            textAlign: 'center'
          }} className="fade-in">Base Quiz</h1>
          
          <p style={{
            color: '#888888',
            fontSize: '18px',
            marginBottom: '50px',
            textAlign: 'center'
          }} className="fade-in">Test your knowledge about Base blockchain</p>

          <div style={{ width: '100%', maxWidth: '400px' }}>
            <button
              onClick={() => selectLevel('easy')}
              style={{
                width: '100%',
                padding: '20px',
                marginBottom: '15px',
                background: '#f0f0f0',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0
              }}
              className="slide-up stagger-1"
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 20px rgba(1, 0, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f0f0f0';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Easy Level
            </button>

            <button
              onClick={() => selectLevel('medium')}
              style={{
                width: '100%',
                padding: '20px',
                marginBottom: '15px',
                background: '#f0f0f0',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0
              }}
              className="slide-up stagger-2"
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 20px rgba(1, 0, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f0f0f0';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Medium Level
            </button>

            <button
              onClick={() => selectLevel('hard')}
              style={{
                width: '100%',
                padding: '20px',
                background: '#f0f0f0',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0
              }}
              className="slide-up stagger-3"
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 20px rgba(1, 0, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f0f0f0';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Hard Level
            </button>
          </div>
        </div>
      </>
    );
  }

  if (screen === 'quiz') {
    const question = answeredQuestions[currentQuestion];
    
    return (
      <>
        <style>{styles}</style>
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '600px',
            marginTop: '40px'
          }} className={fadeIn ? 'fade-in' : 'fade-out'}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              gap: '15px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  background: '#0100ff',
                  borderRadius: '2px'
                }} className="pulse" />
                <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600' }}>
                  {currentQuestion + 1}/10
                </span>
              </div>
              
              <div style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '600',
                background: '#2a2a2a',
                padding: '8px 16px',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}>
                Score: {score}
              </div>
              
              <div style={{
                background: timeLeft <= 5 ? '#ff0000' : '#0100ff',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '18px',
                fontWeight: '700',
                minWidth: '60px',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }} className={timeLeft <= 5 ? 'pulse' : ''}>
                {timeLeft}s
              </div>
            </div>

            <div style={{
              background: '#1a1a1a',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '30px',
              border: '1px solid #2a2a2a',
              transition: 'all 0.3s ease'
            }}>
              <h2 style={{
                color: '#ffffff',
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: '1.4',
                marginBottom: '0'
              }}>
                {question.question}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {question.options.map((option, index) => {
                let buttonStyle = {
                  width: '100%',
                  padding: '20px',
                  background: '#f0f0f0',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#000000',
                  cursor: selectedAnswer === null ? 'pointer' : 'default',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  transform: 'scale(1)'
                };

                if (showResult) {
                  if (index === question.correct) {
                    buttonStyle.background = '#0100ff';
                    buttonStyle.color = '#ffffff';
                    buttonStyle.transform = 'scale(1.02)';
                    buttonStyle.boxShadow = '0 4px 20px rgba(1, 0, 255, 0.4)';
                  } else if (index === selectedAnswer) {
                    buttonStyle.background = '#ff0000';
                    buttonStyle.color = '#ffffff';
                    buttonStyle.transform = 'scale(0.98)';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    disabled={selectedAnswer !== null}
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      if (selectedAnswer === null && !showResult) {
                        e.target.style.background = '#ffffff';
                        e.target.style.transform = 'translateX(5px)';
                        e.target.style.boxShadow = '0 4px 15px rgba(1, 0, 255, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedAnswer === null && !showResult) {
                        e.target.style.background = '#f0f0f0';
                        e.target.style.transform = 'translateX(0)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (screen === 'result') {
    const percentage = (score / 10) * 100;
    let message = '';
    
    if (percentage === 100) {
      message = 'Perfect! You are a Base expert!';
    } else if (percentage >= 80) {
      message = 'Excellent! You know Base very well!';
    } else if (percentage >= 60) {
      message = 'Good job! Keep learning about Base!';
    } else if (percentage >= 40) {
      message = 'Not bad! Time to explore Base more!';
    } else {
      message = 'Keep learning! Visit base.org to learn more!';
    }

    return (
      <>
        <style>{styles}</style>
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(1,0,255,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }} className="pulse" />

          <div style={{
            width: '12px',
            height: '12px',
            background: '#0100ff',
            borderRadius: '2px',
            marginBottom: '30px'
          }} className="pulse glow fade-in" />
          
          <h1 style={{
            color: '#ffffff',
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '10px',
            textAlign: 'center'
          }} className="fade-in">Quiz Complete!</h1>
          
          <div style={{
            fontSize: '72px',
            fontWeight: '700',
            color: '#0100ff',
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(1, 0, 255, 0.5)'
          }} className="slide-up pulse">
            {score}/10
          </div>

          <p style={{
            color: '#888888',
            fontSize: '20px',
            marginBottom: '50px',
            textAlign: 'center',
            maxWidth: '400px'
          }} className="fade-in">
            {message}
          </p>

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={shareScore}
              style={{
                padding: '20px 40px',
                background: '#0100ff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0
              }}
              className="slide-up stagger-1"
              onMouseEnter={(e) => {
                e.target.style.background = '#0000cc';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 25px rgba(1, 0, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#0100ff';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Share Score
            </button>

            <button
              onClick={restart}
              style={{
                padding: '20px 40px',
                background: '#f0f0f0',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                color: '#000000',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0
              }}
              className="slide-up stagger-2"
              onMouseEnter={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 25px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f0f0f0';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default QuizApp;
