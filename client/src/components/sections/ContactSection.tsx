import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please enter a subject" }),
  message: z.string().min(1, { message: "Please enter your message" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Have a question or want to work with us? Send us a message!
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-violet-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-4 text-blue-200"></i>
                    <p>123 Web Street, Digital City, Internet 10010</p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-4 text-blue-200"></i>
                    <p>contact@modernweb.com</p>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone mt-1 mr-4 text-blue-200"></i>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                      <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                      <i className="fab fa-facebook text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-sm mt-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your email" 
                                {...field} 
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 text-sm mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Subject" 
                              {...field} 
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              {...field} 
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                              rows={4}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <i className="fas fa-paper-plane ml-2"></i>
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
