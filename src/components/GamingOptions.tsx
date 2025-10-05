import { Card } from "@/components/ui/card";
import consoleGaming from "@/assets/console-gaming.jpg";

const gamingOptions = [
  {
    title: "PlayStation 5",
    description: "Latest PS5 with DualSense controllers, 4K gaming, and all the popular titles like FIFA, GTA, and Mortal Kombat",
    price: "Starts from ₹50/hour",
    image: consoleGaming,
    gradient: "from-primary/20 to-transparent",
  },
  {
    title: "Xbox Series X",
    description: "Next-gen Xbox with Game Pass access, powerful performance, and exclusive titles for ultimate gaming",
    price: "Starts from ₹50/hour",
    image: consoleGaming,
    gradient: "from-secondary/20 to-transparent",
  },
  {
    title: "Snacks & Refreshments",
    description: "Wide variety of chips, cookies, instant noodles, energy drinks, and beverages to keep you fueled",
    price: "Snacks from ₹30",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&h=800&fit=crop",
    gradient: "from-accent/20 to-transparent",
  },
  {
    title: "Offline Games",
    description: "Board games, cards, chess, carrom, table tennis and other fun activities for group hangouts",
    price: "Free with gaming",
    image: "https://images.unsplash.com/photo-1611891487018-f8fd0b7c5a8c?w=800&h=800&fit=crop",
    gradient: "from-primary/20 to-transparent",
  },
];

export const GamingOptions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="bg-gradient-accent bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for the perfect hangout session
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {gamingOptions.map((option, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${option.gradient}`} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
