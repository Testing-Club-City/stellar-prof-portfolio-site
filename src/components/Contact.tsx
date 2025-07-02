import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Calendar, ExternalLink, Building } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      label: "Office",
      value: "Gates Computer Science Building, Room 394",
      action: "View on Map"
    },
    {
      icon: Mail,
      label: "Email",
      value: "achen@cs.stanford.edu",
      action: "Send Email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (650) 723-2273",
      action: "Call"
    },
    {
      icon: Calendar,
      label: "Office Hours",
      value: "Tuesdays & Thursdays, 2:00-4:00 PM",
      action: "Schedule Meeting"
    }
  ];

  const links = [
    {
      title: "Google Scholar",
      description: "Complete publication list and citations",
      url: "#"
    },
    {
      title: "ORCID Profile",
      description: "Academic identifier and research outputs",
      url: "#"
    },
    {
      title: "LinkedIn",
      description: "Professional network and updates",
      url: "#"
    },
    {
      title: "Department Profile",
      description: "Stanford CS faculty page",
      url: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in collaboration, research opportunities, or academic discussions? 
              I welcome inquiries from students, researchers, and industry partners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <info.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground mb-3">
                            {info.value}
                          </p>
                          <Button variant="outline" size="sm">
                            {info.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">
                  Collaboration Interests
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always interested in discussing research collaborations, 
                  particularly in the areas of meta-learning, few-shot learning, 
                  and AI applications in healthcare and robotics. Please don't 
                  hesitate to reach out if you have an interesting project or idea.
                </p>
              </div>
            </div>

            {/* Professional Links */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                Professional Profiles
              </h3>
              
              <div className="space-y-4">
                {links.map((link, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                            {link.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card className="shadow-card border-accent/30 bg-gradient-accent/5">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-primary mb-3">
                      Prospective Students
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      I am currently accepting PhD students for Fall 2025. 
                      If you're interested in working on cutting-edge AI research, 
                      please review my recent publications and reach out with 
                      a brief description of your interests.
                    </p>
                    <Button variant="academic">
                      <Mail className="w-4 h-4 mr-2" />
                      Apply to Work With Me
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;