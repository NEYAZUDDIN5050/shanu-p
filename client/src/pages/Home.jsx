import { motion } from 'framer-motion';
import Certifications from '../components/sections/Certifications';
import Hero from '../components/sections/Hero';
import Therapies from '../components/sections/Therapies';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Appointments from '../components/sections/Appointments';
import Contacts from "../components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <Therapies />
      <Certifications />
      <About />
      <Testimonials />
      <Appointments />
      <Contacts />
    </>
  );
}
