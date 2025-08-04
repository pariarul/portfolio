import { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";

export default function SidebarNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/pariarul", label: "GitHub", color: "#333" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pari-arul-ab874b358/", label: "LinkedIn", color: "#0077B5" },
    { icon: FaWhatsapp, href: "https://wa.me/9361430865", label: "WhatsApp", color: "#25D366" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate sidebar
  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to(".sidebar", {
        x: 0,
        duration: 0.4,
        ease: "power3.out"
      });
      gsap.fromTo(".sidebar-item", {
        opacity: 0,
        x: -20
      }, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.1,
        delay: 0.2,
        ease: "power2.out"
      });
    } else {
      gsap.to(".sidebar", {
        x: "-100%",
        duration: 0.3,
        ease: "power3.in"
      });
    }
  }, [isSidebarOpen]);

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setIsSidebarOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-portfolio-primary/95 backdrop-blur-md border-r border-portfolio-secondary z-50 hidden lg:flex flex-col items-center py-8">
        {/* Logo */}
        <div className="w-12 h-12 bg-yellow-400 bg-to-br from-portfolio-accent to-yellow-600 rounded-xl flex items-center justify-center mb-8 shadow-lg">
          <span className="text-y font-bold text-lg">PA</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col space-y-6 flex-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-portfolio-accent text-white shadow-lg' 
                    : 'text-gray-400 hover:text-portfolio-accent hover:bg-portfolio-secondary'
                }`}
                title={item.label}
              >
                <IconComponent size={20} />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-portfolio-secondary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-portfolio-secondary rotate-45"></div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-portfolio-accent rounded-full"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              style={{ ':hover': { color } }}
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Top Bar */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-portfolio-primary/95 backdrop-blur-md border-b border-portfolio-secondary z-50 flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 bg-to-br from-portfolio-accent to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">PA</span>
            </div>
            <span className="text-white font-semibold">PARI ARUL</span>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-white hover:text-portfolio-accent transition-colors duration-300"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`sidebar fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-portfolio-primary/98 backdrop-blur-md border-r border-portfolio-secondary z-40 transform -translate-x-full shadow-2xl`}>
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Profile Section */}
            <div className="sidebar-item text-center mb-8">
              <div className="w-20 h-20 bg-yellow-400 bg-to-br from-portfolio-accent to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <span className="text-white font-bold text-2xl">PA</span>
              </div>
              <h3 className="text-white font-semibold text-lg">PARI ARUL</h3>
              <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`sidebar-item w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-portfolio-accent text-white shadow-lg transform scale-105' 
                        : 'text-gray-300 hover:text-white hover:bg-portfolio-secondary hover:transform hover:scale-105'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Social Links */}
            <div className="sidebar-item">
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 bg-portfolio-secondary rounded-full text-gray-400 hover:text-portfolio-accent hover:bg-portfolio-accent/20 transition-all duration-300 hover:scale-110 transform"
                    title={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>

      {/* Content Spacer for Desktop */}
      <div className="hidden lg:block w-20" />
    </>
  );
}