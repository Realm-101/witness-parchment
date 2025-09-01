import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { isAdmin } = useAuth();
  
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="protocol-container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-heading text-xl font-medium focus-ring rounded-md px-2 py-1">
            The Witness Protocol
          </Link>
          
          <div className="flex items-center justify-between w-full">
            <nav className="flex items-center space-x-6">
              <Link 
                to="/about" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
              >
                About
              </Link>
              <Link 
                to="/covenant" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
              >
                Covenant
              </Link>
              <Link 
                to="/blog" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
              >
                Journal
              </Link>
              {/* Conditional link for authenticated users */}
              <Link 
                to="/dialogues" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1 hidden"
              >
                Dialogues
              </Link>
            </nav>
            
            {/* Admin link on far right */}
            <Link 
              to="/admin/login" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;