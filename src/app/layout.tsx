// import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
// import { ThemeProvider } from "next-themes";
// import "./globals.css";

// // Using Outfit as a close alternative to Circular Std
// // If you purchase Circular Std, you can replace this with local font hosting
// const circularStd = Outfit({
//   variable: "--font-circular",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"], // Light, Book, Medium, Bold equivalents
// });

// export const metadata: Metadata = {
//   title: "Atelier Marvelle - Artisanal Baking Studio",
//   description: "Where every creation tells a story of slow baking, rich ingredients, and French finesse. Premium gourmet baking with integrity and originality.",
//   keywords: ["artisanal baking", "French pastries", "gourmet desserts", "handcrafted", "sourdough", "premium bakery"],
//   authors: [{ name: "Atelier Marvelle" }],
//   creator: "Atelier Marvelle",
//   openGraph: {
//     title: "Atelier Marvelle - Artisanal Baking Studio",
//     description: "Where every creation tells a story of slow baking, rich ingredients, and French finesse.",
//     url: "https://www.ateliermarvelle.com",
//     siteName: "Atelier Marvelle",
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Atelier Marvelle - Artisanal Baking Studio",
//     description: "Where every creation tells a story of slow baking, rich ingredients, and French finesse.",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={circularStd.variable}>
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         <meta name="theme-color" content="#34351A" />
//       </head>
//       <body className="font-circular antialiased">
//         <ThemeProvider 
//           attribute="class" 
//           defaultTheme="light"
//           enableSystem={false}
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import '@vetixy/circular-std';

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// export const metadata: Metadata = {
//   title: "Atelier Marvelle",
//   description: "Artisanal Baking Studio",
//   icons: {
//     icon: "assets/faviconbrown.png",  // Path to your favicon in /public
//     // Optional: Add more for different sizes/devices
//     shortcut: "/icon.png",  // For browser shortcuts
//     // apple: "/apple-icon.png",  // For iOS home screen
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="font-circular antialiased">
//       <body
//         style={{ fontFamily: "'Circular Std', sans-serif" }}  // Applies Circular Std directly (with sans-serif fallback)
//         className="antialiased"
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "next-themes";

// const outfit = Outfit({
//   variable: "--font-circular",
//   subsets: ["latin"],
//   weight: ["400", "500", "700"], // Book, Medium, Bold equivalents
// });

// export const metadata: Metadata = {
//   title: "Atelier Marvelle - Artisanal Baking Studio",
//   description: "Where every creation tells a story of slow baking, rich ingredients, and French finesse.",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-icon.png",
//   },
// };


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={outfit.variable}>
//       <head>
//         <meta name="theme-color" content="#2A2D2A" />
//       </head>
//       <body className="font-circular antialiased">
//         <ThemeProvider 
//           attribute="class" 
//           defaultTheme="dark"
//           enableSystem={true}
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import localFont from "next/font/local";  // Import this for local fonts
import "./globals.css";

const circularStd = localFont({
  src: [
    {
      path: "../../public/fonts/CircularStd-Book.woff",  // Adjust extension/path if needed (e.g., .woff2)
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-BookItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CircularStd-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CircularStd-Bold.woff',
      weight: '600',  // Matches your CSS (600 for Bold)
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-BoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/CircularStd-Black.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-BlackItalic.woff',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-circular-std',  // Variable for easy use in Tailwind/classes
  display: 'swap',  // Prevents invisible text during load
});

export const metadata: Metadata = {
  title: "Atelier Marvelle",
  description: "Artisanal Baking Studio",
  icons: {
    icon: "assets/faviconbrown.png",  // Path to your favicon in /public
    shortcut: "/icon.png",  // For browser shortcuts
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${circularStd.variable} font-circular antialiased`}  // Applies Circular Std site-wide
      >
        {children}
      </body>
    </html>
  );
}
