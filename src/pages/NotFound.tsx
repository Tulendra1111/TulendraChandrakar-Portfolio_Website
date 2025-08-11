
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-dark via-portfolio-dark-secondary to-portfolio-dark-accent">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button className="btn-primary" asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
