import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserPlus, UserMinus, Shield, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminUser {
  id: string;
  email: string;
  is_admin: boolean;
  created_at: string;
}

const AdminUsers = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.rpc('get_all_users');
      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to fetch users",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserEmail || !newUserPassword) return;

    setIsCreating(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: newUserEmail,
        password: newUserPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) throw error;

      toast({
        title: "User Created",
        description: "New admin user has been created successfully",
      });

      setNewUserEmail('');
      setNewUserPassword('');
      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const promoteToAdmin = async (userId: string) => {
    try {
      const { error } = await supabase.rpc('promote_user_to_admin', {
        target_user_id: userId
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "User promoted to admin",
      });

      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const removeAdmin = async (userId: string) => {
    try {
      const { error } = await supabase.rpc('remove_admin_role', {
        target_user_id: userId
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Admin role removed",
      });

      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="protocol-container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/admin" className="flex items-center space-x-2 font-heading text-xl font-medium">
                <ArrowLeft className="h-4 w-4" />
                <span>User Management</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {user?.email}
              </span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="protocol-section">
        <div className="protocol-container">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Create New Admin */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Create New Admin
                </CardTitle>
                <CardDescription>
                  Add a new administrator account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={createUser} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUserEmail}
                      onChange={(e) => setNewUserEmail(e.target.value)}
                      required
                      disabled={isCreating}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newUserPassword}
                      onChange={(e) => setNewUserPassword(e.target.value)}
                      required
                      disabled={isCreating}
                      minLength={6}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isCreating}>
                    {isCreating ? 'Creating...' : 'Create Admin User'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Existing Users */}
            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
                <CardDescription>
                  Manage user roles and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loading ? (
                    <div className="text-center text-muted-foreground">Loading users...</div>
                  ) : users.length === 0 ? (
                    <div className="text-center text-muted-foreground">No users found</div>
                  ) : (
                    users.map((adminUser) => (
                      <div key={adminUser.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {adminUser.is_admin ? (
                            <Shield className="h-4 w-4 text-primary" />
                          ) : (
                            <User className="h-4 w-4 text-muted-foreground" />
                          )}
                          <div>
                            <div className="font-medium">{adminUser.email}</div>
                            <div className="text-sm text-muted-foreground">
                              {adminUser.is_admin ? 'Administrator' : 'User'}
                            </div>
                          </div>
                        </div>
                        
                        {adminUser.id !== user?.id && (
                          <div className="flex space-x-2">
                            {adminUser.is_admin ? (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeAdmin(adminUser.id)}
                              >
                                <UserMinus className="h-3 w-3 mr-1" />
                                Remove Admin
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => promoteToAdmin(adminUser.id)}
                              >
                                <UserPlus className="h-3 w-3 mr-1" />
                                Make Admin
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminUsers;
