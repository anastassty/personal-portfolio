import { Button } from "@/components/Button";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";

const skills = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React",
    "SQL",
    "Github / Git",
    "Linux",
    "Figma",
];

export const Hero = () => {
    return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-yellow-200/40 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Computer Science Student
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
                            Hey! Welcome to my website.
                            <br />
                            <span className="font-serif italic font-normal text-primary">
                                I'm Anastasia.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            I'm a computer science student at the University of Arkansas.
                            Here you can check out my projects, experience, and a few things
                            I enjoy outside of school too.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
                        <a href="#projects">
                        <Button size="lg" className="cursor-pointer">
                            View My Work
                        </Button>
                        </a>
                        <a 
                            href="/Anastasiia_Tykina.pdf"
                            download
                            className="flex items-center gap-2 hover:underline underline-offset-4 cursor-pointer"
                        >
                            <Download />
                            Download Resume (PDF)
                        </a>
                    </div>

                    {/*Social Links*/}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me:</span>
                        {[
                            {icon: Github, href: "https://github.com/anastassty"},
                            {icon: Linkedin, href: "https://www.linkedin.com/in/anastasiia-tykina/"},
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                {<social.icon className="w-5 h-5"/>}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/*Profile Image*/}
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img 
                                src="/profile-avatar.png" 
                                alt="Anastasiia Tykina" 
                                className="w-full aspect-4/5 object-cover rounded-2xl"
                            />
                            {/* Floating badges */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Open to work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-20">
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
    
        </div>
    </section>;
};