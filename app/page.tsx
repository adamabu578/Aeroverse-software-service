"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"
import Image from "next/image"

import { Download, ChevronRight, Menu, X, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function AppLaunchPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [formStatus, setFormStatus] = useState<{
    submitting: boolean
    submitted: boolean
    error: string | null
  }>({
    submitting: false,
    submitted: false,
    error: null,
  })

  const formRef = useRef<HTMLFormElement | null>(null)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ submitting: true, submitted: false, error: null })

    // Replace these with your actual EmailJS credentials
    const serviceId = "service_n5ev2m5"
    const templateId = "template_zw92h1a"
    const publicKey = "e9Tht_Br8bnu563wU"

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          setFormStatus({ submitting: false, submitted: true, error: null })
          setFormData({ name: "", email: "" })
          // After successful submission, you might want to redirect to download
          setTimeout(() => {
            const downloadButton = document.getElementById("download-button")
            if (downloadButton) {
              downloadButton.click()
            }
          }, 1500)
        })
        .catch((error) => {
          setFormStatus({ submitting: false, submitted: false, error: error.text })
        })
    } else {
      setFormStatus({ submitting: false, submitted: false, error: "Form reference is null" })
    }
  }

  // App details - customize these values
  const appName = "smatpay"
  const appTagline = "Manage and pay All your Bills, From One Place!"
  const appDescription = "Your Trusted VTU and Bill Payment Platform for Quick Seamless Transactions,Anywhere,Anytime!"
  const downloadLink = "#download" // Replace with actual download link

  // Features list - simplified
  const features = [
    {
      title: "Pay bills on the go",
      description: "manage and settle your bills anytime, anywhere.",
    },
    {
      title: "Secure",
      description: "Your data is protected with industry-leading encryption",
    },
    {
      title: "Cross-Platform",
      description: "Works seamlessly across all your devices",
    },
  ]

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
                <motion.span className="text-purple-700 font-bold text-xl" whileHover={{ scale: 1.05 }}>
                  {/* {appName} */}
                  <img src={"/assets/smatpay.png"} alt="Logo" className="h-15 w-20 mr-2" />
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
                  href="https://downloads.smatpay.live/smatpay.apk"
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
        <AnimatePresence>
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
        </AnimatePresence>
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
                  href="https://downloads.smatpay.live/smatpay.apk"
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
                className="relative w-80 h-80"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-purple-700 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3">
                  <motion.div
                    className="flex flex-col items-center justify-center text-white w-full h-full relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    {/* Text animations */}
                    <motion.span
                      className="text-5xl font-bold mb-2 z-10"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.8,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      Finally
                    </motion.span>
                    <motion.span
                      className="text-6xl font-extrabold z-10"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 1.2,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 120,
                      }}
                    >
                      LAUNCH
                    </motion.span>
                    <motion.div
                      className="mt-4 bg-white px-4 py-1 rounded-full z-10"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      <motion.span
                        className="text-purple-700 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.9, duration: 0.3 }}
                      >
                        {appName}
                      </motion.span>
                    </motion.div>
                    {/* Add background image */}
                    <motion.div
                      className="absolute inset-0 z-0 opacity-30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ delay: 0.5, duration: 1 }}
                    >
                      <Image
                        src="/assets/cartoon.png"
                        alt="App launch background"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    </motion.div>
                  </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-900">Why Choose {appName}?</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Your top payment platform with reliable user-service experience
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
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-white">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Download Section with Email Form */}
      <div id="download" className="bg-purple-700 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white">Ready to Try {appName}?</h2>
            <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
              Enter your details to receive the download link via email.
            </p>

            <motion.div
              className="mt-12 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {!formStatus.submitted ? (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-white shadow-lg rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder=""
                      required
                    />
                  </div>

                  {formStatus.error && <div className="mb-4 text-red-500 text-sm">Error: {formStatus.error}</div>}

                  <motion.button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full px-6 py-3 rounded-lg text-white bg-purple-700 font-medium flex items-center justify-center shadow-md hover:bg-purple-800 transition-colors duration-300 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formStatus.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Download Link
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">We've sent the download link to your email.</p>
                  <motion.a
                    id="download-button"
                    href={downloadLink}
                    className="px-6 py-2 rounded-lg text-white bg-purple-700 font-medium inline-flex items-center justify-center shadow-md hover:bg-purple-800 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={18} className="mr-2" />
                    Download Now
                  </motion.a>
                </motion.div>
              )}
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
  )
}
