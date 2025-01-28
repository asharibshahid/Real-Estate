"use client"
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Rentals = () => {
  const rentalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rentalsRef.current) {
      const items = rentalsRef.current.querySelectorAll('.rental-card');

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: rentalsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={rentalsRef} className="bg-black text-white py-20 px-6   ">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-dark-blue mb-16">Our Premium Rentals</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Rental Card 1 */}
          <div className="rental-card bg-gradient-to-r from-dark-blue via-black to-dark-blue rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 border-emerald-700 border-4">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.Gi8MIqHLOn_WJeOG-AJVvAHaE8&pid=Api&rs=1&c=1&qlt=95&w=138&h=92"
              alt="Luxury Villa"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Luxury Villa</h3>
              <p className="text-gray-400">Experience unparalleled luxury in this exclusive villa with modern amenities.</p>
              <div className="mt-4 text-lg font-semibold">Rent: $5,000/month</div>
            </div>
          </div>

          {/* Rental Card 2 */}
          <div className="rental-card bg-gradient-to-r from-dark-blue via-black to-dark-blue rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 border-4 border-emerald-700">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.JWBBlanmQZfsVnAzLXMJfAHaEK&pid=Api&rs=1&c=1&qlt=95&w=164&h=92"
              alt="Cozy Apartment"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Cozy Apartment</h3>
              <p className="text-gray-400">A peaceful and stylish apartment located in the heart of the city.</p>
              <div className="mt-4 text-lg font-semibold">Rent: $2,000/month</div>
            </div>
          </div>

          {/* Rental Card 3 */}
          <div className="rental-card bg-gradient-to-r from-dark-blue via-black to-dark-blue rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 border-4 border-emerald-700">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.ZFars6ClrcPbi1HszEZeNwHaEE&pid=Api&rs=1&c=1&qlt=95&w=168&h=92"
              alt="Modern Condo"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Modern Condo</h3>
              <p className="text-gray-400">A high-end condo with stunning city views and premium facilities.</p>
              <div className="mt-4 text-lg font-semibold">Rent: $3,500/month</div>
            </div>
          </div>

          {/* Rental Card 4 */}
          <div className="rental-card bg-gradient-to-r from-dark-blue via-black to-dark-blue rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 border-4 border-emerald-700">
            <img
              src="https://up.yimg.com/ib/th?id=OIP._BUYFCuZ61ui1f1OfStJKwHaE8&pid=Api&rs=1&c=1&qlt=95&w=164&h=109"
              alt="Suburban Home"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Suburban Home</h3>
              <p className="text-gray-400">A spacious home with a large backyard in a serene neighborhood.</p>
              <div className="mt-4 text-lg font-semibold">Rent: $3,000/month</div>
            </div>
          </div>

          {/* Rental Card 5 */}
          <div className="rental-card bg-gradient-to-r from-dark-blue via-black to-dark-blue rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 border-4 border-emerald-700">
            <img
              src="/th1.jpg"
              alt="Beachfront Property"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Beachfront Property</h3>
              <p className="text-gray-400">Wake up to breathtaking ocean views in this luxurious beachfront property.</p>
              <div className="mt-4 text-lg font-semibold">Rent: $4,500/month</div>
            </div>
          </div>

          {/* Rental Card 6 */}
          <div className="rental-card bg-gradient-to-r from-dark-blue via-black to-dark-blue rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 border-4 border-emerald-700">
            <img
              src="/hero-bg.webp"
              alt="Penthouse Suite"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Penthouse Suite</h3>
              <p className="text-gray-400">A luxurious penthouse suite with top-tier amenities and panoramic views.</p>
              <div className="mt-4 text-lg font-semibold">Rent: $6,000/month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;
