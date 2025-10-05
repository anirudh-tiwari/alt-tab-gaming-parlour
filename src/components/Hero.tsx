import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Powerful Gaming Cafe Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop"
          alt="Gaming Cafe Vibe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-12 md:space-y-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight animate-slide-in-left" style={{ animationDelay: '100ms' }}>
            Alt + Tab <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Switch to Fun.
            </span>
          </h1>

          {/* Main Tagline - Highlighted Text */}
          <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-relaxed max-w-3xl mx-auto animate-slide-in-left" style={{ animationDelay: '300ms' }}>
            📍 <span className="text-accent">50 steps from ADGIPS!</span><br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            <span className="text-foreground">Your ultimate student hangout for</span><br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            <span className="text-primary">gaming</span> + <span className="text-secondary">snacks</span> + <span className="text-accent">vibes</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-slide-in-right pt-4 md:pt-6" style={{ animationDelay: '400ms' }}>
            <Button
              variant="hero"
              size="lg"
              className="group w-auto text-base md:text-lg px-6"
              onClick={() => window.open('https://chat.whatsapp.com/your-group-link', '_blank')}
            >
               Unlock Early Access
              <span className="text-2xl mr-2">
               <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"/><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"/><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"/><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"/><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"/></svg>
               </span>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in pt-6 md:pt-8" style={{ animationDelay: '500ms' }}>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-1">4</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Consoles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Games</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">Weekly</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Tournaments</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
