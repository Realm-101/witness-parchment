import DialogueInstrumentStub from "@/components/protocol/DialogueInstrumentStub";

const Dialogues = () => {
  return (
    <div className="min-h-screen">
      <main className="protocol-section">
        <div className="protocol-container">
          <header className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="mb-6">Testimony Dialogues</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A space for contemplative dialogue and authentic expression. 
              Your contributions advance critical AI alignment research while remaining 
              protected under the Witness Covenant.
            </p>
          </header>
          
          <DialogueInstrumentStub />
        </div>
      </main>
    </div>
  );
};

export default Dialogues;