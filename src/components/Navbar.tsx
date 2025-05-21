
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gaia-dark">
              Resonant<span className="text-gaia-green">Gaia</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gaia-dark">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/#what-is" className="text-slate-600 hover:text-gaia-blue transition-colors">
              What Is It
            </Link>
            <Link to="/#why-it-matters" className="text-slate-600 hover:text-gaia-blue transition-colors">
              Why It Matters
            </Link>
            <Link to="/#who-is-it-for" className="text-slate-600 hover:text-gaia-blue transition-colors">
              Who Is It For
            </Link>
          </nav>

          {/* Auth button - desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-gaia-gradient hover:shadow-md transition-all">
              <Link to="/auth">Enter the Energy Mesh</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/#what-is" 
                className="text-slate-600 hover:text-gaia-blue transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                What Is It
              </Link>
              <Link 
                to="/#why-it-matters" 
                className="text-slate-600 hover:text-gaia-blue transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why It Matters
              </Link>
              <Link 
                to="/#who-is-it-for" 
                className="text-slate-600 hover:text-gaia-blue transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Who Is It For
              </Link>
              <Button asChild className="bg-gaia-gradient hover:shadow-md transition-all mx-4">
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Enter the Energy Mesh</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
