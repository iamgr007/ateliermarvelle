"use client";
import React, { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: string[];
}

const MenuIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive = false,
}) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-vanilla-crumb"
        : "text-vanilla-crumb dark:text-vanilla-crumb hover:text-pressed-laurel dark:hover:text-olive-husk"
    }`}
  > 
    {children}
  </a>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick = () => {},
}) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";

  const variants = {
    primary:
      "bg-pressed-laurel dark:bg-pressed-laurel text-vanilla-crumb dark:text-vanilla-crumb hover:bg-vanilla-crumb dark:bg-vanilla-crumb focus:border-herb-de-terre dark:border-herb-de-terre",
    secondary:
      "bg-patisserie-gold dark:bg-patisserie-gold text-gray-900 dark:text-vanilla-crumb hover:bg-vanilla-crumb dark:hover:bg-vanilla-crumb focus:border-herb-de-terre dark:focus:border-herb-de-terre",
    outline:
      "bg-herb-de-terre dark:bg-herb-de-terre text-gray-900 dark:text-vanilla-crumb border border-herb-de-terre dark:border-herb-de-terre hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-300 dark:focus:ring-gray-600",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </button>
  );
};

const handleScrollToNewsletter = () => {
  const newsletterElement = document.getElementById('newsletter');
  if (newsletterElement) {
    newsletterElement.scrollIntoView({ behavior: 'smooth' });
  }
};

// const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => (
//   <div
//     className={`
//       md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg
//       transition-all duration-300 ease-in-out
//       ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
//   `}
//   >
//     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//       {navItems.map((item) => (
//         <a
//           key={item}
//           href={`#${item.toLowerCase()}`}
//           className="text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
//         >
//           {item}
//         </a>
//       ))}
//     </div>
    
//   </div>
// );

const HeaderSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink] = useState("About");
  const navItems = ["About", "What We Offer", "Testimonials", "Contact Us"];

  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-40">
          <div className="flex justify-start md:justify-center">
          <div
            style={{
              minWidth: "150px",
              width: "180px",
              maxWidth: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src="assets/logo3.png"  // Adjust path if needed
              alt="Atelier Marvelle Logo"
              style={{ width: "100%", height: "auto", display: "block" }}
              draggable={false}
            />
          </div>
        </div>
          {/* <div className="flex-shrink-0 flex items-center gap-2">
            <img 
              src="assets/faviconwhite.png" 
              alt="Atelier Marvelle favicon" 
              className="w-6 h-6" 
            />
            <span className="text-xl font-medium text-vanilla-crumb">
              Atelier Marvelle
            </span>
          </div> */}
          {/* <nav className="hidden md:flex items-right space-x-1  p-1 rounded-full">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                isActive={activeLink === item}
              >
                {item}
              </NavLink>
            ))}
          </nav> */}
          {/* <div className="hidden md:block">
            <Button variant="outline">Contact Us</Button>
          </div> */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vanilla-crumb dark:text-vanilla-crumb hover:bg-vanilla-crumb dark:bg-vanilla-crumb hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div> */}
        </div>
      </div>
      {/* <MobileMenu isOpen={isMenuOpen} navItems={navItems} /> */}
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative z-10 text-center py-16 sm:py-4 px-4">
    <div className="max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-black dark:text-black uppercase bg-vanilla-crumb dark:bg-vanilla-crumb rounded-full">
        True Indulgence, Crafted with Care
      </span>
      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-vanilla-crumb dark:text-vanilla-crumb leading-tight">
        You&apos;ve never tasted anything like this{" "}
        <span className="text-herb-de-terre">before</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-vanilla-crumb dark:text-vanilla-crumb">
        At Atelier Marvelle, every bake tells a story of slow-rise bread, rich chocolate, and the art of French patisserie. From classic brownies to our signature sourdough, we celebrate flavor, quality, and timeless tradition in every bite.
      </p>
  
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
  <Button 
    variant="primary" 
    className="w-full sm:w-48"
    onClick={handleScrollToNewsletter}
  >
    Be the First to Taste
  </Button>
  <Button 
    variant="secondary" 
    className="w-full sm:w-48"
    onClick={handleScrollToNewsletter}
    >
    Connect with Us
  </Button>
</div>


    </div>
  </section>
);

export default function Hero2() {
  return (
    <div className="relative w-full overflow-hidden bg-olive-husk dark:bg-olive-husk">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">

      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">

      </div>
      <HeaderSection />
      <main>
        <Hero />
      </main>
    </div>
  );
}
