
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", url: "#about", sectionId: "about" },
    { name: "Skills", url: "#skills", sectionId: "skills" },
    { name: "Projects", url: "#projects", sectionId: "projects" },
    { name: "Contact", url: "#contact", sectionId: "contact" },
  ];

  const handleAuthClick = () => {
    navigate('/auth');
  };

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled
          ? "bg-portfolio-blue/90 backdrop-blur-md py-3 sm:py-4 shadow-lg"
          : "bg-transparent py-4 sm:py-6"
      } transition-all duration-200`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <Link to="/" className="text-portfolio-accent font-mono text-xl sm:text-2xl font-semibold">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-portfolio-text p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="font-mono text-xs lg:text-sm">
                <a
                  href={link.url}
                  className="text-portfolio-text-secondary hover:text-portfolio-accent"
                  onClick={(e) => handleScrollToSection(e, link.sectionId)}
                >
                  <span className="text-portfolio-accent mr-1">{`0${index + 1}.`}</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex space-x-3">
              <Button 
                className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 text-xs lg:text-sm py-2 px-3 lg:py-2 lg:px-4"
                onClick={handleAuthClick}
              >
                Login
              </Button>
              <Button 
                className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 text-xs lg:text-sm py-2 px-3 lg:py-2 lg:px-4"
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] sm:top-[72px] bg-portfolio-light-blue/90 backdrop-blur-lg z-50">
            <nav className="flex h-full">
              <ul className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full">
                {navLinks.map((link, index) => (
                  <li key={index} className="font-mono text-base sm:text-lg">
                    <a
                      href={link.url}
                      onClick={(e) => handleScrollToSection(e, link.sectionId)}
                      className="text-portfolio-text hover:text-portfolio-accent"
                    >
                      <span className="text-portfolio-accent mr-2">{`0${index + 1}.`}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Button 
                    className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 mt-2 py-3 px-6"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate('/auth');
                    }}
                  >
                    Login
                  </Button>
                </li>
                <li>
                  <Button 
                    className="bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 mt-2 py-3 px-6" 
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
