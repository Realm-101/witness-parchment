import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting map to prevent abuse
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per IP
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);
  
  if (!clientData || now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (clientData.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  clientData.count++;
  return true;
}

interface AssessmentRequestEmail {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'Too many requests. Please try again later.' 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { email }: AssessmentRequestEmail = await req.json();

    if (!email || !email.trim()) {
      throw new Error("Email address is required");
    }

    if (!isValidEmail(email)) {
      throw new Error("Please provide a valid email address");
    }

    console.log(`Processing assessment request from: ${email} (IP: ${clientIP})`);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "Witness Protocol <onboarding@resend.dev>",
      to: [email],
      subject: "Assessment Request Received - Witness Protocol",
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h1 style="color: #333; margin-bottom: 20px;">Thank you for your interest in the Witness Protocol</h1>
          
          <p>We have received your request to participate in the assessment process for the Witness Protocol research initiative.</p>
          
          <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">What happens next:</h3>
            <ol style="margin: 10px 0; padding-left: 20px;">
              <li>Our curation team will review your request</li>
              <li>You will receive an invitation with personalized assessment prompts within 5-7 business days</li>
              <li>The assessment consists of a single 20-30 minute written response</li>
              <li>All submissions are de-identified at ingestion for privacy protection</li>
            </ol>
          </div>
          
          <p style="margin: 20px 0;">The Witness Protocol is a non-profit effort to curate a high-signal human wisdom corpus so advanced AI systems inherit depth and judgment, not noise.</p>
          
          <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 30px; font-size: 14px; color: #666;">
            <p><strong>Privacy Notice:</strong> Your contact information is stored separately from any assessment submissions and can be deleted at your request at any time.</p>
            
            <p>Best regards,<br>
            The Witness Protocol Team<br>
            <a href="mailto:support@witnessprotocol.info">support@witnessprotocol.info</a></p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", confirmationResponse);

    // Send notification to the protocol team
    const notificationResponse = await resend.emails.send({
      from: "Witness Protocol <notifications@resend.dev>",
      to: ["support@witnessprotocol.info"],
      subject: "New Assessment Request - Witness Protocol",
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h1 style="color: #333;">New Assessment Request</h1>
          
          <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
            <p><strong>Source:</strong> Assessment Request Form</p>
            <p><strong>Client IP:</strong> ${clientIP}</p>
          </div>
          
          <p>Please review and follow up with the personalized assessment invitation.</p>
        </div>
      `,
    });

    console.log("Notification email sent successfully:", notificationResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Assessment request submitted successfully. Check your email for confirmation." 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-assessment-request function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || "Failed to send assessment request"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);