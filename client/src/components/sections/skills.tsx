import { skillsData } from "../../data/skills";
import SkillBar from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="cyber-text">Skills & Technologies</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <div className={`text-4xl mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.tools.map((tool) => (
                    <Badge key={tool} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
