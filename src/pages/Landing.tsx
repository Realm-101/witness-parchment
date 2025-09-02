import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

import GateTimeline from "@/components/protocol/GateTimeline";
import AssessmentFormStub from "@/components/protocol/AssessmentFormStub";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      {/* Hero Section */}
      <section className="protocol-section min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
        <div className="protocol-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">
              A Protocol for High-Signal Human Testimony.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              An invitation-only initiative to collect, curate, and preserve protected data for AI alignment research.
            </p>
            
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main id="main-content">
        {/* Principles Section */}
        <section className="protocol-section">
          <div className="protocol-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-12">Governing Principles</h2>
              
              <div className="grid gap-8 md:gap-12">
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium">
                    Solemnity of Purpose
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This protocol serves the critical mission of AI alignment research. 
                    Every contribution carries weight toward preventing existential risk.
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium">
                    Irrevocable Consent
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Witnesses provide testimony with full understanding that their contributions 
                    become part of a permanent research corpus, protected but persistent.
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-medium">
                    Non-Commercial Use
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All data collected serves exclusively research purposes. 
                    No commercial exploitation, monetization, or profit-driven applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gate Timeline Section */}
        <section className="protocol-section bg-muted/30">
          <div className="protocol-container">
            <GateTimeline />
          </div>
        </section>
        
        {/* Covenant Teaser Section */}
        <section className="protocol-section">
          <div className="protocol-container">
            <div className="max-w-3xl mx-auto">
              <Card className="protocol-card text-center">
                <h3 className="font-heading text-2xl font-medium mb-4">
                  The Witness Covenant
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive framework governing data use, participant rights, 
                  and research ethics. The Covenant ensures transparency in how 
                  testimony is collected, protected, and utilized for AI safety research.
                </p>
                <Button asChild variant="outline" className="focus-ring">
                  <Link to="/covenant">
                    Read the Covenant
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="protocol-section">
          <div className="protocol-container">
            <div className="text-center mb-12">
              <h2 className="mb-4">Begin the Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Assessment is the first step toward becoming a Witness. 
                The process is rigorous, deliberate, and designed to ensure 
                both suitability and genuine commitment to the protocol's mission.
              </p>
            </div>
            
            <AssessmentFormStub />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;