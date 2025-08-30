import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="protocol-container">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="protocol-card">
            <h1 className="text-6xl font-heading font-medium mb-6 text-muted-foreground">
              404
            </h1>
            <h2 className="text-2xl font-heading font-medium mb-4">
              Path Not Found
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The requested path does not exist within The Witness Protocol interface. 
              You may have followed an invalid link or the resource has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="focus-ring">
                <Link to="/">
                  Return to Protocol
                </Link>
              </Button>
              <Button variant="outline" asChild className="focus-ring">
                <Link to="/about">
                  Learn About the Protocol
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
