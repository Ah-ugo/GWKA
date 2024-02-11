import Navbar from "@/components/Navbar";
import "@/app/globals.css"
import Hero from "@/components/Hero";
import NavHero from "@/components/NavHero";
// import About1 from "@/components/AboutSection";
import AboutSection from "@/components/AboutSection";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import "@fontsource/poppins";
import CTA2 from "@/components/CTA2";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (

    <main style={{fontFamily: 'Inter',}}>
      <NavHero/>
      <CTA2/>
      <AboutSection/>
      <Service/>
      <Reviews/>
      <Footer/>
    </main>
  );
}
