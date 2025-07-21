import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  badge: {
    text: string;
    color: string;
  };
  technologies: string[];
  liveDemo: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[hsl(197,100%,50%)]/20">
      {project.images && project.images.length > 1 ? (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {project.images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="rounded-lg w-full h-24 object-cover"
            />
          ))}
        </div>
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl mb-4 w-full h-48 object-cover"
        />
      )}
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-xl font-bold ${project.badge.color}`}>
          {project.title}
        </h3>
        <Badge className={`${project.badge.color.replace('text-', 'bg-')} bg-opacity-20 ${project.badge.color} px-2 py-1 rounded-full text-xs`}>
          {project.badge.text}
        </Badge>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <Badge key={tech} className="bg-gray-800 px-2 py-1 rounded text-xs">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <Button
          size="sm"
          variant="ghost"
          className="text-[hsl(197,100%,50%)] hover:text-[hsl(197,100%,60%)] p-0"
          asChild
        >
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-[hsl(158,100%,50%)] hover:text-[hsl(158,100%,60%)] p-0"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
