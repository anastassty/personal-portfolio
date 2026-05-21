import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Software Projects",
        description: "Built full-stack web applications and systems using Python, Flask, PostgreSQL, JavaScript, and React.",
    },

    {
        icon: Rocket,
        title: "Technical Support",
        description: "Work as a Computer Support Assistant, helping maintain hardware and software and making sure classes run smoothly.",
    },

    {
        icon: Users,
        title: "Team Experience",
        description: "Worked on team-based projects using Agile sprint workflows, contributing to development, testing, and integration.",
    },

    {
        icon: Lightbulb,
        title: "Creative Thinking",
        description: "Enjoy combining technical skills with design and usability to build projects that are both functional and engaging.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*Left Column*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
                            Computer Science student
                            <span className="font-serif italic font-normal text-foreground"> with global experience.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground)] animate-fade-in animation-delay-200">
                            <p>
                                I’m a Computer Science student at the University of Arkansas who enjoys building practical projects and learning through hands-on experience. What interests me most about technology is seeing how technical systems connect to real-world problems, business decisions, and user experiences.
                            </p>

                            <p>
                                Alongside school, I work as a Computer Support Assistant at my university, helping maintain classroom technology and troubleshoot hardware and software issues for faculty and students. Working in both technical and collaborative environments has helped me become more adaptable and comfortable communicating with different kinds of people.
                            </p>

                            <p>
                                I also enjoy connecting with people from different backgrounds and perspectives. Being multilingual and having international experience has made me more curious, open-minded, and interested in how technology impacts people in different ways.
                            </p>

                            <p>
                                I’m always looking for opportunities to keep learning, work on projects that actually matter, and connect with people doing interesting things.
                            </p>
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                I enjoy turning creative ideas into practical technology through innovation and thoughtful design.
                            </p>
                        </div>
                    </div>

                    {/*Right Column - Highlights*/}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </section>
    );
};

