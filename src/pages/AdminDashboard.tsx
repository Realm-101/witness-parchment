import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { PlusCircle, FileText, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="protocol-container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="font-heading text-xl font-medium">
                The Witness Protocol
              </Link>
              <span className="text-muted-foreground">/ Admin</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                {user?.email}
              </span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="protocol-section">
        <div className="protocol-container">
          <div className="mb-12">
            <h1 className="text-3xl font-heading font-medium mb-4">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage blog content and system settings for The Witness Protocol
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusCircle className="h-5 w-5" />
                  Create Post
                </CardTitle>
                <CardDescription>
                  Write and publish new blog content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/admin/blog/new">
                  <Button className="w-full">
                    New Blog Post
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Manage Posts
                </CardTitle>
                <CardDescription>
                  View, edit, and organize existing content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/admin/blog">
                  <Button variant="outline" className="w-full">
                    View All Posts
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Settings
                </CardTitle>
                <CardDescription>
                  Configure system settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-heading font-medium mb-6">
              Quick Links
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link 
                to="/blog" 
                className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="font-medium">Public Blog</div>
                <div className="text-sm text-muted-foreground">View live blog</div>
              </Link>
              
              <Link 
                to="/about" 
                className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="font-medium">About Page</div>
                <div className="text-sm text-muted-foreground">Protocol info</div>
              </Link>
              
              <Link 
                to="/covenant" 
                className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="font-medium">Covenant</div>
                <div className="text-sm text-muted-foreground">Terms & privacy</div>
              </Link>
              
              <Link 
                to="/" 
                className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="font-medium">Home</div>
                <div className="text-sm text-muted-foreground">Main protocol</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;