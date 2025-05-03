
"use client"
import { useState, useEffect } from 'react';
import { Download, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppLaunchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // App details - customize these values
  const appName = "smatpay";
  const appTagline = "Simplify your life";
  const appDescription = "A powerful yet simple tool that helps you stay organized and productive.";
  const downloadLink = "#download"; // Replace with actual download link
  
  // Features list - simplified
  const features = [
    {
      title: "Simple & Fast",
      description: "Clean design with lightning-fast performance"
    },
    {
      title: "Secure",
      description: "Your data is protected with industry-leading encryption"
    },
    {
      title: "Cross-Platform",
      description: "Works seamlessly across all your devices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white bg-opacity-95 shadow-md backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex-shrink-0 flex items-center">
                <motion.span 
                  className="text-purple-700 font-bold text-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  {appName}
                </motion.span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <motion.a 
                  href="#features" 
                  className="text-gray-500 hover:text-blue-600 inline-flex items-center px-1 py-1 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#download" 
                  className="text-gray-500 hover:text-blue-600 inline-flex items-center px-1 py-1 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Download
                </motion.a>
              </div>
            </motion.div>
            <div className="sm:hidden flex items-center">
              <motion.button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 focus:outline-none"
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="sm:hidden bg-white bg-opacity-95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-1">
              <motion.a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                whileHover={{ x: 5 }}
              >
                Features
              </motion.a>
              <motion.a 
                href="#download" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
                whileHover={{ x: 5 }}
              >
                Download
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-purple-700">{appName}</span>
              </motion.h1>
              <motion.p 
                className="mt-4 text-xl text-gray-600 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {appTagline}
              </motion.p>
              <motion.p 
                className="mt-2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {appDescription}
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.a
                  href={downloadLink}
                  className="px-8 py-3 rounded-lg text-white bg-purple-700 font-medium flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} className="mr-2" />
                  Download Now
                </motion.a>
                <motion.a
                  href="#features"
                  className="px-8 py-3 rounded-lg bg-white text-purple-700 font-medium flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ChevronRight size={20} className="ml-2" />
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div 
                className="relative w-64 h-64"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 bg-purple-700 rounded-3xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold transform rotate-3">
                  smatpay App
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose {appName}?
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Everything you need, nothing you don't.
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-purple-700 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="h-16 w-16 rounded-full bg-black text-blue-600 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-white">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download" className="bg-purple-700 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white">
              Ready to Try {appName}?
            </h2>
            <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
              Download now and start experiencing the difference.
            </p>
            
            <motion.div 
              className="mt-12 inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={downloadLink}
                className="px-10 py-4 rounded-full text-white bg-black text-lg font-medium flex items-center justify-center shadow-lg  transition-colors duration-300 "
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={22} className="mr-2" />
                Download {appName}
              </motion.a>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-sm text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Available for iOS and Android
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="font-medium text-lg mb-2">{appName}</div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {appName}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}