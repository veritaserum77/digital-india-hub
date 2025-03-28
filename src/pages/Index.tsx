
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Slideshow from '@/components/Slideshow';
import CountUpAnimation from '@/components/CountUpAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const slideImages = [
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
];

const digitalInitiatives = [
  {
    name: "Aadhaar",
    logo: "/aadhaar-logo.png", // Placeholder - would be replaced with actual logo
    leader: "Shri Bhuvnesh Kumar",
    position: "CEO of UIDAI",
    email: "ceo@uidai.gov.in",
    description: "India's biometric-based digital identity system",
    path: "/aadhaar"
  },
  {
    name: "Unified Payments Interface (UPI)",
    logo: "/upi-logo.png", // Placeholder
    leader: "Mr. Dilip Asbe",
    position: "MD & CEO, NPCI",
    email: "ceo@npci.org.in",
    description: "India's real-time digital payment system",
    path: "/upi"
  },
  {
    name: "Co-WIN",
    logo: "/cowin-logo.png", // Placeholder
    leader: "Ms. Deepti Gaur Mukerjee",
    position: "CEO, NHA",
    email: "ceo.nha@nha.gov.in",
    description: "India's digital vaccination management platform",
    path: "/cowin"
  },
  {
    name: "DigiLocker",
    logo: "/digilocker-logo.png", // Placeholder
    leader: "Mr. Nand Kumaram",
    position: "P&CEO, NeGD",
    email: "ceo-negd@digitalindia.gov.in",
    description: "A secure cloud-based document storage system",
    path: "/digilocker"
  },
  {
    name: "Aarogya Setu",
    logo: "/aarogya-setu-logo.png", // Placeholder
    leader: "Mr. IPS Sethi",
    position: "Director General, NIC",
    email: "dg@nic.in",
    description: "India's contact tracing and health information app",
    path: "/aarogya-setu"
  },
  {
    name: "DIKSHA",
    logo: "/diksha-logo.png", // Placeholder
    leader: "Dr. Amarendra P. Behera",
    position: "Joint Director, NCERT",
    email: "jdciet.ncert@nic.in",
    description: "An e-learning platform for teachers and students",
    path: "/diksha"
  },
  {
    name: "UMANG",
    logo: "/umang-logo.png", // Placeholder
    leader: "Mr. Nand Kumaram",
    position: "P&CEO, NeGD",
    email: "ceo-negd@digitalindia.gov.in",
    description: "A unified mobile app for accessing e-governance services",
    path: "/umang"
  },
  {
    name: "eSanjeevani",
    logo: "/esanjeevani-logo.png", // Placeholder
    leader: "Mr. Magesh Ethirajan",
    position: "DG, C-DAC",
    email: "dg@cdac.in",
    description: "India's telemedicine platform for virtual healthcare consultations",
    path: "/esanjeevani"
  }
];

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Digital India Hub - Home";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-darkBg">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  India's Digital <span className="text-orange">Awakening</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Digital India Hub, your gateway to digital transformation. We showcase groundbreaking
                  initiatives revolutionizing governance, finance,
                  healthcare, and more. From UPI to DigiLocker,
                  explore how technology enhances accessibility,
                  security, and efficiency. Stay informed on
                  innovations shaping the future.
                </p>
                <Link to="/about" className="bg-orange text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-orange-dark transition-colors duration-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="animate-fade-in">
                <Slideshow images={slideImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-darkBg-lighter">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Digital <span className="text-orange">Impact</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stat-card text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">Aadhaar Enrollments</h3>
                <CountUpAnimation end={1325} suffix=" Million+" />
                <p className="mt-4 text-gray-400">Unique Digital Identities</p>
              </div>
              <div className="stat-card text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">UPI Transactions</h3>
                <CountUpAnimation end={9500} suffix=" Million+" />
                <p className="mt-4 text-gray-400">Monthly Digital Payments</p>
              </div>
              <div className="stat-card text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-300">DigiLocker Users</h3>
                <CountUpAnimation end={125} suffix=" Million+" />
                <p className="mt-4 text-gray-400">Using Digital Document Storage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Initiatives Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Digital Public <span className="text-orange">Infrastructure</span></h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Explore India's key digital initiatives led by visionary leaders transforming governance and citizen services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalInitiatives.map((initiative, index) => (
                <Link to={initiative.path} key={index} className="initiative-card">
                  <div className="h-16 w-16 bg-darkBg-lighter rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-orange text-xl font-bold">{initiative.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{initiative.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{initiative.leader}, {initiative.position}</p>
                  <p className="text-orange-light text-sm mb-4">{initiative.email}</p>
                  <p className="text-gray-300">{initiative.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 bg-darkBg-lighter">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Social <span className="text-orange">Updates</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-blue-800 p-3 rounded-t-lg">
                  <h3 className="text-white font-medium">Digital India on Twitter</h3>
                </div>
                <div className="social-card">
                  <p className="text-gray-400 text-center py-8">
                    Twitter feed will be integrated here
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-blue-800 p-3 rounded-t-lg">
                  <h3 className="text-white font-medium">Digital India on Facebook</h3>
                </div>
                <div className="social-card">
                  <div className="p-4 border-b border-gray-700">
                    <p className="text-gray-300 mb-2">
                      Promoting handmade Indian products and supporting local artisans. #VocalForLocal #MakeInIndia
                    </p>
                    <p className="text-gray-500 text-sm">Posted 3 days ago</p>
                  </div>
                  <div className="p-4 border-b border-gray-700">
                    <p className="text-gray-300 mb-2">
                      Join our campaign on Swabhav Swachhata as part of Swachh Bharat Abhiyan. #SHS2024 #SwachhBharat
                    </p>
                    <p className="text-gray-500 text-sm">Posted 5 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-8">
              <div className="stat-card text-center py-4 px-8">
                <h3 className="text-lg font-medium text-gray-300">Total Visitors</h3>
                <CountUpAnimation end={5522273} />
              </div>
              <div className="stat-card text-center py-4 px-8">
                <h3 className="text-lg font-medium text-gray-300">Today's Visitors</h3>
                <CountUpAnimation end={7601} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
