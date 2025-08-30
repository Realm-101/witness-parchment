const GateTimeline = () => {
  const steps = [
    {
      number: 1,
      title: "Summons",
      description: "Initial contact and protocol introduction"
    },
    {
      number: 2,
      title: "Assessment",
      description: "Evaluation of suitability and commitment"
    },
    {
      number: 3,
      title: "Review",
      description: "Internal deliberation and verification"
    },
    {
      number: 4,
      title: "Verdict",
      description: "Final determination and access provision"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-2xl font-medium text-center mb-8">
        The Gate Process
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.number} className="gate-step">
            <div className="gate-step-number">
              {step.number}
            </div>
            <div className="gate-step-content">
              <h4 className="gate-step-title">
                {step.title}
              </h4>
              <p className="gate-step-description">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Each stage requires deliberate action and commitment. The process ensures 
          both the integrity of the protocol and the protection of all participants.
        </p>
      </div>
    </div>
  );
};

export default GateTimeline;