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
                onClick={() => window.open('https://whatsapp.com/channel/0029VbBIJjFDuMRhnJxs6K1V', '_blank')}
              >
                WhatsApp Channel
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
              <div className="px-4 justify-center text-center">
                <Button
                variant="hero"
                size="lg"
                onClick={() => window.open('https://whatsapp.com/channel/0029VbBIJjFDuMRhnJxs6K1V', '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"/><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"/><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"/><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"/><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"/></svg>
                Join On WhatsApp
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
