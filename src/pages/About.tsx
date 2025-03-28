
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Digital India Hub - About";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-darkBg">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-white text-center">About <span className="text-orange">Digital India Hub</span></h1>
            
            <div className="max-w-4xl mx-auto bg-darkBg-light rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Digital India Hub is dedicated to showcasing India's digital transformation journey and the various 
                technological initiatives that are revolutionizing the way citizens interact with government services. 
                Our mission is to educate, inform, and promote awareness about the digital public infrastructure 
                that is making India a leader in digital innovation.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-white">Digital India Programme</h2>
              <p className="text-gray-300 mb-6">
                Launched in 2015, the Digital India programme is a flagship initiative of the Government of India with a 
                vision to transform India into a digitally empowered society and knowledge economy. The programme centers 
                around three key vision areas:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-darkBg-lighter p-6 rounded-lg border-l-4 border-orange">
                  <h3 className="text-xl font-medium mb-2 text-orange-light">Digital Infrastructure</h3>
                  <p className="text-gray-400">
                    Creating a robust digital infrastructure as a utility to every citizen
                  </p>
                </div>
                <div className="bg-darkBg-lighter p-6 rounded-lg border-l-4 border-orange">
                  <h3 className="text-xl font-medium mb-2 text-orange-light">Governance & Services</h3>
                  <p className="text-gray-400">
                    Delivering governance and services on demand electronically
                  </p>
                </div>
                <div className="bg-darkBg-lighter p-6 rounded-lg border-l-4 border-orange">
                  <h3 className="text-xl font-medium mb-2 text-orange-light">Digital Empowerment</h3>
                  <p className="text-gray-400">
                    Empowering citizens through digital literacy and universal access
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Work</h2>
              <p className="text-gray-300 mb-6">
                At Digital India Hub, we work to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Document and showcase the various digital initiatives under the Digital India programme</li>
                <li>Provide accurate and up-to-date information about digital public goods and infrastructure</li>
                <li>Connect citizens with the right digital services to meet their needs</li>
                <li>Highlight success stories and the impact of digital transformation on everyday lives</li>
                <li>Educate the public about emerging technologies and their applications</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 text-white">The Team</h2>
              <p className="text-gray-300">
                Digital India Hub is maintained by a team of technology enthusiasts, policy experts, and digital 
                advocates who are passionate about India's digital journey. We work closely with various government 
                departments, industry partners, and academic institutions to bring you the most comprehensive 
                information about India's digital landscape.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
