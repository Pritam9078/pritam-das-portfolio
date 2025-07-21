export const terminalCommands: Record<string, () => string[]> = {
  'help': () => [
    'Available commands:',
    '  about    - Learn more about Pritam',
    '  skills   - View technical skills',
    '  projects - List featured projects',
    '  contact  - Get contact information',
    '  clear    - Clear terminal',
    '  exit     - Close terminal'
  ],
  'about': () => [
    'Pritam Das - Web3 Developer & AI Explorer',
    'CSE Student passionate about blockchain and AI/ML',
    'Currently building DeFi protocols and smart contracts',
    'Always learning, always building!'
  ],
  'skills': () => [
    'Web3: Solidity, Hardhat, Ethereum, MetaMask, IPFS',
    'AI/ML: Python, TensorFlow, OpenCV, Scikit-learn',
    'Frontend: React, Next.js, TypeScript, TailwindCSS',
    'Other: Node.js, Git, Docker, AWS'
  ],
  'projects': () => [
    'Featured Projects:',
    '1. ONYX-CHAIN - Web3 Decentralized Storage',
    '2. Skill_DAO - Decentralized Skill Marketplace',
    '3. Library Management System - Java OOP',
    '4. Book Recommendation System - ML-Powered',
    '5. ATM Simulation System - Python Console',
    '6. Smart Contract Portfolio - Solidity DApps'
  ],
  'contact': () => [
    'Email: pritam@pritamdas.dev',
    'LinkedIn: linkedin.com/in/pritamdas',
    'GitHub: github.com/pritamdas',
    'Domain: pritamdas.dev'
  ],
  'clear': () => [],
  'exit': () => []
};
