import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/pariarul", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pari-arul-ab874b358/", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://wa.me/9361430865", label: "WhatsApp" },
    { icon: Mail, href: "mailto:pariarul@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-portfolio-secondary py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-portfolio-accent mb-4">PARI ARUL</div>
          <p className="text-gray-300 mb-6">
            Full Stack Developer passionate about creating amazing web experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-portfolio-accent transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-yellow-400">
              © 2025 Pari Arul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
