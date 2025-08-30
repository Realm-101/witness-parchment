import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="mb-6">About the Protocol</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Understanding the foundation, mission, and methodology 
                behind The Witness Protocol initiative.
              </p>
            </header>
            
            <div className="space-y-12">
              <Card className="protocol-card">
                <h2 className="mb-6">Foundation & Mission</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Witness Protocol emerges from the recognition that AI alignment research 
                    requires high-quality human testimony—authentic, nuanced data that captures 
                    the complexity of human values, reasoning, and moral intuition.
                  </p>
                  <p>
                    Traditional data collection methods often produce shallow, incentive-distorted 
                    responses. The Protocol creates conditions for genuine testimony through careful 
                    participant selection, protected anonymity, and commitment to research-only use.
                  </p>
                  <p>
                    This is not data harvesting. It is careful curation of human insight 
                    for the purpose of ensuring AI systems can be aligned with human values 
                    before they become too powerful to control.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Methodology</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Witnesses undergo a multi-stage assessment process designed to identify 
                    individuals capable of providing thoughtful, authentic testimony on complex 
                    moral and philosophical questions relevant to AI alignment.
                  </p>
                  <p>
                    The testimony collection process prioritizes depth over breadth, 
                    quality over quantity. Witnesses engage with carefully crafted dialogue 
                    instruments designed to elicit genuine moral reasoning and value expression.
                  </p>
                  <p>
                    All data is anonymized, encrypted, and governed by strict protocols 
                    that prevent misuse while ensuring its availability for legitimate 
                    AI safety research.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Research Applications</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The corpus of witness testimony serves multiple critical research functions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Training data for value learning algorithms</li>
                    <li>Benchmarks for moral reasoning capabilities</li>
                    <li>Case studies in human value complexity and variation</li>
                    <li>Reference data for alignment verification methods</li>
                  </ul>
                  <p>
                    Research access is governed by the Witness Covenant and requires 
                    demonstration of legitimate AI safety research purposes.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Ethical Framework</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Protocol operates under strict ethical guidelines that prioritize 
                    participant autonomy, data protection, and research integrity. 
                    Key principles include:
                  </p>
                  <div className="grid gap-4 mt-6">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-medium text-foreground mb-2">Informed Consent</h4>
                      <p className="text-sm">
                        Witnesses fully understand how their testimony will be used, 
                        stored, and protected before participation.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-medium text-foreground mb-2">Anonymity Protection</h4>
                      <p className="text-sm">
                        Identity protection measures ensure testimony cannot be 
                        traced back to individual participants.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-medium text-foreground mb-2">Research Limitation</h4>
                      <p className="text-sm">
                        Strict prohibitions against commercial use, with all applications 
                        limited to AI safety and alignment research.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Separator />
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The Witness Protocol represents a commitment to responsible research methodology 
                  in service of humanity's most pressing technological challenge. 
                  Every aspect of the initiative is designed to honor both the gravity 
                  of the mission and the trust of those who contribute to it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;