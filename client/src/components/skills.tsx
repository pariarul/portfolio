import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiSpringboot,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVercel,
  SiGithub,
    SiPostman,
  SiRedux,
  
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Language" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Language" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffffff", category: "Frontend" },
  { name: "Express", icon: SiExpress, color: "#ffffffff", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "State Management" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "API" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Styling" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Styling" },
  { name: "Java", icon: FaJava, color: "#007396", category: "Language" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", category: "Backend" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", category: "Frontend" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "#ffffffff", category: "Deployment" },
  { name: "GitHub", icon: SiGithub, color: "#ea6060ff", category: "Tools" },
  { name: "VS Code", icon: VscCode, color: "#007ACC", category: "Tools" },
];


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Header animation
    tl.fromTo(headerRef.current?.children || [], {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    // Skills grid animation
    tl.fromTo(skillsGridRef.current?.children || [], {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotation: -5
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      stagger: {
        amount: 1.2,
        grid: "auto",
        from: "center"
      },
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Floating animation for skill cards
    gsap.to(skillsGridRef.current?.children || [], {
      y: -8,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-portfolio-secondary via-portfolio-primary to-portfolio-secondary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-portfolio-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Skills & 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
  Technologies
</span>

          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-portfolio-accent to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies I use to craft exceptional digital experiences 
            and build scalable, performant applications.
          </p>
        </div>
        
        <div ref={skillsGridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="group relative bg-portfolio-primary/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-portfolio-accent/50 transition-all duration-500 hover:transform hover:scale-110 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}08, transparent)`
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: skill.color }}
                ></div>
                
                {/* Icon container */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div 
                      className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                    <div className="relative bg-portfolio-secondary/80 p-4 rounded-xl border border-gray-600/30 group-hover:border-opacity-60 transition-all duration-300">
                      <IconComponent 
                        size={32} 
                        style={{ color: skill.color }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-portfolio-accent transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium">
                      {skill.category}
                    </p>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-2xl animate-pulse"
                    style={{
                      background: `linear-gradient(45deg, ${skill.color}20, transparent, ${skill.color}20)`,
                      backgroundSize: '200% 200%',
                    }}
                  ></div>
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-portfolio-secondary text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-600 shadow-xl z-20">
                  {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-portfolio-secondary"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-portfolio-primary/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">Always learning new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}