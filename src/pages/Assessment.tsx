import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    background: "",
    experience: "",
    motivation: "",
    commitment: ""
  });

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log("Assessment submitted:", formData);
    // TODO: Handle submission
  };

  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="mb-6">Witness Assessment</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A comprehensive evaluation to determine suitability for participation 
                in The Witness Protocol research initiative.
              </p>
            </header>
            
            <Card className="protocol-card">
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium">Step {currentStep} of 4</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round((currentStep / 4) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>
              
              <Separator className="mb-8" />
              
              {/* Step Content */}
              <div className="min-h-[400px]">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-medium">
                      Background & Qualifications
                    </h2>
                    <p className="text-muted-foreground">
                      Help us understand your relevant background and experience.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="background" className="text-base font-medium">
                          Educational and Professional Background
                        </Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Describe your educational background and relevant professional experience.
                        </p>
                        <textarea
                          id="background"
                          value={formData.background}
                          onChange={(e) => setFormData(prev => ({ ...prev, background: e.target.value }))}
                          placeholder="Please describe your educational background, areas of expertise, and relevant professional experience..."
                          className="w-full min-h-[150px] p-4 border border-border rounded-lg focus-ring"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-medium">
                      AI Safety Experience
                    </h2>
                    <p className="text-muted-foreground">
                      Detail your familiarity with AI safety and alignment research.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="experience" className="text-base font-medium">
                          AI Safety Knowledge and Experience
                        </Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Describe your understanding of AI alignment challenges and any relevant research or practical experience.
                        </p>
                        <textarea
                          id="experience"
                          value={formData.experience}
                          onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                          placeholder="Please describe your knowledge of AI safety and alignment, any research you've conducted, papers you've read, or other relevant experience..."
                          className="w-full min-h-[150px] p-4 border border-border rounded-lg focus-ring"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-medium">
                      Motivation & Understanding
                    </h2>
                    <p className="text-muted-foreground">
                      Explain your motivation for participating and understanding of the protocol.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="motivation" className="text-base font-medium">
                          Motivation for Participation
                        </Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          Why do you want to participate in The Witness Protocol? What do you hope to contribute?
                        </p>
                        <textarea
                          id="motivation"
                          value={formData.motivation}
                          onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                          placeholder="Please explain your motivation for wanting to participate in this research initiative and what you hope to contribute..."
                          className="w-full min-h-[150px] p-4 border border-border rounded-lg focus-ring"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-heading font-medium">
                      Commitment & Availability
                    </h2>
                    <p className="text-muted-foreground">
                      Confirm your understanding of the commitment and your availability.
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="commitment" className="text-base font-medium">
                          Time Commitment and Availability
                        </Label>
                        <p className="text-sm text-muted-foreground mb-2">
                          The protocol requires thoughtful engagement over an extended period. 
                          Describe your availability and commitment to meaningful participation.
                        </p>
                        <textarea
                          id="commitment"
                          value={formData.commitment}
                          onChange={(e) => setFormData(prev => ({ ...prev, commitment: e.target.value }))}
                          placeholder="Please describe your availability for ongoing participation and your commitment to providing thoughtful, authentic testimony..."
                          className="w-full min-h-[150px] p-4 border border-border rounded-lg focus-ring"
                        />
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Protocol Acknowledgment</h4>
                        <p className="text-sm text-muted-foreground">
                          By submitting this assessment, you acknowledge that you have read and 
                          understood the Witness Covenant, including the irrevocable nature of 
                          testimony contributions and the research-only use of all data.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Separator className="my-8" />
              
              {/* Navigation */}
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="focus-ring"
                >
                  Previous
                </Button>
                
                {currentStep < 4 ? (
                  <Button 
                    onClick={handleNext}
                    className="focus-ring"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className="focus-ring"
                  >
                    Submit Assessment
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assessment;