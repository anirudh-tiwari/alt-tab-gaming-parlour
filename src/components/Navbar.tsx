import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img 
                src="/logo.jpeg" 
                alt="AltTab Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">
                <span style={{ color: '#00bee0' }}>Alt</span>
                <span style={{ color: '#ffe065' }}>Tab</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('gaming')}
                className="text-foreground hover:text-primary transition-colors"
              >
                What We Offer
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Join Community
              </button>
              <Button
                variant="hero"
                size="sm"
                onClick={() => window.open('https://chat.whatsapp.com/your-group-link', '_blank')}
              >
                WhatsApp Group
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-primary/20">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 hover:bg-primary/10 rounded"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('gaming')}
                className="block w-full text-left px-4 py-2 hover:bg-primary/10 rounded"
              >
                What We Offer
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 hover:bg-primary/10 rounded"
              >
                Join Community
              </button>
              <div className="px-4">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => window.open('https://chat.whatsapp.com/your-group-link', '_blank')}
                >
                  WhatsApp Group
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scrolling Marquee - Below Navbar */}
      <div className="fixed top-16 left-0 right-0 z-40 w-full overflow-hidden bg-background border-b border-primary/30 py-2">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm sm:text-base md:text-lg font-bold inline-block">
            <span className="text-primary">No chill zone near college?</span> <span className="text-secondary">Problem solved!</span>
            <span className="mx-8">•</span>
            <span className="text-primary">No chill zone near college?</span> <span className="text-secondary">Problem solved!</span>
            <span className="mx-8">•</span>
            <span className="text-primary">No chill zone near college?</span> <span className="text-secondary">Problem solved!</span>
            <span className="mx-8">•</span>
            <span className="text-primary">No chill zone near college?</span> <span className="text-secondary">Problem solved!</span>
            <span className="mx-8">•</span>
            <span className="text-primary">No chill zone near college?</span> <span className="text-secondary">Problem solved!</span>
            <span className="mx-8">•</span>
            <span className="text-primary">No chill zone near college?</span> <span className="text-secondary">Problem solved!</span>
            <span className="mx-8">•</span>
          </span>
        </div>
      </div>
    </>
  );
};
