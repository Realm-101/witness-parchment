"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AssessmentFormStub = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-assessment-request', {
        body: { email: email.trim() }
      });

      if (error) {
        throw error;
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to send assessment request');
      }

      // Reset form
      setEmail("");
      
      // Show success toast
      toast({
        title: "Request Submitted Successfully",
        description: "Check your email for confirmation and next steps.",
      });

    } catch (error: any) {
      console.error("Error submitting assessment request:", error);
      
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Failed to submit assessment request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="protocol-card max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl font-medium mb-2">
          Request Assessment
        </h3>
        <p className="text-sm text-muted-foreground">
          Begin the verification process to join the protocol
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="focus-ring"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full focus-ring"
          disabled={isSubmitting || !email.trim()}
        >
          {isSubmitting ? "Submitting..." : "Request Assessment"}
        </Button>
      </form>
      
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          By submitting this request, you acknowledge understanding of the 
          protocol's purpose and commitment requirements.
        </p>
      </div>
    </Card>
  );
};

export default AssessmentFormStub;