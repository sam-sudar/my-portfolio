// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Header } from "@/sections/Header";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          projectType: "",
          budget: "",
          timeline: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "Drop me a line anytime",
      value: "samsudar200@gmail.com",
      action: "mailto:samsudar200@gmail.com",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      hoverGradient: "hover:from-blue-500/30 hover:to-cyan-500/30",
    },
    {
      icon: "📱",
      title: "Phone",
      description: "Let's talk directly",
      value: "+91 9076347110",
      action: "tel:+919076347110",
      gradient: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
      hoverGradient: "hover:from-emerald-500/30 hover:to-green-500/30",
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/jsam2/",
      action: "https://www.linkedin.com/in/jsam2/",
      gradient: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30",
      hoverGradient: "hover:from-indigo-500/30 hover:to-purple-500/30",
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "Code, collaborate, and share",
      value: "github.com/sam-sudar",
      action: "https://github.com/sam-sudar",
      gradient: "from-blue-500/20 to-green-800/20",
      borderColor: "border-black/30",
      hoverGradient: "hover:from-black/30 hover:to-green-400/30",
    },
  ];

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "E-commerce",
    "Blockchain/DeFi",
    "UI/UX Design",
    "API Development",
    "Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Let's discuss",
  ];

  const timelines = [
    "ASAP",
    "Within 2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  return (
    <>
      <Header />

      {/* Main Container */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/15 to-cyan-500/20 rounded-full blur-3xl animate-pulse opacity-40"></div>
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/15 via-blue-500/20 to-purple-500/18 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/12 via-pink-500/18 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-2000 opacity-30"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-24 pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-righteous tracking-wide md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-200 leading-[0.9] tracking-tight mb-6">
                Lets Work Together
              </h1>
              <p className="text-xl font-outfit text-gray-400/80 font-light tracking-wide max-w-3xl mx-auto mb-8">
                Ready to bring your ideas to life? I am here to help you build
                exceptional digital experiences that make an impact.
              </p>

              {/* Availability Status */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-manrope font-semibold text-emerald-300">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    method.action.startsWith("http")
                      ? "noopener noreferrer"
                      : ""
                  }
                  className="group block"
                >
                  <div className="relative h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    ></div>
                    <div
                      className={`relative bg-black/40 backdrop-blur-xl border ${method.borderColor} rounded-3xl p-6 ${method.hoverGradient} hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col items-center text-center`}
                    >
                      <div className="text-4xl mb-4">{method.icon}</div>
                      <h3 className="text-xl font-righteous text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="font-manrope text-gray-400 text-sm mb-4 flex-1">
                        {method.description}
                      </p>
                      <div className="font-urbanist text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Main Content Layout */}
            <div className="grid grid-cols-12 gap-8">
              {/* Contact Form - Left Side */}
              <div className="col-span-12 lg:col-span-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <h2 className="text-3xl tracking-wide font-outfit font-black text-white">
                        Send me a message
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Company and Subject Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                            placeholder="What's this about?"
                          />
                        </div>
                      </div>

                      {/* Project Details Row */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                          >
                            <option value="">Select type</option>
                            {projectTypes.map((type) => (
                              <option
                                key={type}
                                value={type}
                                className="bg-gray-800"
                              >
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                          >
                            <option value="">Select budget</option>
                            {budgetRanges.map((range) => (
                              <option
                                key={range}
                                value={range}
                                className="bg-gray-800"
                              >
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block font-manrope font-semibold text-white mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((time) => (
                              <option
                                key={time}
                                value={time}
                                className="bg-gray-800"
                              >
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-manrope font-semibold text-white mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-violet-500/50 transition-all duration-300 font-manrope resize-none"
                          placeholder="Tell me about your project, goals, and any specific requirements..."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting || submitStatus === "success"}
                          className={`w-full py-4 rounded-2xl font-manrope font-bold text-lg transition-all duration-300 ${
                            submitStatus === "success"
                              ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white"
                              : submitStatus === "error"
                              ? "bg-gradient-to-r from-red-600 to-orange-600 text-white"
                              : isSubmitting
                              ? "bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 cursor-not-allowed"
                              : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white hover:scale-[1.02] shadow-lg hover:shadow-violet-500/25"
                          }`}
                        >
                          {submitStatus === "success" ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Message Sent Successfully!
                            </span>
                          ) : isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Sending Message...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                              Send Message
                            </span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                {/* Quick Info Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-xl">⚡</span>
                      </div>
                      <h3 className="text-2xl font-outfit font-black text-white">
                        Quick Facts
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm font-manrope">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Usually respond within 24 hours
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-manrope">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Free initial consultation
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-manrope">
                        <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Projects start at $500
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-manrope">
                        <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                        <span className="text-gray-300">
                          Based in Mumbai, India (GMT+5:30)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                        <span className="text-xl">❓</span>
                      </div>
                      <h3 className="text-2xl font-outfit font-black text-white">
                        FAQ
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-manrope font-semibold text-white text-sm mb-2">
                          Whats your typical project timeline?
                        </h4>
                        <p className="font-manrope text-gray-400 text-xs">
                          Most projects take 4-12 weeks depending on complexity
                          and scope.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-manrope font-semibold text-white text-sm mb-2">
                          Do you work with international clients?
                        </h4>
                        <p className="font-manrope text-gray-400 text-xs">
                          Absolutely! I work with clients globally and am
                          flexible with time zones.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-manrope font-semibold text-white text-sm mb-2">
                          What technologies do you specialize in?
                        </h4>
                        <p className="font-manrope text-gray-400 text-xs">
                          React, Next.js, Node.js, TypeScript, and modern web
                          technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-500">
                    <div className="text-center">
                      <div className="flex justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-manrope text-gray-300 text-sm italic mb-3">
                        &quot;Outstanding work quality and communication. Highly
                        recommended!&quot;
                      </p>
                      <div className="text-xs font-urbanist text-gray-400">
                        - Abisha Soman (Client)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
