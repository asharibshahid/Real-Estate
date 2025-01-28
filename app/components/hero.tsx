"use client"
// components/Hero.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );

    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.inOut' }
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.webp"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          ref={textRef}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Welcome to Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover the perfect property for you in the most desirable locations.
        </p>
        <Link href="/properties">
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
          Explore Properties
        </button>
        </Link>
      </div>

      {/* Floating Image */}
      <div
        ref={imageRef}
        className="absolute bottom-0 right-0 z-20 w-1/3 md:w-1/4 lg:w-1/5"
      >
        <Image
          src="/hero-bg.webp" // Replace with your image path
          alt="Floating House"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;