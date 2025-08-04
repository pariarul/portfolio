import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroimage from "../assets/pari-photo.jpg"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stats = [
    { value: "20+", label: "Projects Completed" },
    { value: "3 +", label: "Years Experience" },
    { value: "17+", label: "Happy Clients" },
    { value: "21+", label: "Technologies" },
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

    tl.fromTo(imageRef.current, {
      opacity: 0,
      x: -100,
      scale: 0.8
    }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    .fromTo(contentRef.current?.children || [], {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5")
    .fromTo(statsRef.current?.children || [], {
      opacity: 0,
      y: 30,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.3");

    // Counter animation for stats
    stats.forEach((stat, index) => {
      const element = statsRef.current?.children[index]?.querySelector('.stat-value');
      if (element) {
        const finalValue = parseInt(stat.value.replace(/\D/g, ''));
        const counter = { value: 0 };
        
        gsap.to(counter, {
          value: finalValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          },
          onUpdate: function() {
            const currentValue = Math.floor(counter.value);
            element.textContent = stat.value.includes('+') ? `${currentValue}+` : currentValue.toString();
          }
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-portfolio-secondary lg:py-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef}>
            <div className="relative group">
              <img 
                src={heroimage} 
                alt="Alex Johnson - Professional headshot" 
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-blue-600/10 rounded-xl group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Passionate Developer & Problem Solver</h3>
<p className="text-gray-300 text-lg leading-relaxed">
  With 2.5 years of experience in full stack development, I specialize in building responsive
   and scalable web applications. My journey started with a strong foundation in computer science and
    has grown through hands-on work with both startups and mid-sized companies, focusing on delivering smooth user experiences and clean, maintainable code.
</p>
     <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about modern web technologies, clean architecture, and continuous learning. 
              When I'm not coding, you'll find me contributing to open source projects, writing technical 
              blogs, or exploring the latest in web development trends.
            </p>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group bg-portfolio-primary p-6 rounded-xl border border-gray-700 hover:border-portfolio-accent transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h4 className="stat-value text-portfolio-accent font-bold mb-2 text-2xl">0</h4>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
