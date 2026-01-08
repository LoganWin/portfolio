import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="relative bg-[#dedede] px-8 py-16 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-start gap-16">
          <ProjectCard title="Project 1" />
          <ProjectCard title="Project 2" />
          <ProjectCard title="Project 3" />
        </div>
      </div>
    </section>
  );
}
