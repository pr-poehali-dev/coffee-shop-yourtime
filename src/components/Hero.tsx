import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Кофейня YourTime"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/60" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ваше время. Ваш кофе.
          </h1>
          <p className="text-xl md:text-2xl text-coffee-light mb-8">
            Место, где каждая чашка кофе дарит момент наслаждения в суете большого города
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-coffee-accent text-coffee-dark hover:bg-coffee-accent/90 rounded-full px-8 py-6 text-lg"
            >
              <Link to="/menu">
                Наше меню
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-coffee-light text-coffee-light hover:text-white hover:bg-coffee-medium/40 rounded-full px-8 py-6 text-lg"
            >
              <Link to="/contacts">
                Найти нас
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
