import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Software Projects",
        description: "Built projects in Python, JavaScript, Java, and React, including games, problem-solving tools, and interactive applications.",
    },

    {
        icon: Rocket,
        title: "Technical Support",
        description: "Work as a Computer Support Assistant, helping maintain hardware and software and making sure classes run smoothly.",
    },

    {
        icon: Users,
        title: "Team Experience",
        description: "Worked on team-based projects in class and student programs, contributing to design, development, and problem solving.",
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
                                I’m a Computer Science student at the University of Arkansas who enjoys building software and learning how technology works behind the scenes.
                            </p>

                            <p>
                                I come from an international background and speak Russian, Turkish, and English, and I also have some Spanish. Being able to communicate across different cultures has helped me work with many different people and perspectives.
                            </p>

                            <p>
                                I’m especially interested in artificial intelligence and assistive technologies, and I enjoy exploring how software can make technology more useful and accessible.
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

