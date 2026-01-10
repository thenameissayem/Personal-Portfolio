import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
    {
        id:1,
        title:"ChatBot",
        description:"Developed a basic React-based chatbot with a user-friendly interface and smooth message flow.",
        image:"/projects/chatbot.png",
        tags:["React","Css3","Responsive"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:2,
        title:"E-commerce",
        description:"Developed a React-based e-commerce app with authentication, cart functionality, and backend API integration support features.",
        image:"/projects/ecommerce.png",
        tags:["React","Css3","Responsive","API"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:3,
        title:"Music Player",
        description:"Built a responsive music player using HTML, CSS, and JavaScript with interactive playback controls.",
        image:"/projects/music.png",
        tags:["Html","Css3","JS","Responsive"],
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:4,
        title:"Real-Estate",
        description:"Modern real estate website frontend built with React, featuring dynamic property listings and API-driven data.",
        image:"/projects/realestate.png",
        tags:["React","SASS","Responsive","API"],
        demoUrl:"#",
        githubUrl:"#",
    },
]

function ProjectSection() {
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Featured <span className='text-primary'>Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my recent projects. Each project was carefully crafted
                with attention to detail, performance and user experience.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,key)=>(
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tags)=>(
                                    <span className='px-2 py-1 text-xs border bg-primary/20 font-medium rounded-full bg-secondary text-secondary-foreground'>
                                        {tags}
                                    </span>
                                ))}
                            </div>
                        

                        <h3 className='text-xl font-semibold mb-1'> {project.title} </h3>
                        <p className='text-muted-foreground text-sm mb-4'>
                            {project.description}
                        </p>
                        <div className='flex justify-between items-center'>
                            <div className='flex space-x-3'>
                                <a href={project.demoUrl} 
                                target='_blank'
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                >
                                    
                                     <ExternalLink size={20}/> </a>
                                <a href={project.githubUrl}
                                target='_blank'
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                > 
                                <Github size={20}/> </a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <a href="https://github.com/thenameissayem" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2 '>
                   Check My Github<ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection