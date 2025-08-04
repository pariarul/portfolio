import { ExternalLink, Github } from "lucide-react";
import { 
  SiReact, SiNodedotjs, SiMongodb, SiStripe, SiNextdotjs, SiTypescript, 
  SiPrisma, SiSocketdotio, SiExpress, SiPostgresql, SiVuedotjs, SiDjango,
  SiAmazon, SiReactquery, SiChartdotjs
} from "react-icons/si";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Stripe", icon: SiStripe, color: "#635BFF" }
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" }
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "React Query", icon: SiReactquery, color: "#FF4154" }
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Complete real estate solution with property search, virtual tours, agent dashboard, and integrated payment system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "AWS", icon: SiAmazon, color: "#FF9900" }
      ],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Fitness Tracker App",
      description: "Comprehensive fitness application with workout tracking, progress analytics, social features, and personalized training plans.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" }
      ],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;

      gsap.fromTo(cards, {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotationY: 45
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Individual card hover effects
      Array.from(cards).forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }
  }, []);

  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-portfolio-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, responsive designs, and innovative solutions.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-portfolio-primary rounded-xl overflow-hidden border border-gray-700 hover:border-portfolio-accent transition-all duration-300 relative"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-portfolio-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className="group/tech flex items-center gap-1 bg-portfolio-secondary/50 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-200"
                      >
                        <TechIcon 
                          size={12} 
                          style={{ color: tech.color }}
                          className="group-hover/tech:scale-110 transition-transform duration-200"
                        />
                        <span className="text-gray-300 text-xs">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    className="group/link flex items-center gap-2 text-portfolio-accent hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform duration-200" /> 
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="group/link flex items-center gap-2 text-portfolio-accent hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={14} className="group-hover/link:scale-110 transition-transform duration-200" /> 
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-portfolio-accent hover:text-blue-300 transition-colors duration-300 font-medium"
          >
            View All Projects <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
