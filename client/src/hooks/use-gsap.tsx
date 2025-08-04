import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // This function will be called when the component mounts
    }, scope);

    return () => ctx.revert(); // Cleanup
  }, []);

  return scope;
};

export const useScrollAnimation = (selector: string, animation: gsap.TweenVars, trigger?: string) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element: any) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        {
          ...animation,
          scrollTrigger: {
            trigger: trigger || element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animation, trigger]);
};

export const useFadeInAnimation = (selector: string, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(selector, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        delay,
        ease: "power2.out"
      }
    );
  }, [selector, delay]);
};

export const useTypewriterEffect = (selector: string, text: string, speed = 0.05) => {
  useEffect(() => {
    const element = document.querySelector(selector) as HTMLElement;
    if (!element) return;

    element.innerHTML = "";
    
    gsap.to({}, {
      duration: text.length * speed,
      ease: "none",
      onUpdate: function() {
        const progress = this.progress();
        const currentLength = Math.floor(progress * text.length);
        element.innerHTML = text.slice(0, currentLength) + 
          (progress < 1 ? '<span class="animate-pulse">|</span>' : '');
      }
    });
  }, [selector, text, speed]);
};

export { gsap };