
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Digital India Hub - Contact";
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Success",
      description: "Your message has been sent. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-darkBg">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-white text-center">Contact <span className="text-orange">Us</span></h1>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-darkBg-light rounded-lg p-6 text-center shadow-lg">
                  <Mail className="h-10 w-10 text-orange mx-auto mb-4" />
                  <h2 className="text-xl font-semibold mb-2 text-white">Email</h2>
                  <p className="text-gray-300">info@digitalindiahub.gov.in</p>
                  <p className="text-gray-300">support@digitalindiahub.gov.in</p>
                </div>
                
                <div className="bg-darkBg-light rounded-lg p-6 text-center shadow-lg">
                  <Phone className="h-10 w-10 text-orange mx-auto mb-4" />
                  <h2 className="text-xl font-semibold mb-2 text-white">Phone</h2>
                  <p className="text-gray-300">+91 11 2430 1200</p>
                  <p className="text-gray-300">Toll Free: 1800 111 555</p>
                </div>
                
                <div className="bg-darkBg-light rounded-lg p-6 text-center shadow-lg">
                  <MapPin className="h-10 w-10 text-orange mx-auto mb-4" />
                  <h2 className="text-xl font-semibold mb-2 text-white">Address</h2>
                  <p className="text-gray-300">
                    Electronics Niketan, 6, CGO Complex,
                    <br />
                    Lodhi Road, New Delhi - 110003
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2 bg-darkBg-light rounded-lg p-6 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h2>
                  <p className="text-gray-300 mb-6">
                    Have questions about Digital India initiatives? Want to collaborate or report an issue? 
                    Fill out the form, and our team will get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">Office Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:30 PM</p>
                      <p className="text-gray-300">Saturday & Sunday: Closed</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-white">Connect with Us</h3>
                      <p className="text-gray-300">
                        Follow us on social media platforms for the latest updates and announcements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 bg-darkBg-light rounded-lg p-6 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6 text-white">Contact Form</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-gray-300 block">
                          Name <span className="text-orange">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="bg-darkBg-lighter border-darkBg-lighter focus:border-orange text-white"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-gray-300 block">
                          Email <span className="text-orange">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          className="bg-darkBg-lighter border-darkBg-lighter focus:border-orange text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-gray-300 block">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        className="bg-darkBg-lighter border-darkBg-lighter focus:border-orange text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-gray-300 block">
                        Message <span className="text-orange">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className="bg-darkBg-lighter border-darkBg-lighter focus:border-orange text-white"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-orange hover:bg-orange-dark text-white px-6 py-2"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
