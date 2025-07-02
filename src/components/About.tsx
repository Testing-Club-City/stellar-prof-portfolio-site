import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Lightbulb } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "NSF CAREER Award",
      description: "Recipient of the prestigious National Science Foundation CAREER Award for excellence in research and education."
    },
    {
      icon: BookOpen,
      title: "200+ Publications",
      description: "Author of over 200 peer-reviewed publications in top-tier computer science journals and conferences."
    },
    {
      icon: Users,
      title: "PhD Supervision",
      description: "Mentor to 25+ PhD students, with 15 successful graduations who now work in leading tech companies and universities."
    },
    {
      icon: Lightbulb,
      title: "3 Patents",
      description: "Holder of 3 patents in machine learning algorithms, currently being implemented in industry applications."
    }
  ];

  const expertise = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Robotics",
    "Data Mining",
    "Neural Networks"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              About Dr. Chen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A distinguished academic leader dedicated to advancing the frontiers of artificial 
              intelligence while nurturing the next generation of computer scientists.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Academic Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Alexandra Chen joined Stanford University as a Professor of Computer Science 
                in 2015, after completing her postdoctoral research at MIT. She earned her Ph.D. 
                in Computer Science from Carnegie Mellon University in 2012, where she was 
                awarded the prestigious School of Computer Science Doctoral Dissertation Award.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her research focuses on developing novel machine learning algorithms that can 
                learn from limited data and adapt to changing environments. She has made 
                significant contributions to the fields of few-shot learning, meta-learning, 
                and transfer learning, with applications ranging from healthcare to autonomous systems.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Research Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 bg-accent/10 text-accent-foreground border border-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Dr. Chen's interdisciplinary approach combines theoretical foundations with 
                practical applications, resulting in research that not only advances academic 
                knowledge but also solves real-world problems in collaboration with industry partners.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary text-lg">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;