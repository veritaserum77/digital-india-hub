
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

// This is a placeholder for actual data that would likely come from an API or database
const digitalGoodsData = {
  "digilocker": {
    title: "DigiLocker",
    description: "DigiLocker is a flagship initiative under the Digital India programme that aims to transform India into a digitally empowered society. It provides a platform for issuance and verification of documents and certificates digitally, thus eliminating the use of physical documents.",
    features: [
      "Secure document storage in the cloud",
      "Issued documents from various government departments",
      "Digital signing of documents",
      "Sharing of verified documents",
      "Reduction in administrative overhead"
    ],
    impact: "DigiLocker has over 125 million registered users and hosts more than 5.6 billion documents. It has significantly reduced the need for physical documents, streamlined verification processes, and enhanced document security.",
    implementation: "Implemented by the National e-Governance Division (NeGD) under the Ministry of Electronics and Information Technology (MeitY). DigiLocker is accessible through web and mobile applications, and is integrated with various government services.",
    leaders: [
      {
        name: "Mr. Nand Kumaram",
        position: "P&CEO, NeGD",
        email: "ceo-negd@digitalindia.gov.in"
      },
      {
        name: "Mr. Debabrata Nayak",
        position: "Director, NeGD",
        email: "dnayak@digitalindia.gov.in"
      }
    ]
  },
  "upi": {
    title: "Unified Payments Interface (UPI)",
    description: "Unified Payments Interface (UPI) is a real-time payment system developed by the National Payments Corporation of India (NPCI). It facilitates inter-bank transactions by instantly transferring funds between two bank accounts on a mobile platform.",
    features: [
      "Instant fund transfer 24/7",
      "Multiple bank accounts in a single application",
      "QR code-based payments",
      "Integration with multiple payment apps",
      "Single click authentication"
    ],
    impact: "UPI has revolutionized digital payments in India. In 2023, UPI processed over 9.3 billion transactions monthly, amounting to over $200 billion. It has played a significant role in promoting financial inclusion and cashless transactions.",
    implementation: "UPI is developed and managed by the National Payments Corporation of India (NPCI). It operates through various banking and non-banking payment apps and is regulated by the Reserve Bank of India (RBI).",
    leaders: [
      {
        name: "Mr. Dilip Asbe",
        position: "MD & CEO, NPCI",
        email: "ceo@npci.org.in"
      },
      {
        name: "Mr. Ritesh Shukla",
        position: "CEO, NPCI International Payments Ltd",
        email: "ritesh.shukla@npci.org.in"
      }
    ]
  },
  // Add similar data structures for other digital goods
};

type DigitalGoodParams = {
  id: string;
};

const DigitalGoodTemplate: React.FC = () => {
  const { id } = useParams<DigitalGoodParams>();
  const goodData = id && digitalGoodsData[id as keyof typeof digitalGoodsData];
  
  useEffect(() => {
    if (goodData) {
      document.title = `Digital India Hub - ${goodData.title}`;
    } else {
      document.title = "Digital India Hub - Digital Good";
    }
  }, [goodData]);

  if (!goodData) {
    return (
      <div className="min-h-screen flex flex-col bg-darkBg">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-orange mb-4">Digital Good Not Found</h1>
            <p className="text-gray-300 mb-6">Sorry, the digital good you're looking for doesn't exist.</p>
            <Link to="/" className="bg-orange text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-orange-dark transition-colors duration-300">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-darkBg">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/" className="text-gray-400 hover:text-orange transition-colors duration-300 inline-flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
              </Link>
            </div>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-white">{goodData.title}</h1>
              
              <div className="bg-darkBg-light rounded-lg p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-orange">Overview</h2>
                <p className="text-gray-300 mb-6">{goodData.description}</p>
                
                <h2 className="text-2xl font-semibold mb-4 text-orange">Key Features</h2>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  {goodData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4 text-orange">Impact and Adoption</h2>
                <p className="text-gray-300 mb-6">{goodData.impact}</p>
                
                <h2 className="text-2xl font-semibold mb-4 text-orange">Implementation</h2>
                <p className="text-gray-300 mb-6">{goodData.implementation}</p>
              </div>

              <div className="bg-darkBg-light rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-orange">Leadership</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {goodData.leaders.map((leader, index) => (
                    <div key={index} className="bg-darkBg-lighter p-6 rounded-lg">
                      <h3 className="text-xl font-medium mb-1 text-white">{leader.name}</h3>
                      <p className="text-gray-400 mb-2">{leader.position}</p>
                      <p className="text-orange-light">{leader.email}</p>
                    </div>
                  ))}
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

export default DigitalGoodTemplate;
