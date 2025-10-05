import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const allFeatures = [
  {
    title: "PS5 + Xbox Gaming",
    description: "Latest PS5 and Xbox Series X with 4K displays, premium controllers, and all popular titles like FIFA, GTA, and Mortal Kombat",
    image: "/gaming.jpeg",
    gradient: "from-primary/20 to-transparent",
    emoji: "🎮",
  },
  {
    title: "Snacks & Refreshments",
    description: "Wide variety of chips, cookies, instant noodles, energy drinks, and beverages to keep you fueled during gaming sessions",
    image: "/snacks.jpeg",
    gradient: "from-accent/20 to-transparent",
    emoji: "🍔",
  },
  {
    title: "Chill Zone & Lounge",
    description: "Comfortable seating area with cozy sofas to hang out, chat with friends, take breaks, and relax between gaming sessions",
    image: "/chill.jpeg",
    gradient: "from-secondary/20 to-transparent",
    emoji: "🛋",
  },
  {
    title: "Offline Games & Activities",
    description: "Board games, cards, chess, carrom, table tennis, and other fun activities perfect for group hangouts and friendly competitions",
    image: "/offline.jpeg",
    gradient: "from-accent/20 to-transparent",
    emoji: "🎲",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof allFeatures[0]; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const animationClass = index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right';
  
  return (
    <div ref={elementRef}>
      <Card 
        className={`overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group ${isVisible ? animationClass : 'opacity-0'}`}
        style={{ animationDelay: `${(index % 3) * 150}ms` }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient}`} />
          <div className="absolute top-4 right-4 text-4xl">{feature.emoji}</div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </div>
      </Card>
    </div>
  );
};

export const FeaturesAndGaming = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-16 ${headerVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Hang Out <span className="bg-gradient-primary bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for the perfect gaming and chill session
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};