"use client";

import React, { useState } from "react";

import { motion, type Variants } from "framer-motion";

import { Mail } from "lucide-react";

import emailjs from "emailjs-com";
// You'll need to install framer-motion & lucide-react:

// npm install framer-motion lucide-react

// --- Animation Variants for Framer Motion ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,

      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },

  visible: {
    y: 0,

    opacity: 1,

    transition: {
      type: "spring" as const,

      stiffness: 100,
    },
  },
};

// --- Newsletter Section Component ---

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Use EmailJS credentials from environment variables
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        { email },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setStatus("success");
      setEmail("");  // Clear input
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div id="newsletter" className="relative font-sans w-full flex items-center justify-center overflow-hidden p-4 bg-olive-husk dark:bg-olive-husk transition-colors duration-300">
      <motion.div
        className="relative z-10 container mx-auto text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}

        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-vanilla-crumb dark:text-vanilla-crumb"
          variants={itemVariants}
        >
          We’re Opening Soon!
        </motion.h2>

        {/* Subheading */}

        <motion.p
          className="mt-6 text-lg md:text-xl text-vanilla-crumb dark:text-vanilla-crumb max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Subscribe to get notified early and receive exclusive launch offers, artisan stories, and more—fresh from our oven to your inbox.
        </motion.p>

        {/* Email Form */}
<motion.form
          className="mt-6 max-w-md mx-auto"
          onSubmit={handleSubmit}  // Updated to real handler
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-stretch gap-2 w-full">
            {/* Email Input */}
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-vanilla-crumb dark:text-vanilla-crumb hidden sm:block" />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-white/80 dark:bg-gray-800/80 px-4 py-3 pl-4 sm:pl-12 rounded-lg shadow border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none text-center sm:text-left transition"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}  // Added for controlled input
              />
            </div>
            {/* Notify Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-patisserie-gold dark:bg-patisserie-gold text-black font-semibold shadow hover:bg-vanilla-crumb dark:hover:bg-vanilla-crumb transition-colors duration-300 disabled:opacity-50"
              disabled={status === "loading"}  // Disable during submission
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </div>
          {/* Status Messages */}
          {status === "success" && (
            <p className="mt-2 text-vanilla-crumb dark:text-vanilla-crumb">Thanks for subscribing!</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-patisserie-gold  dark:text-patisserie-gold ">Error submitting—please try again.</p>
          )}
        </motion.form>



        {/* <motion.form
          className="mt-10 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
          variants={itemVariants}
        >
          <div className="relative flex flex-col sm:flex-row items-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-2 rounded-full shadow-lg border border-gray-200/80 dark:border-gray-600/80 group focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900 transition-all duration-300">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 hidden sm:block" />

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-auto flex-grow bg-transparent sm:pl-12 px-4 py-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none text-center sm:text-left"
              required
            />

            <button
              type="submit"
              className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-vanilla-crumb dark:text-gray-900 font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300 shadow-md transform group-hover:scale-105"
            >
              Notify Me
            </button>
          </div>
        </motion.form> */}

        {/* Social Proof */}

        {/* <motion.div
          className="mt-8 flex items-center justify-center space-x-3"
          variants={itemVariants}
        >
          <div className="flex -space-x-2">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src="assets/images/testimonials/vivek.png"
              alt="User 1"
            />

            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src="assets/images/testimonials/nitin.png"
              alt="User 2"
            />

            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src="assets/images/testimonials/shrrinesh.png"
              alt="User 3"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              1k+
            </span>{" "}
            subscribed already
          </p>
        </motion.div> */}
      </motion.div>
    </div>
  );
};

// The default export is now the NewsletterSection itself.

export default function NewsletterSection() {
  return <Newsletter />;
}
