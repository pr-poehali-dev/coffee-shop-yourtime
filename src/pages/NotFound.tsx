import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Coffee } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <Coffee className="mx-auto h-16 w-16 text-coffee-accent mb-6" />
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-medium mb-6">Страница не найдена</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Кажется, вы перешли по неверной ссылке. Не волнуйтесь, наш кофе никуда не делся!
          </p>
          <Button asChild className="bg-coffee-accent text-coffee-dark hover:bg-coffee-accent/90">
            <Link to="/">
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
