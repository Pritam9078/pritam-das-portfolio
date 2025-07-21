import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Linkedin, Github, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="cyber-text">Let's Build Together</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-300 text-lg">
                I'm always excited to discuss Web3 projects, AI innovations, or potential collaborations. Whether you're looking for a blockchain developer, AI explorer, or just want to chat about the future of tech, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(197,100%,50%)] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Mail className="text-[hsl(197,100%,50%)]" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">dpritam2708@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(258,84%,69%)] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Linkedin className="text-[hsl(258,84%,69%)]" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-400">linkedin.com/in/pritam-das-738aaa237</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(158,100%,50%)] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Github className="text-[hsl(158,100%,50%)]" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-gray-400">github.com/Pritam9078</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[hsl(197,100%,50%)] bg-opacity-20 rounded-full flex items-center justify-center">
                  <Phone className="text-[hsl(197,100%,50%)]" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+91 7683927667</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-gray-800 border-gray-700 focus:border-[hsl(197,100%,50%)] focus:ring-[hsl(197,100%,50%)]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="bg-gray-800 border-gray-700 focus:border-[hsl(197,100%,50%)] focus:ring-[hsl(197,100%,50%)]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-[hsl(197,100%,50%)] focus:ring-[hsl(197,100%,50%)]">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="collaboration">Project Collaboration</SelectItem>
                          <SelectItem value="internship">Internship Opportunity</SelectItem>
                          <SelectItem value="freelance">Freelance Work</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or idea..." 
                          rows={5}
                          className="bg-gray-800 border-gray-700 focus:border-[hsl(197,100%,50%)] focus:ring-[hsl(197,100%,50%)]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full cyber-gradient text-black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
