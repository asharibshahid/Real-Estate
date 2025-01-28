import Image from "next/image";
import Hero from "./components/hero";
import Properties from "./properties/page";
import Rentals from "./rentals/page";
import ContactUs from "./contactUs/page";

export default function Home() {
  return (
    <>
    <Hero />
    <Properties/>
    <Rentals/>
    <ContactUs />
     </>
  );
}
