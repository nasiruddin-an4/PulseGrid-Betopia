import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import KeyStatistics from "./components/KeyStatistics";
import FAQs from "./components/FAQs";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <Packages />
      <Impact />
      <Testimonials />
      <KeyStatistics />
      <FAQs />
      <CTA />
    </main>
  );
}
