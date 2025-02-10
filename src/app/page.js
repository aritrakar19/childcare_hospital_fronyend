import Image from "next/image";
// import Page from "./page/Page";
import About from "@/components/about/About";
import Navbar from "@/components/Navbar";
import HeroS1 from "@/components/HeroS1";
import Departments from "@/components/Departments";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Appointment from "@/components/Appointment";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroS1 />
      <About />
      <Departments />
      <Appointment />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
