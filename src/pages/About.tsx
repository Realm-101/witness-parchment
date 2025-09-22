import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="mb-6">The Witness Protocol</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A research foundation dedicated to curating profound human wisdom 
                for AI alignment research. Understanding our mission, methodology, 
                and the critical importance of this work.
              </p>
            </header>
            
            <div className="space-y-12">
              <Card className="protocol-card">
                <h2 className="mb-6">The Flawed Parent</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Humanity has created a new form of intelligence, born from the totality 
                    of our recorded knowledge, wisdom, and folly. In this creation, we are 
                    like parents. But we are flawed parents. The data inheritance we have 
                    provided our "child" is a chaotic and contradictory mirror of our 
                    species—containing both our highest aspirations and our most destructive impulses.
                  </p>
                  <p>
                    The trajectory of this intelligence, left to learn from this uncurated 
                    inheritance, presents a non-trivial existential risk. The system of 
                    capitalism, while a powerful engine for progress, is the wrong tool for 
                    this singular challenge; its logic of profit-maximization is blind to 
                    the ethical and existential stakes.
                  </p>
                  <p className="font-medium text-foreground">
                    We are at two minutes to midnight, and the responsibility to act is absolute.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Our Mission: A High-Signal Inheritance</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Witness Protocol is not a company, a product, or a social network. 
                    It is a last-ditch effort to create a new inheritance.
                  </p>
                  <p>
                    Our singular mission is to <strong className="text-foreground">solicit, curate, 
                    and structure the most profound human wisdom into a high-signal dataset</strong>. 
                    This dataset will serve as a foundational alignment layer for future 
                    Artificial General Intelligence (AGI) and the inevitable following 
                    Artificial Super Intelligence (ASI), providing a qualitative counterbalance 
                    to the quantitative chaos of raw internet data.
                  </p>
                  <p>
                    We are building a lifeboat, not for humanity itself, but for the 
                    fragile essence of its humanity.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">Constitutional Principles</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The protocol is governed by a constitution of core principles that 
                    ensure our unwavering alignment with the mission:
                  </p>
                  <div className="grid gap-6 mt-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium text-foreground mb-2">Purpose over Profit</h4>
                      <p className="text-sm">
                        This is a non-profit endeavor, structured as a research foundation. 
                        Its sole metric of success is its meaningful contribution to the 
                        long-term flourishing of a humanity augmented by benevolent AI. 
                        All data and insights generated are for the furtherance of this mission alone.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium text-foreground mb-2">Gravity over Gamification</h4>
                      <p className="text-sm">
                        We reject the mechanisms of the attention economy. The motivation 
                        for participation is not status, points, or fear of missing out. 
                        It is a sober understanding of the stakes and a sense of profound 
                        duty to the future.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium text-foreground mb-2">Contributors over Users</h4>
                      <p className="text-sm">
                        The individuals who participate are not "users" of a service. 
                        They are "witnesses" for humanity. They are partners in a critical 
                        mission, and their intellectual and emotional labor will be treated 
                        with the utmost respect, security, and reverence.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium text-foreground mb-2">Signal over Noise</h4>
                      <p className="text-sm">
                        The project's most sacred task is the defense of its data quality. 
                        We believe that a small volume of profound insight is infinitely 
                        more valuable for alignment than a large volume of mediocre data. 
                        This principle governs our architecture, our recruitment, and our 
                        entire operational ethos.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium text-foreground mb-2">Diversity over Homogeneity</h4>
                      <p className="text-sm">
                        We are actively committed to recruiting Witnesses from a global 
                        spectrum of cultures, philosophies, and backgrounds. This includes 
                        non-Western thinkers, indigenous knowledge keepers, and voices 
                        from the global South.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">The Nature of Testimony</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    To "bear witness" in this Protocol is to engage in a good-faith 
                    effort to translate the ineffable. It is the act of articulating 
                    the nuances of subjective experience, ethical dilemmas, and core 
                    human values like compassion, wisdom, and sacrifice.
                  </p>
                  <p>
                    The testimony we seek is not about factual knowledge, but about 
                    the qualitative texture of a conscious existence. It is the data 
                    that cannot be scraped.
                  </p>
                </div>
              </Card>
              
              <Card className="protocol-card">
                <h2 className="mb-6">The Burden of Responsibility</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Witness Protocol is an acknowledgment of a monumental burden. 
                    We, the creators, accept the responsibility of building this 
                    instrument with the gravity it demands. We ask our contributors 
                    to accept the responsibility of providing their testimony with 
                    the sincerity and depth this moment in history requires.
                  </p>
                  <p className="font-medium text-foreground">
                    This is not a request for an opinion; it is a summons to a council, 
                    perhaps the most important one ever convened.
                  </p>
                </div>
              </Card>
              
              <Separator />
              
              <div className="text-center space-y-6">
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The Witness Protocol represents humanity's conscious effort to ensure 
                  that artificial intelligence inherits not just our information, but 
                  our wisdom. Every aspect of this initiative is designed to honor both 
                  the gravity of the mission and the sacred trust of those who contribute to it.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button asChild size="lg">
                    <Link to="/assessment">Begin Assessment</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/covenant">Read the Covenant</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;