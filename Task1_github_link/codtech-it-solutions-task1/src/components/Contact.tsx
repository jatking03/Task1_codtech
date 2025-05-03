
import { useState, useRef, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";

// EmailJS configuration
const SERVICE_ID = 'service_s5z8k86'; // EmailJS service ID
const TEMPLATE_ID = 'template_contact'; // You'll need to create a template in EmailJS dashboard
const USER_ID = 'service_s5z8k86'; // Updated with the provided service ID

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        to_name: "Jatin Gupta",
        from_email: formData.email,
        to_email: "jguptamodern@gmail.com",
        subject: formData.subject,
        message: formData.message,
      };
      
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon!",
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding py-16 md:py-24" ref={sectionRef}>
      <h2 className="numbered-heading mb-6 md:mb-8 justify-center" data-number="04.">
        Get In Touch
      </h2>

      <div className="max-w-md mx-auto text-center mb-8 md:mb-12 px-4">
        <p className="text-portfolio-text-secondary text-sm md:text-base">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hello, I'll do my best to get back to you!
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="name" className="text-portfolio-text block mb-1 md:mb-2 text-sm">Name</label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Your name" 
                className="bg-portfolio-light-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent text-sm md:text-base"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-portfolio-text block mb-1 md:mb-2 text-sm">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com" 
                className="bg-portfolio-light-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent text-sm md:text-base"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="text-portfolio-text block mb-1 md:mb-2 text-sm">Subject</label>
            <Input 
              id="subject" 
              type="text" 
              placeholder="How can I help you?" 
              className="bg-portfolio-light-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent text-sm md:text-base"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-portfolio-text block mb-1 md:mb-2 text-sm">Message</label>
            <Textarea 
              id="message" 
              placeholder="Your message here..." 
              className="bg-portfolio-light-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent min-h-[120px] md:min-h-[150px] text-sm md:text-base"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <div className="text-center pt-2">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 py-4 md:py-6 px-6 md:px-8 text-sm md:text-base font-mono w-full sm:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
