interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
