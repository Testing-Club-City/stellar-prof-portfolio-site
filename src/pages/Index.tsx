import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Teaching from "@/components/Teaching";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="research">
        <Research />
      </div>
      <div id="teaching">
        <Teaching />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
