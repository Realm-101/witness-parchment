"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const DialogueInstrumentStub = () => {
  const [testimony, setTestimony] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleSave = async () => {
    if (!testimony.trim()) return;
    
    setIsSaving(true);
    
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLastSaved(new Date());
    setIsSaving(false);
    
    console.log("Testimony saved:", testimony.length, "characters");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="protocol-card">
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-medium mb-2">
            Testimony Interface
          </h2>
          <p className="text-muted-foreground">
            A space for contemplative dialogue and authentic expression. 
            Your contributions are encrypted and protected under the Witness Covenant.
          </p>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="testimony" className="sr-only">
              Your testimony
            </label>
            <textarea
              id="testimony"
              value={testimony}
              onChange={(e) => setTestimony(e.target.value)}
              placeholder="Begin your testimony here..."
              className="w-full min-h-[400px] p-6 border border-border rounded-lg bg-background 
                         font-body text-foreground leading-relaxed resize-none focus-ring
                         placeholder:text-muted-foreground"
              style={{ fontFamily: 'inherit' }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {testimony.length > 0 && (
                <span>{testimony.length} characters</span>
              )}
              {lastSaved && (
                <span className="ml-4">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
            
            <Button 
              onClick={handleSave}
              disabled={isSaving || !testimony.trim()}
              className="focus-ring"
            >
              {isSaving ? "Saving..." : "Save Testimony"}
            </Button>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-sm text-muted-foreground">
          <p>
            This interface auto-saves your work. All content is encrypted and accessible 
            only to you and authorized protocol administrators under the terms of the Witness Covenant.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DialogueInstrumentStub;