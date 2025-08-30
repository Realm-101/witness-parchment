import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Archive = () => {
  // Mock data - would come from actual user's testimony history
  const testimonySessions = [
    {
      id: 1,
      date: "2024-03-15",
      title: "Value Alignment in Decision Systems",
      wordCount: 1247,
      status: "published"
    },
    {
      id: 2,
      date: "2024-03-08",
      title: "Moral Reasoning Under Uncertainty",
      wordCount: 892,
      status: "published"
    },
    {
      id: 3,
      date: "2024-02-28",
      title: "Human Agency and Automated Systems",
      wordCount: 1534,
      status: "draft"
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="mb-6">Testimony Archive</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A record of your contributions to The Witness Protocol research corpus. 
                Access and manage your testimony history while maintaining privacy protections.
              </p>
            </header>
            
            <div className="space-y-8">
              <Card className="protocol-card">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-heading font-medium mb-2">
                      Contribution Overview
                    </h2>
                    <p className="text-muted-foreground">
                      Summary of your testimony contributions and archive status
                    </p>
                  </div>
                  <Button variant="outline" className="focus-ring">
                    Export Data
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-medium text-foreground">
                      {testimonySessions.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Sessions
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-medium text-foreground">
                      {testimonySessions.reduce((sum, session) => sum + session.wordCount, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Words Contributed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-medium text-foreground">
                      {testimonySessions.filter(s => s.status === "published").length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Published Testimonies
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="text-xl font-heading font-medium mb-6">
                  Testimony Sessions
                </h2>
                
                <div className="space-y-4">
                  {testimonySessions.map((session, index) => (
                    <div key={session.id}>
                      <div className="flex items-center justify-between p-6 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground mb-1">
                            {session.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                            <span>{session.wordCount} words</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              session.status === "published" 
                                ? "bg-accent text-accent-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {session.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="focus-ring">
                            View
                          </Button>
                          {session.status === "draft" && (
                            <Button size="sm" className="focus-ring">
                              Continue
                            </Button>
                          )}
                        </div>
                      </div>
                      {index < testimonySessions.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="text-xl font-heading font-medium mb-6">
                  Privacy & Data Controls
                </h2>
                
                <div className="space-y-6">
                  <div className="grid gap-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-medium text-foreground mb-2">Anonymization Status</h4>
                      <p className="text-sm text-muted-foreground">
                        All published testimony has been anonymized and cannot be traced back to your identity. 
                        Draft materials remain in your private workspace.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-medium text-foreground mb-2">Data Rights</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        You maintain full rights over your testimony data as outlined in the Witness Covenant. 
                        You may request access, export, or deletion at any time.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" className="focus-ring">
                          Request Data Export
                        </Button>
                        <Button variant="outline" size="sm" className="focus-ring">
                          Delete Testimony
                        </Button>
                        <Button variant="outline" size="sm" className="focus-ring">
                          Privacy Settings
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Your testimony contributions are preserved with the highest standards of privacy protection 
                  while serving the critical mission of AI alignment research. All data handling 
                  complies with the Witness Covenant and applicable privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Archive;