import { Button } from "@/components/ui/button";
import { Mail, Download, ExternalLink } from "lucide-react";
import professorPortrait from "@/assets/professor-portrait.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-10"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                Dr. Alexandra Chen
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light">
                Professor of Computer Science
              </p>
              <p className="text-lg text-white/80">
                Stanford University • Department of Computer Science
              </p>
            </div>
            
            <p className="text-lg leading-relaxed text-white/90 max-w-xl">
              Leading researcher in artificial intelligence and machine learning, 
              with over 15 years of experience in advancing computational methods 
              for solving complex real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                <ExternalLink className="w-5 h-5 mr-2" />
                Research Portal
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant bg-white/10 backdrop-blur-sm border border-white/20">
                <img 
                  src={professorPortrait} 
                  alt="Dr. Alexandra Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-accent/30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;