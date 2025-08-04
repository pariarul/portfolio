import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin,  Loader2, Whatsapp} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { FaWhatsapp } from "react-icons/fa";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<ContactFormData>>({});
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormErrors({});
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormData> = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      contactMutation.mutate(formData);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pariaarul@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9361430865"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Coimbatore, Tamil Nadu, India"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/pariarul", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pari-arul-ab874b358/", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "https://wa.me/9361430865", label: "WhatsApp" },

  ];

  return (
    <section id="contact" className="py-16 lg:py-20 bg-portfolio-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-portfolio-accent/20 p-3 rounded-lg">
                      <IconComponent className="text-portfolio-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="bg-portfolio-secondary hover:bg-portfolio-accent p-3 rounded-lg transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-portfolio-secondary p-8 rounded-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-2 bg-portfolio-primary border-gray-600 text-white focus:border-portfolio-accent"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-2 bg-portfolio-primary border-gray-600 text-white focus:border-portfolio-accent"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 bg-portfolio-primary border-gray-600 text-white focus:border-portfolio-accent"
                />
                {formErrors.email && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="mt-2 bg-portfolio-primary border-gray-600 text-white focus:border-portfolio-accent"
                />
                {formErrors.subject && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.subject}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-2 bg-portfolio-primary border-gray-600 text-white focus:border-portfolio-accent resize-vertical"
                />
                {formErrors.message && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-portfolio-accent hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
