import Clients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import WhyUs from "@/components/WhyUs";
import Workflow from "@/components/Workflow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Clients />
      <Services />
      <WhoWeAre />
      <WhyUs />
      <Workflow />
      <Testimonials />
      <Portfolio />
      <ContactUs />
    </div>
  );
}
