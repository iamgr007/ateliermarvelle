"use client"
import React from 'react';

function Testimonial2() {
  const testimonials = [
    {
      name: "Shrrinesh",
      text: "The classic brownies are pure magic-chewy, rich, and the perfect chocolate fix. Best I’ve ever had!",
      image: "assets/images/testimonials/shrrinesh.png",
    },
    {
      name: "Nitin",
      text: "I crave your Korean cream buns weekly! So fluffy and creamy, they remind me of home. Please never stop baking them. :)",
      image: "assets/images/testimonials/nitin.png",
    },
    {
      name: "Vivek",
      text: "Your sourdough is on my breakfast table every day. The crust, the flavor - nothing else compares. Excited for your regular deliveries!",
      image: "assets/images/testimonials/vivek.png",
    },

   
  
  ];

  // Fallback for any images not explicitly mapped or if array runs out
  const anonymousFallbackImage = "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

  return (
    <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 bg-olive-husk dark:bg-olive-husk">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4 text-vanilla-crumb dark:text-vanilla-crumb">
        Baked with Heart, Loved by Our Community
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg text-vanilla-crumb dark:text-vanilla-crumb text-center max-w-3xl mb-16">
        From timeless brownies to our signature buns and everyday sourdough, our neighborhood can’t get enough.
      </p>

      {/* Testimonial Cards Container - Masonry-like layout */}
      {/* <div className="mx-auto max-w-6xl columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-4 space-y-4"> */}
      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-vanilla-crumb dark:bg-vanilla-crumb p-6 rounded-xl shadow-md break-inside-avoid border border-gray-200 dark:border-gray-800 text-black">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                onError={(e) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = anonymousFallbackImage;
                }}
              />
              <div>
                <p className="font-semibold text-black-900 dark:text-black">{testimonial.name}</p>
                <p className="text-sm text-black-600 dark:text-black-400">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-base text-black-700 dark:text-black-200 leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial2;
