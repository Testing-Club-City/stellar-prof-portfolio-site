import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users } from "lucide-react";

const Research = () => {
  const projects = [
    {
      title: "Adaptive Meta-Learning for Few-Shot Classification",
      description: "Developing algorithms that can rapidly adapt to new tasks with minimal training examples, with applications in medical diagnosis and autonomous systems.",
      funding: "NSF Grant #2048123",
      amount: "$850,000",
      duration: "2022-2025",
      collaborators: 3,
      status: "Active",
      tags: ["Meta-Learning", "Few-Shot Learning", "Healthcare AI"]
    },
    {
      title: "Robust Neural Networks for Safety-Critical Systems",
      description: "Creating neural network architectures that maintain reliability and performance under adversarial conditions for autonomous vehicle applications.",
      funding: "DARPA Contract",
      amount: "$1.2M",
      duration: "2021-2024",
      collaborators: 5,
      status: "Active",
      tags: ["Robustness", "Safety-Critical AI", "Autonomous Systems"]
    },
    {
      title: "Federated Learning for Privacy-Preserving Healthcare",
      description: "Developing federated learning frameworks that enable collaborative medical research while preserving patient privacy and data sovereignty.",
      funding: "NIH Grant #R01AI156789",
      amount: "$950,000",
      duration: "2023-2026",
      collaborators: 4,
      status: "Active",
      tags: ["Federated Learning", "Healthcare", "Privacy"]
    },
    {
      title: "Continual Learning in Dynamic Environments",
      description: "Investigating methods for neural networks to continuously learn new information without forgetting previously acquired knowledge.",
      funding: "Google Research Award",
      amount: "$600,000",
      duration: "2020-2023",
      collaborators: 2,
      status: "Completed",
      tags: ["Continual Learning", "Neural Networks", "Adaptation"]
    }
  ];

  const publications = [
    {
      title: "Meta-Learning with Adaptive Task Representations",
      journal: "Nature Machine Intelligence",
      year: "2024",
      citations: 156,
      impact: "High Impact"
    },
    {
      title: "Federated Learning for Medical Image Analysis: A Comprehensive Survey",
      journal: "IEEE Transactions on Medical Imaging",
      year: "2023",
      citations: 289,
      impact: "High Impact"
    },
    {
      title: "Robust Few-Shot Learning via Distribution Alignment",
      journal: "International Conference on Machine Learning (ICML)",
      year: "2023",
      citations: 134,
      impact: "Top Venue"
    },
    {
      title: "Continual Learning with Neural Architecture Search",
      journal: "Journal of Machine Learning Research",
      year: "2022",
      citations: 201,
      impact: "High Impact"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Research Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advancing the frontiers of artificial intelligence through innovative research 
              that bridges theoretical foundations with practical applications.
            </p>
          </div>

          {/* Current Research Projects */}
          <div className="mb-20">
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
              Current Research Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="font-heading text-xl text-primary leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant={project.status === "Active" ? "default" : "secondary"}
                        className={project.status === "Active" 
                          ? "bg-accent text-accent-foreground" 
                          : "bg-muted text-muted-foreground"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Funding:</span>
                        <span className="font-medium">{project.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="font-medium text-accent">{project.amount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Duration:</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{project.duration}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Collaborators:</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{project.collaborators}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs border-accent/30 text-accent-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Publications */}
          <div>
            <h3 className="font-heading text-3xl font-semibold text-primary mb-8 text-center">
              Recent Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-lg text-primary leading-tight">
                          {pub.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {pub.journal} • {pub.year}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">{pub.citations}</p>
                          <p className="text-xs text-muted-foreground">Citations</p>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border border-accent/20">
                          {pub.impact}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="academic" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View All Publications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;