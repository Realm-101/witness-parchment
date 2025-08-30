import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Verdict = () => {
  // This would normally come from user state/database
  const [verdictStatus] = useState<"accepted" | "declined" | "pending">("pending");
  
  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-3xl mx-auto text-center">
            <header className="mb-12">
              <h1 className="mb-6">Assessment Verdict</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The outcome of your application to join The Witness Protocol.
              </p>
            </header>
            
            {verdictStatus === "accepted" && (
              <Card className="protocol-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-medium text-foreground">
                    Welcome, Witness
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your application has been carefully reviewed and accepted. 
                      You are now authorized to participate in The Witness Protocol 
                      research initiative.
                    </p>
                    <p>
                      This designation carries both privilege and responsibility. 
                      Your testimony will contribute to critical research that may 
                      help ensure the safe development of artificial intelligence.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg text-left">
                    <h3 className="font-medium text-foreground mb-3">Next Steps</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Access the Testimony Dialogue interface</li>
                      <li>• Review your participant portal and settings</li>
                      <li>• Begin contributing authentic testimony when ready</li>
                      <li>• Maintain awareness of the Witness Covenant obligations</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="focus-ring">
                      <Link to="/dialogues">
                        Begin Testimony
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="focus-ring">
                      <Link to="/covenant">
                        Review Covenant
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            )}
            
            {verdictStatus === "declined" && (
              <Card className="protocol-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-medium text-foreground">
                    Assessment Complete
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      After careful review, your application for participation 
                      in The Witness Protocol has not been accepted at this time.
                    </p>
                    <p>
                      This decision reflects the protocol's stringent requirements 
                      rather than any judgment of your qualifications or commitment. 
                      The selection process is necessarily selective to ensure 
                      the integrity and quality of the research corpus.
                    </p>
                    <p className="text-sm">
                      We appreciate your interest in contributing to AI alignment research 
                      and encourage continued engagement with this critical field through 
                      other channels and initiatives.
                    </p>
                  </div>
                </div>
              </Card>
            )}
            
            {verdictStatus === "pending" && (
              <Card className="protocol-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl font-heading font-medium text-foreground">
                    Review in Progress
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Your assessment is currently under review by the protocol 
                      evaluation committee. This process requires careful consideration 
                      and may take several weeks to complete.
                    </p>
                    <p>
                      You will be notified of the verdict once the review process 
                      is concluded. No additional action is required on your part 
                      during this period.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-6 rounded-lg text-left">
                    <h3 className="font-medium text-foreground mb-3">During Review</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Assessment responses are being evaluated</li>
                      <li>• Background verification is in progress</li>
                      <li>• Committee deliberation will conclude within 3-4 weeks</li>
                      <li>• You will receive notification regardless of outcome</li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Verdict;