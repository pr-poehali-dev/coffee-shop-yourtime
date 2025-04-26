import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">О кофейне YourTime</h2>
              <div className="w-20 h-1 bg-coffee-accent mb-6"></div>
            </div>
            
            <p className="text-muted-foreground">
              YourTime — это больше, чем просто кофейня. Это место, где время замедляется, 
              позволяя вам насладиться каждым глотком превосходного кофе.
            </p>
            
            <p className="text-muted-foreground">
              Мы открылись в 2022 году в самом сердце Екатеринбурга с миссией создать
              уютное пространство, где каждый гость чувствует себя как дома.
            </p>
            
            <p className="text-muted-foreground">
              Наша команда состоит из профессиональных бариста, которые стремятся
              раскрыть уникальный вкус каждого сорта кофе и создать для вас неповторимые напитки.
            </p>
            
            <Button
              asChild
              className="bg-coffee-accent text-coffee-dark hover:bg-coffee-accent/90 mt-4"
            >
              <Link to="/about">
                Узнать больше
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1525480122272-9d54ab3b6d7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Кофейня YourTime" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Кофейные зерна" 
                className="rounded-lg h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Приготовление кофе" 
                className="rounded-lg h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Интерьер кофейни" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
