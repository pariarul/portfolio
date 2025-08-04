import { Github, Linkedin,  Mail, ChevronDown } from "lucide-react";
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb, SiExpress} from "react-icons/si";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ThreeBackground from "./three-background";




export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { icon: Github, href: "https://github.com/pariarul", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pari-arul-ab874b358/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pariarul@gmail.com", label: "Email" },
  ];

const techIcons = [
  { icon: SiMongodb, name: "MongoDB", color: "#47A248", type: "FullStack" },
  { icon: SiExpress, name: "Express.js", color: "#FFFFFF", type: "FullStack" },
  { icon: SiReact, name: "React", color: "#61DAFB", type: "FullStack" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933", type: "FullStack" },
];


  useEffect(() => {
    const tl = gsap.timeline();

    // Hero entrance animation
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(buttonsRef.current?.children || [],
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(socialRef.current?.children || [],
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.2"
    )
    .fromTo(techRef.current?.children || [],
      { opacity: 0, y: 30, rotation: -180 },
      { opacity: 1, y: 0, rotation: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Floating animation for tech icons
    gsap.to(techRef.current?.children || [], {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-0">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/90 via-portfolio-secondary/80 to-portfolio-primary/90"></div>
      
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 ref={titleRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-portfolio-accent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">PARI ARUL</span>
          </h1>
          <h2 ref={subtitleRef} className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
            Full Stack Developer 
          </h2>
          <p ref={descRef} className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, responsive web applications using modern technologies. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          
          {/* Tech Stack Icons */}
          <div ref={techRef} className="flex justify-center space-x-6 mb-12">
            {techIcons.map(({ icon: Icon, name, color }) => (
              <div
                key={name}
                className="group relative"
              >
                <div className="bg-portfolio-secondary/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-portfolio-accent/50 transition-all duration-300">
                  <Icon 
                    size={32} 
                    style={{ color }} 
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 whitespace-nowrap">{name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => smoothScrollTo('projects')}
              className="group bg-gradient-to-r from-portfolio-accent to-blue-600 hover:from-blue-600 hover:to-portfolio-accent text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button 
              onClick={() => smoothScrollTo('contact')}
              className="group border-2 border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-portfolio-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          {/* Social Links */}
          <div ref={socialRef} className="flex justify-center space-x-6 mt-12">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group bg-portfolio-secondary/30 backdrop-blur-sm p-3 rounded-full border border-gray-700/50 text-gray-400 hover:text-portfolio-accent hover:border-portfolio-accent/50 transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-portfolio-accent text-xl" />
      </div>
    </section>
  );
}
