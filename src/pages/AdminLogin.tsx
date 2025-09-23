import { useState } from 'react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';


const AdminLogin = () => {
  const { user, signIn, signUp, loading } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const { toast } = useToast();

  const from = location.state?.from?.pathname || '/admin';

  if (user && !loading) {
    return <Navigate to={from} replace />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const { error } = await signIn(email, password);
    
    if (!error) {
      // Auth context will handle redirect via Navigate above
    }
    
    setIsLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await signUp(email, password);
    
    setIsLoading(false);
  };

  const handleResend = async () => {
    try {
      setResending(true);
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: 'admin@witnessprotocol.info',
        options: { emailRedirectTo: redirectUrl },
      });
      if (error) {
        toast({ title: 'Resend failed', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Confirmation sent', description: 'Check admin@witnessprotocol.info for the email.' });
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="protocol-container">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Link to="/" className="font-heading text-2xl font-medium">
              The Witness Protocol
            </Link>
            <p className="text-muted-foreground mt-2">Admin Access</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Sign in to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                    placeholder="Enter your password"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
                <Button type="button" variant="outline" className="w-full" onClick={handleResend} disabled={resending}>
                  {resending ? 'Resending...' : 'Resend confirmation email'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Protocol
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;