import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, ExternalLink } from "lucide-react";

const Teaching = () => {
  const courses = [
    {
      code: "CS 229",
      title: "Machine Learning",
      level: "Graduate",
      enrollment: 450,
      rating: 4.8,
      description: "Comprehensive introduction to machine learning algorithms, theory, and applications. Covers supervised and unsupervised learning, deep learning, and modern ML techniques."
    },
    {
      code: "CS 131",
      title: "Computer Vision: Foundations and Applications",
      level: "Undergraduate",
      enrollment: 180,
      rating: 4.9,
      description: "Introduction to computer vision including image formation, feature detection, stereo, motion estimation, and object recognition."
    },
    {
      code: "CS 330",
      title: "Deep Multi-Task and Meta Learning",
      level: "Graduate",
      enrollment: 120,
      rating: 4.7,
      description: "Advanced course covering multi-task learning, meta-learning, and few-shot learning with applications to robotics and NLP."
    },
    {
      code: "CS 224N",
      title: "Natural Language Processing",
      level: "Graduate",
      enrollment: 300,
      rating: 4.6,
      description: "Modern approaches to NLP including neural language models, transformers, and applications to text analysis and generation."
    }
  ];

  const students = [
    {
      name: "Sarah Kim",
      status: "PhD Candidate",
      year: "6th Year",
      research: "Few-shot learning for medical imaging",
      achievement: "Best Paper Award at ICCV 2023"
    },
    {
      name: "Michael Rodriguez",
      status: "PhD Candidate", 
      year: "4th Year",
      research: "Federated learning optimization",
      achievement: "Google PhD Fellowship Recipient"
    },
    {
      name: "Emma Chen",
      status: "PhD Candidate",
      year: "3rd Year", 
      research: "Continual learning in robotics",
      achievement: "Outstanding Student Researcher Award"
    },
    {
      name: "David Park",
      status: "Recent Graduate",
      year: "2023",
      research: "Meta-learning for autonomous systems",
      achievement: "Now Research Scientist at OpenAI"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Excellence in Teaching Award",
      description: "Stanford University School of Engineering Teaching Award (2022)"
    },
    {
      icon: Users,
      title: "Student Mentorship",
      description: "Successfully supervised 15 PhD students to graduation"
    },
    {
      icon: BookOpen,
      title: "Curriculum Development",
      description: "Developed 3 new graduate courses in AI and ML"
    },
    {
      icon: GraduationCap,
      title: "Impact & Recognition",
      description: "4.8/5 average teaching rating across all courses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Teaching & Mentorship
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about educating the next generation of computer scientists and fostering 
              innovation through hands-on learning and research mentorship.
            </p>
          </div>

          {/* Teaching Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50 text-center">
                <CardContent className="p-6 space-y-4">
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

          {/* Current Courses */}
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
              Current Courses
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="font-heading text-xl text-primary">
                          {course.code}: {course.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border border-accent/20">
                            {course.level}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {course.enrollment} students
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">{course.rating}</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Mentorship */}
          <div>
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
              Current & Recent Students
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {students.map((student, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-lg text-primary">
                          {student.name}
                        </h4>
                        <Badge variant="outline" className="border-accent/30 text-accent-foreground">
                          {student.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {student.status}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Research:</span> {student.research}
                      </p>
                      <p className="text-sm text-accent font-medium">
                        {student.achievement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="academic" size="lg">
                <Users className="w-5 h-5 mr-2" />
                View All Students
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;