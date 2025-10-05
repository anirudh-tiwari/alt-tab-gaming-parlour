import { Gamepad, Coffee, Users, Trophy, Wifi, Sofa } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const features = [
  {
    icon: Gamepad,
    emoji: "🎮",
    title: "PS5 + Xbox",
    shortDesc: "Next-Gen Consoles",
    description: "Latest generation consoles with 4K displays and premium controllers",
  },
  {
    icon: Coffee,
    emoji: "🍔",
    title: "Snacks + Drinks",
    shortDesc: "Energy Refuel",
    description: "Wide variety of snacks, beverages, and quick bites to keep you energized",
  },
  {
    icon: Sofa,
    emoji: "🛋",
    title: "Chill Zone",
    shortDesc: "Hang, Chat, Relax",
    description: "Comfortable seating area to hang out, chat with friends, and take breaks",
  },
  {
    icon: Trophy,
    emoji: "🎲",
    title: "Offline Games",
    shortDesc: "Cards, Carrom, TT",
    description: "Board games, cards, and other offline entertainment options for group fun",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Hang Out <span className="bg-gradient-primary bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The perfect spot for college students to game, chill, and make memories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
