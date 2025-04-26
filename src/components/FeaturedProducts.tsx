import CoffeeCard from "./CoffeeCard";

const FeaturedProducts = () => {
  const featuredCoffees = [
    {
      id: 1,
      title: "Капучино",
      description: "Эспрессо с нежной молочной пеной",
      price: "320",
      imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Латте",
      description: "Мягкий кофейный напиток с большим количеством молока",
      price: "350",
      imageUrl: "https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Флэт Уайт",
      description: "Двойной эспрессо с микропеной из молока",
      price: "380",
      imageUrl: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши фирменные напитки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Попробуйте наши популярные кофейные напитки, приготовленные из отборных зерен
            с любовью и вниманием к каждой детали
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              imageUrl={coffee.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
