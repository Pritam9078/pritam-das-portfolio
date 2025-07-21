import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="cyber-text">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
