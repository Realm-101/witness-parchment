import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Heart } from "lucide-react";
import AssessmentFormStub from "@/components/protocol/AssessmentFormStub";
import GateTimeline from "@/components/protocol/GateTimeline";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="protocol-section gradient-bg">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-8 text-white">
              The Witness Protocol
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              A research foundation dedicated to curating profound human wisdom into a 
              high-signal dataset for AI alignment. We are building an inheritance for 
              artificial intelligence—not the chaotic noise of the internet, but the 
              carefully preserved essence of human depth and moral reasoning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/assessment">
                  Begin Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">Our Guiding Principles</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The constitutional foundation that governs every aspect of our mission.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="protocol-card text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-4">Solemnity of Purpose</h3>
                <p className="text-muted-foreground">
                  This is a non-profit research foundation with a singular mission: 
                  contributing to the long-term flourishing of humanity augmented by benevolent AI. 
                  No commercialization, no profit motive—only the gravity of the task.
                </p>
              </Card>
              
              <Card className="protocol-card text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-4">Irrevocable Consent</h3>
                <p className="text-muted-foreground">
                  Witnesses provide testimony with full understanding that their contributions 
                  will become part of humanity's inheritance to AI. This is not data harvesting—
                  it is conscious participation in shaping the future.
                </p>
              </Card>
              
              <Card className="protocol-card text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="mb-4">Non-Commercial Use</h3>
                <p className="text-muted-foreground">
                  All testimony is protected under strict covenants that prohibit commercial 
                  exploitation. This corpus exists solely for AI alignment research and the 
                  advancement of human welfare.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gate Timeline */}
      <section className="protocol-section bg-muted/30">
        <div className="protocol-container">
          <GateTimeline />
        </div>
      </section>

      {/* Covenant Teaser */}
      <section className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto">
            <Card className="protocol-card gradient-bg text-center">
              <div className="text-white">
                <h2 className="mb-6 text-white">The Witness Covenant</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  "We solemnly acknowledge that the testimony we provide may become part of 
                  the foundational training for artificial intelligence systems. We understand 
                  the profound responsibility this entails and commit to providing authentic, 
                  thoughtful responses that reflect our genuine moral reasoning and values."
                </p>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/covenant">Read Full Covenant</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Begin Your Assessment</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The assessment process evaluates candidates for depth of thought, 
              moral reasoning ability, and commitment to the mission. It is not a test 
              to pass, but an invitation to demonstrate the quality of mind we seek.
            </p>
            
            <AssessmentFormStub />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;