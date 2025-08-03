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
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: string[];
}

// const LogoIcon: React.FC = () => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M6 6H10V10H6V6Z" fill="#F97316" />
//     <path d="M14 6H18V10H14V6Z" fill="#F97316" />
//     <path d="M6 14H10V18H6V14Z" fill="#F97316" />
//     <path d="M14 14H18V18H14V14Z" fill="#F97316" fillOpacity="0.5" />
//   </svg>
// );


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
        ? "text-patisserie-gold dark:text-patisserie-gold"
        : "text-vanilla-crumb dark:text-vanilla-crumb hover:text-patisserie-gold dark:hover:text-patisserie-gold"
    }`}
  >
    {children}
  </a>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";

  const variants = {
    primary:
      "bg-herb-de-terre text-dark-bg hover:bg-herb-de-terre/90 focus:ring-herb-de-terre/50",
    secondary:
      "bg-patisserie-gold text-dark-bg hover:bg-patisserie-gold/90 focus:ring-patisserie-gold/50",
    outline:
      "bg-transparent text-vanilla-crumb border border-vanilla-crumb/20 hover:bg-vanilla-crumb/10 focus:ring-vanilla-crumb/30",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => (
  <div
    className={`
      md:hidden absolute top-full left-0 w-full bg-dark-bg/95 dark:bg-dark-bg/95 backdrop-blur-sm border-t border-vanilla-crumb/10 dark:border-vanilla-crumb/10 shadow-lg
    transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-vanilla-crumb dark:text-vanilla-crumb hover:text-patisserie-gold dark:hover:text-patisserie-gold hover:bg-vanilla-crumb/10 dark:hover:bg-vanilla-crumb/10 block px-3 py-2 rounded-md text-base font-medium"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
      <div className="px-5">
        <Button variant="outline" className="w-full">
          Buy Template
        </Button>
      </div>
    </div>
  </div>
);

const HeaderSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink] = useState("Features");
  const navItems = ["About", "Features", "Blog", "Pricing", "Contact"];

  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img 
              src="assets/faviconwhite.png" 
              alt="Atelier Marvelle favicon" 
              className="w-6 h-6" 
            />
            <span className="text-xl font-medium text-vanilla-crumb">
              Atelier Marvelle
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-1 bg-olive-husk/90  dark:bg-olive-husk/90 p-1 rounded-full">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                isActive={activeLink === item}
              >
                {item}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="outline">Contact Us</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vanilla-crumb dark:text-vanilla-crumb hover:text-patisserie-gold dark:hover:text-patisserie-gold hover:bg-vanilla-crumb/10 dark:hover:bg-vanilla-crumb/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-herb-de-terre dark:focus:ring-herb-de-terre"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative z-10 text-center py-16 sm:py-24 px-4 bg-dark-bg dark:bg-dark-bg text-vanilla-crumb dark:text-vanilla-crumb">
    <div className="max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-dark-bg uppercase bg-herb-de-terre rounded-full">
       Artisanal Baking
      </span>
      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-vanilla-crumb leading-tight">
        French finesse in every{" "}
        <span className="text-patisserie-gold">fast before</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-vanilla-crumb/80">
        Where every creation tells a story of slow baking, rich ingredients, and premium quality.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" className="w-full sm:w-auto">
          Order Now
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto">
          Learn More
        </Button>
      </div>
    </div>
  </section>
);

export default function Hero2() {
  return (
    <div className="relative w-full overflow-hidden bg-dark-bg dark:dark-bg">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-herb-de-terre/20 to-transparent opacity-20 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-bl from-patisserie-gold/20 to-transparent opacity-20 rounded-full blur-3xl" />
      </div>
      <HeaderSection />
      <main>
        <Hero title="Welcome!" subtitle="This is a custom Hero component." />
      </main>
    </div>
  );
}
