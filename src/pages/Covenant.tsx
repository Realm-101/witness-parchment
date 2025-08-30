import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Covenant = () => {
  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="mb-6">The Witness Covenant</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive governance framework for data use, participant rights, 
                and research ethics within The Witness Protocol.
              </p>
            </header>
            
            <div className="space-y-12">
              <Card className="protocol-card">
                <h2 className="mb-6">Data Collection Principles</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-medium text-foreground">Purpose Limitation</h3>
                  <p>
                    All data collected through The Witness Protocol serves exclusively 
                    AI safety and alignment research. No testimony will be used for 
                    commercial purposes, product development, or any application 
                    outside legitimate research contexts.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Minimization</h3>
                  <p>
                    Data collection is limited to information directly relevant to 
                    AI alignment research. Personal identifying information is 
                    separated from testimony data and destroyed according to 
                    established retention schedules.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Quality Assurance</h3>
                  <p>
                    The Protocol prioritizes high-quality, authentic testimony over 
                    quantity. Participant selection and dialogue design ensure 
                    meaningful contributions that advance research objectives.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Participant Rights</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-medium text-foreground">Right to Information</h3>
                  <p>
                    Witnesses have complete access to information about how their 
                    testimony is collected, processed, stored, and used. Research 
                    methodologies and data handling procedures are documented 
                    and available upon request.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Right to Access</h3>
                  <p>
                    Participants may request access to their testimony data in 
                    machine-readable format. Response to access requests will 
                    be provided within 30 days of verification.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Right to Deletion</h3>
                  <p>
                    Witnesses may request permanent deletion of their testimony 
                    from all Protocol systems. Deletion requests are processed 
                    immediately, though data already incorporated into published 
                    research datasets cannot be retroactively removed.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Right to Portability</h3>
                  <p>
                    Testimony data can be exported in standard formats for 
                    transfer to other research initiatives at the participant's 
                    request, subject to compatibility with recipient protocols.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Data Protection Measures</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-medium text-foreground">Anonymization</h3>
                  <p>
                    All testimony undergoes immediate anonymization upon collection. 
                    Technical and administrative safeguards prevent re-identification 
                    of participants through testimony content or metadata.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Encryption</h3>
                  <p>
                    Testimony data is encrypted both in transit and at rest using 
                    industry-standard protocols. Encryption keys are managed through 
                    secure key management systems with restricted access.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Access Controls</h3>
                  <p>
                    Access to testimony data is limited to authorized research 
                    personnel and governed by need-to-know principles. All access 
                    is logged and regularly audited.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Retention Limits</h3>
                  <p>
                    Personal identifying information is retained only as long as 
                    necessary for participant verification and rights fulfillment. 
                    Anonymized testimony may be retained indefinitely for research purposes.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Research Governance</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-medium text-foreground">Ethics Review</h3>
                  <p>
                    All research using Protocol data undergoes ethics review by 
                    qualified institutional review boards. No research may proceed 
                    without demonstrated ethical justification and proper oversight.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Publication Standards</h3>
                  <p>
                    Research findings derived from Protocol data must acknowledge 
                    the source and comply with established publication ethics. 
                    Raw testimony data is never published or shared outside 
                    authorized research contexts.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Collaboration Framework</h3>
                  <p>
                    The Protocol supports collaboration between qualified research 
                    institutions while maintaining strict data protection standards. 
                    Collaboration agreements specify permitted uses and protection requirements.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Compliance & Enforcement</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-medium text-foreground">Regular Audits</h3>
                  <p>
                    Protocol compliance is verified through regular internal and 
                    external audits of data handling practices, access controls, 
                    and security measures.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Violation Response</h3>
                  <p>
                    Covenant violations result in immediate cessation of data access, 
                    comprehensive incident investigation, and implementation of 
                    corrective measures. Serious violations may result in permanent 
                    exclusion from Protocol research.
                  </p>
                  
                  <h3 className="text-lg font-medium text-foreground">Transparency Reports</h3>
                  <p>
                    Annual transparency reports detail Protocol activities, 
                    data usage statistics, rights requests processed, and 
                    any security incidents or covenant violations.
                  </p>
                </div>
              </Card>
              
              <Separator />
              
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  This Covenant represents a binding commitment to ethical research practices 
                  and participant protection. It may be updated to reflect evolving best practices, 
                  with all changes communicated to participants and effective only prospectively.
                </p>
                <p className="text-xs text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Covenant;