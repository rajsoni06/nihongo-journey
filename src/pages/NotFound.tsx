
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="glass-card p-10 max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-japan-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been removed, 
          renamed, or is temporarily unavailable.
        </p>
        <Link to="/" className="button-primary inline-flex items-center justify-center">
          <Home className="mr-2 h-4 w-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
