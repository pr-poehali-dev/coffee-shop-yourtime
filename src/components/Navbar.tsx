import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-coffee-light/20 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-6 w-6 text-coffee-accent" />
              <span className="font-semibold text-xl tracking-tight">
                Your<span className="text-coffee-accent">Time</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-coffee-accent transition-colors"
            >
              Главная
            </Link>
            <Link 
              to="/menu" 
              className="text-foreground hover:text-coffee-accent transition-colors"
            >
              Меню
            </Link>
            <Link 
              to="/blog" 
              className="text-foreground hover:text-coffee-accent transition-colors"
            >
              Статьи
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-coffee-accent transition-colors"
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="text-foreground hover:text-coffee-accent transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground hover:bg-coffee-light/10"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-coffee-light/20">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-foreground hover:text-coffee-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/menu" 
              className="block py-2 text-foreground hover:text-coffee-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Меню
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-foreground hover:text-coffee-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Статьи
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-foreground hover:text-coffee-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="block py-2 text-foreground hover:text-coffee-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
