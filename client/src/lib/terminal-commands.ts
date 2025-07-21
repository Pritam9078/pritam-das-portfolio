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
    '1. LMS - Library Management System (github.com/Pritam9078/LMS)',
    '2. Skill_DAO - Decentralized Skill Marketplace (github.com/Pritam9078/Skill_DAO)',
    '3. ONYX-CHAIN - Web3 Decentralized Storage (github.com/Pritam9078/ONYX-CHAIN)',
    '4. Book Recommendation System - ML-Powered',
    '5. ATM Simulation System - Python Console',
    '6. Smart Contract Portfolio - Solidity DApps'
  ],
  'contact': () => [
    'Email: dpritam2708@gmail.com',
    'Phone: +91 7683927667',
    'LinkedIn: linkedin.com/in/pritam-das-738aaa237',
    'GitHub: github.com/Pritam9078',
    'Twitter: @BlocksmithP_D',
    'Resume: github.com/Pritam9078/Resume_Pritam'
  ],
  'clear': () => [],
  'exit': () => []
};
