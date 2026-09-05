import React from "react";
import { cn } from "@/lib/utils";
import { Code, Sparkles, MonitorSmartphone } from "lucide-react";


function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Full Stack Web Developer & Creative Tech Enthusiast</h3>
            <p className="text-muted-foreground">
              I'm a passionate MERN Stack Developer focused on building clean, responsive, and user-friendly web applications. I enjoy turning ideas into real, functional products using technologies like React, Node.js, Express, and MongoDB.
            </p>

            <p className="text-muted-foreground">
              I love combining clean UI design, smooth animations, and well-structured code to create engaging web experiences. I also have experience integrating frontend applications with backend APIs and working with databases to build complete web applications. I'm always learning, improving my skills, and exploring new technologies to become a better developer and create better solutions with every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
                Get In Touch
            </a>
            <a href="/Sayem_FullStack.pdf" download className={cn("px-6 py-2 rounded-full border border-primary text-primary",
              "hover:bg-primary/10 transition-colors duration-300"
            )}> 
              Download CV
            </a>
          </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                      <h4 className="font-semibold text-lg">Web Development</h4>
                      <p className="text-muted-foreground">Creating responsive websites and web application with modern web technologies.</p>
                  </div>
          
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MonitorSmartphone className="h-6 w-6 text-primary" />
                    
                  </div>
                  <div className="text-left">
                      <h4 className="font-semibold text-lg">Responsive Design</h4>
                      <p className="text-muted-foreground">Building fully responsive layouts that work smoothly across mobile, tablet, and desktop devices.</p>
                  </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                    
                  </div>
                  <div className="text-left">
                      <h4 className="font-semibold text-lg">Animations</h4>
                      <p className="text-muted-foreground">Adding smooth animations and micro-interactions using Framer Motion to enhance user experience.</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutMe;
