import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronDown } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  children?: SkillNode[];
  description: string;
}

const skillTree: SkillNode = {
  id: "root",
  name: "Blockchain Development",
  level: 5,
  maxLevel: 5,
  description: "Expert in blockchain and Web3 technologies",
  children: [
    {
      id: "smart-contracts",
      name: "Smart Contracts",
      level: 4,
      maxLevel: 5,
      description: "Solidity, OpenZeppelin, Security Audits",
      children: [
        {
          id: "solidity",
          name: "Solidity",
          level: 4,
          maxLevel: 5,
          description: "Advanced smart contract development"
        },
        {
          id: "security",
          name: "Security Auditing",
          level: 3,
          maxLevel: 5,
          description: "Smart contract security best practices"
        }
      ]
    },
    {
      id: "defi",
      name: "DeFi Protocols",
      level: 3,
      maxLevel: 5,
      description: "Decentralized Finance development",
      children: [
        {
          id: "dex",
          name: "DEX Development",
          level: 3,
          maxLevel: 5,
          description: "Automated Market Makers, Liquidity"
        },
        {
          id: "lending",
          name: "Lending Protocols",
          level: 2,
          maxLevel: 5,
          description: "Borrowing, Lending, Yield Farming"
        }
      ]
    },
    {
      id: "web3",
      name: "Web3 Frontend",
      level: 4,
      maxLevel: 5,
      description: "dApp development and wallet integration",
      children: [
        {
          id: "react",
          name: "React/Next.js",
          level: 4,
          maxLevel: 5,
          description: "Modern frontend frameworks"
        },
        {
          id: "wallets",
          name: "Wallet Integration",
          level: 4,
          maxLevel: 5,
          description: "MetaMask, WalletConnect, Rainbow"
        }
      ]
    }
  ]
};

interface SkillTreeNodeProps {
  node: SkillNode;
  depth: number;
}

function SkillTreeNode({ node, depth }: SkillTreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(depth < 2);
  const progressPercentage = (node.level / node.maxLevel) * 100;

  return (
    <div className={`ml-${depth * 4}`}>
      <Card className="glass border-0 mb-2 hover:scale-105 transition-all duration-300">
        <CardContent className="p-4">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-3">
              {node.children && (
                isExpanded ? 
                  <ChevronDown className="w-4 h-4 text-[hsl(197,100%,50%)]" /> :
                  <ChevronRight className="w-4 h-4 text-[hsl(197,100%,50%)]" />
              )}
              <div>
                <h3 className="text-lg font-semibold text-white">{node.name}</h3>
                <p className="text-sm text-gray-400">{node.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[hsl(197,100%,50%)] to-[hsl(158,100%,50%)] transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <Badge className="bg-[hsl(197,100%,50%)] bg-opacity-20 text-[hsl(197,100%,50%)] px-2 py-1 rounded-full text-xs">
                {node.level}/{node.maxLevel}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {isExpanded && node.children && (
        <div className="ml-4 border-l-2 border-gray-700 pl-4">
          {node.children.map(child => (
            <SkillTreeNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillTree() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-center mb-8">
        <span className="cyber-text">Skill Tree</span>
      </h3>
      <SkillTreeNode node={skillTree} depth={0} />
    </div>
  );
}