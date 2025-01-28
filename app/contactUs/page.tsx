'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      const formElements = contactRef.current.querySelectorAll('.form-element');

      gsap.fromTo(
        formElements,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={contactRef} className="bg-teal-900 text-gray-300 py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-12">Contact Us</h2>
        <div className="bg-black p-10 rounded-xl shadow-xl border-4 border-x-yellow-200">
          <form className="space-y-8">
            <div className="form-element">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring focus:ring-emerald-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-element">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring focus:ring-emerald-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-element">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring focus:ring-emerald-600"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
