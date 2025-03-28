
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const digitalGoods = [
  { name: "DigiLocker", path: "/digilocker" },
  { name: "Unified Payments Interface (UPI)", path: "/upi" },
  { name: "UMANG", path: "/umang" },
  { name: "API Setu", path: "/api-setu" },
  { name: "e-Courts", path: "/e-courts" },
  { name: "SIDH", path: "/sidh" },
  { name: "e-Office", path: "/e-office" },
  { name: "Aarogya Setu", path: "/aarogya-setu" },
  { name: "eSanjeevani", path: "/esanjeevani" },
  { name: "Poshan Tracker", path: "/poshan-tracker" },
  { name: "Co-WIN", path: "/cowin" },
  { name: "DIKSHA", path: "/diksha" },
  { name: "GeM", path: "/gem" },
  { name: "e-Hospital", path: "/e-hospital" },
  { name: "NCD Platform", path: "/ncd-platform" },
  { name: "Aadhaar", path: "/aadhaar" },
  { name: "Ayushman Bharat Digital Mission", path: "/abdm" },
  { name: "BharatNet", path: "/bharatnet" },
  { name: "PM-WANI", path: "/pm-wani" },
  { name: "CERT-In", path: "/cert-in" },
  { name: "DigiYatra", path: "/digiyatra" },
  { name: "SWAYAM", path: "/swayam" },
  { name: "National Digital Library", path: "/ndl" },
  { name: "Parivahan Sewa", path: "/parivahan" },
  { name: "FASTag", path: "/fastag" },
  { name: "VAHAN & SARATHI", path: "/vahan-sarathi" },
  { name: "Passport Seva", path: "/passport" },
  { name: "eNAM", path: "/enam" },
  { name: "Kisan Suvidha", path: "/kisan-suvidha" },
  { name: "RAPDRP", path: "/rapdrp" }
];

// Group items into columns
const getColumnedItems = () => {
  const itemsPerColumn = Math.ceil(digitalGoods.length / 3);
  const columns = [[], [], []];
  
  digitalGoods.forEach((item, index) => {
    const columnIndex = Math.floor(index / itemsPerColumn);
    columns[columnIndex].push(item);
  });
  
  return columns;
};

const Navbar: React.FC = () => {
  const [columnedItems, setColumnedItems] = useState<any[][]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setColumnedItems(getColumnedItems());
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-4 text-center">
        <h1 className="text-3xl font-bold text-orange mb-2">Digital India Hub</h1>
      </div>
      <nav className={`bg-darkBg-light py-4 sticky top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'shadow-orange/20' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <Link to="/" className="menu-item text-lg font-medium px-2 py-1">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="menu-item text-lg font-medium px-2 py-1 flex items-center">
                Digital Global Goods <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-darkBg-light border border-gray-700 p-4 w-[800px] grid grid-cols-3 gap-4">
                {columnedItems.map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col space-y-2">
                    {column.map((item, itemIndex) => (
                      <DropdownMenuItem key={itemIndex} asChild>
                        <Link
                          to={item.path}
                          className="menu-item px-2 py-1 text-sm hover:bg-transparent"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/about" className="menu-item text-lg font-medium px-2 py-1">
              About
            </Link>
            
            <Link to="/contact" className="menu-item text-lg font-medium px-2 py-1">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
