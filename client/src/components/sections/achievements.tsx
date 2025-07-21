import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Campus Maven",
    organization: "RiseIn",
    description: "Leadership role in promoting blockchain education and Web3 adoption on campus",
    icon: Trophy,
    color: "text-[hsl(197,100%,50%)]",
    bgColor: "bg-[hsl(197,100%,50%)]"
  },
  {
    id: 2,
    title: "Campus to Crypto Member",
    organization: "Blockchain Community",
    description: "Active member in the largest student-led crypto education initiative",
    icon: Medal,
    color: "text-[hsl(258,84%,69%)]",
    bgColor: "bg-[hsl(258,84%,69%)]"
  },
  {
    id: 3,
    title: "Agoric Hackathon",
    organization: "Agoric",
    description: "Participated in building innovative DeFi solutions on Agoric platform",
    icon: Award,
    color: "text-[hsl(158,100%,50%)]",
    bgColor: "bg-[hsl(158,100%,50%)]"
  },
  {
    id: 4,
    title: "D3 Fest Participant",
    organization: "Decentralized Web",
    description: "Showcased Web3 projects at the premier decentralized technologies festival",
    icon: Star,
    color: "text-[hsl(197,100%,50%)]",
    bgColor: "bg-[hsl(197,100%,50%)]"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="cyber-text">Achievements</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={achievement.id} className="glass border-0 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${achievement.bgColor} bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${achievement.color} mb-2`}>
                    {achievement.title}
                  </h3>
                  <Badge className="mb-3 bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                    {achievement.organization}
                  </Badge>
                  <p className="text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}