"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
  const propertiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (propertiesRef.current) {
      const items = propertiesRef.current.querySelectorAll('.property-card');

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: propertiesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={propertiesRef} className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-dark-blue mb-12">Our Exclusive Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="property-card bg-dark-blue rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src="/th1.jpg"
              alt="Property 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Luxury Villa</h3>
              <p className="text-sm text-gray-300">A luxurious villa with modern amenities and stunning views.</p>
              <div className="mt-4 text-sm font-medium">Price: $1,200,000</div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="property-card bg-dark-blue rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src="/hero-bg.webp"
              alt="Property 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Modern Apartment</h3>
              <p className="text-sm text-gray-300">A sleek apartment in the heart of the city.</p>
              <div className="mt-4 text-sm font-medium">Price: $800,000</div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="property-card bg-dark-blue rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src="/th1.jpg"
              alt="Property 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Cottage</h3>
              <p className="text-sm text-gray-300">A charming cottage perfect for a peaceful getaway.</p>
              <div className="mt-4 text-sm font-medium">Price: $500,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
