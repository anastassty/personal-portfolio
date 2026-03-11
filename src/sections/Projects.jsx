import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS to showcase my projects, experience, and technical interests.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind", "JavaScript"],
    github: "#",
  },

  {
    title: "Laser Tag System",
    description: "A team-based software project implementing gameplay logic, player interaction, and system functionality.",
    image: "/projects/laser-tag.png",
    tags: ["Python", "Git", "Team Project"],
    github: "https://github.com/anastassty/Laser-Tag",
  },

  {
    title: "Hello Kitty Adventure Game",
    description: "A small game project focused on gameplay logic and object-oriented programming.",
    image: "/projects/hello-kitty.png",
    tags: ["Java", "Game Dev", "Android Studio"],
    github: "https://github.com/anastassty/hello-kitty-adventure-game",
  },

  {
    title: "Sleepy Hogs Nap Pod Project",
    description: "A student project proposing a campus nap room, including branding, concept development, and a booking website.",
    image: "/projects/nap-pod.png",
    tags: ["Design", "Wix", "Concept"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects I've worked on
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Some of the projects I’ve worked on during my studies and personal time.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                {project.link && (
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                    <ArrowUpRight className="w-5 h-5" />
                    </a>
                )}

                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                    <Github className="w-5 h-5" />
                    </a>
                )}

                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};