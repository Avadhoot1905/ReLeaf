import React from 'react';
import Navbar from '@/components/Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div  
          className="bg-cover bg-center w-full h-[857px] relative"
          style={{ backgroundImage: "url('page1.png')" }}
        >
          <div className="absolute left-[15px] top-[166px] w-full text-white font-['Perpetua_Titling_MT'] text-[128px] font-light leading-none">
            <h1>RELEAF</h1>
            <h1>OUR INDIA</h1>
          </div>
          <div className="text-white font-['Perpetua'] absolute top-[450px] text-[50px] font-normal leading-normal p-[20px]">
            <p>Smarter Recycling, Faster & Greener—Optimizing Collection,</p>
            <p>Streamlining, and Transport for a Sustainable Future!</p>
          </div>
        </div>
      </div>

      {/* Join RELEAF Section - Added Here */}
      <div className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Join RELEAF as</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Truck Driver */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img 
                src="/mdi_truck.png" 
                alt="Truck Driver" 
                className="w-24 h-24"
              />
            </div>
            <button className="bg-[#508D4E] text-white px-6 py-2 rounded-full hover:bg-[#3f7a3d] transition-colors">
              Truck Driver
            </button>
          </div>

          {/* Processing Unit 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img 
                src="/ic_baseline-factory.png" 
                alt="Processing Unit" 
                className="w-24 h-24"
              />
            </div>
            <button className="bg-[#508D4E] text-white px-6 py-2 rounded-full hover:bg-[#3f7a3d] transition-colors">
              Processing Unit
            </button>
          </div>

          {/* Processing Unit 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img 
                src="/ri_government-fill.png" 
                alt="Processing Unit" 
                className="w-24 h-24"
              />
            </div>
            <button className="bg-[#508D4E] text-white px-6 py-2 rounded-full hover:bg-[#3f7a3d] transition-colors">
              Processing Unit
            </button>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-[#d9d9d9]">
        <div className="bg-green-600 p-8 rounded-lg max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">What we do?</h2>
              <p className="text-gray-100">
                At Releaf, we are dedicated to streamlining waste management processes 
                for government agencies. As a comprehensive, user-friendly platform, 
                Releaf serves as a centralized solution for coordinating the efficient 
                transport of waste from various locations to designated collection centers. 
                Our mission is to support government initiatives in maintaining cleaner, 
                healthier environments by simplifying the logistics of waste collection 
                and ensuring timely, organized, and eco-friendly waste transportation.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="../stockGraphic.svg" 
                alt="Analytics illustration" 
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {featureCards.map((card, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path 
                      fillRule="evenodd" 
                      d={card.svgPath} 
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 text-gray-600">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-min-h-screen overflow-hidden ">
        <div className="flex">
          <img src='../Releaf_Banner.svg' alt='Banner' className='w-full max-w-md'/>
          <img src='../Releaf_Banner.svg' alt='Banner' className='w-full max-w-md'/>
          <img src='../Releaf_Banner.svg' alt='Banner' className='w-full max-w-md'/>
          <img src='../Releaf_Banner.svg' alt='Banner' className='w-full max-w-md'/>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-t border-gray-200 py-4">
              <button className="flex justify-between w-full text-left">
                <span className="text-lg font-medium">{item.question}</span>
                <span className="text-green-600">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-600">Get in Touch</h2>
          <p className="mb-8 text-gray-600">Hey! We are looking forward to get in touch with you and answer your queries</p>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-600 ">Phone Number</h3>
                <p className='text-gray-600'>+1234567890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-600">Location</h3>
                <p className='text-gray-600'>Vellore, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 text-gray-700">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Enter valid Email address"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Tickets & Booking</h3>
            <ul className="space-y-2">
              <li>Lift Tickets</li>
              <li>Season Passes</li>
              <li>Vacation Packages</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Press Releases</li>
              <li>Environment</li>
              <li>Jobs</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Hotel Reservation: 123-456-7890</li>
              <li>Main Office: 098-765-4321</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-600">Facebook</a>
              <a href="#" className="hover:text-green-600">Twitter</a>
              <a href="#" className="hover:text-green-600">YouTube</a>
              <a href="#" className="hover:text-green-600">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

// Feature cards data
const featureCards = [
  {
    title: "Centralized Platform",
    description: "One-stop solution for managing all government waste transport needs from various locations",
    svgPath: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  },
  {
    title: "Efficient Order Management",
    description: "Your investments and personal data are protected with state-of-the-art security measures",
    svgPath: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
  },
  {
    title: "Real-Time Monitoring",
    description: "Provides real-time updates with helpful info ensuring transparency and accountability",
    svgPath: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
  },
  {
    title: "Optimized Logistics",
    description: "Navigate our intuitive platform with ease, whether you're new to investing or a seasoned pro",
    svgPath: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
  },
  {
    title: "Support for Sustainable Practices",
    description: "Our AI-driven insights help you manage your investments",
    svgPath: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
  }
];

const faqItems = [
  {
    question: "What does Releaf do?",
    answer: "Releaf provides comprehensive waste management solutions..."
  },
  {
    question: "How does Releaf do what they do?",
    answer: "Through our innovative platform and network..."
  },
  {
    question: "Who should choose Releaf?",
    answer: "Government agencies and organizations looking to optimize waste management..."
  },
  {
    question: "How should I make payment?",
    answer: "We offer various secure payment options..."
  },
  {
    question: "How will this be beneficial?",
    answer: "Our solution streamlines waste management processes..."
  }
];

export default LandingPage;

