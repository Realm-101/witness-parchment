import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="protocol-container">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>
                The Witness Protocol is a private, non-commercial research initiative. 
                Participation is by invitation only.
              </p>
            </div>
            
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link 
                to="/about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
              >
                About
              </Link>
              <Link 
                to="/covenant" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
              >
                Covenant
              </Link>
            </nav>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} The Witness Protocol. All data collection and use 
              is governed by the <Link to="/covenant" className="underline hover:no-underline">Witness Covenant</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;