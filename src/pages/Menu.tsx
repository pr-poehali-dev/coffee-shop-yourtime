
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Leaf, MilkOff, Flame } from "lucide-react";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Наше меню</h1>
          
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="coffee">Кофе</TabsTrigger>
              <TabsTrigger value="tea">Чай</TabsTrigger>
              <TabsTrigger value="desserts">Десерты</TabsTrigger>
              <TabsTrigger value="snacks">Закуски</TabsTrigger>
            </TabsList>
            
            <TabsContent value="coffee" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeItems.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tea" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teaItems.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="desserts" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dessertItems.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="snacks" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {snackItems.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  badges?: string[];
}

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="font-medium text-coffee-accent">{item.price} ₽</span>
        </div>
        <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
        {item.badges && (
          <div className="flex flex-wrap gap-2">
            {item.badges.includes("bestseller") && (
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                <Flame className="h-3 w-3 mr-1" />
                Хит продаж
              </Badge>
            )}
            {item.badges.includes("vegan") && (
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                <Leaf className="h-3 w-3 mr-1" />
                Веган
              </Badge>
            )}
            {item.badges.includes("lactoseFree") && (
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                <MilkOff className="h-3 w-3 mr-1" />
                Без лактозы
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const coffeeItems: MenuItem[] = [
  {
    name: "Эспрессо",
    description: "Классический итальянский эспрессо с насыщенным вкусом и ароматом",
    price: "150",
    image: "https://images.unsplash.com/photo-1525093585226-d19284393562?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Капучино",
    description: "Эспрессо с нежной молочной пеной и корицей",
    price: "220",
    image: "https://images.unsplash.com/photo-1534687941688-651ccaafbff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["bestseller"]
  },
  {
    name: "Латте",
    description: "Мягкий кофе с большим количеством горячего молока и тонким слоем пены",
    price: "240",
    image: "https://images.unsplash.com/photo-1585090173070-38591962b164?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Раф кофе",
    description: "Нежный напиток из эспрессо, взбитых сливок и ванильного сахара",
    price: "260",
    image: "https://images.unsplash.com/photo-1553442196-78ae4925b91a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["bestseller"]
  },
  {
    name: "Флэт Уайт",
    description: "Двойной эспрессо с меньшим количеством взбитого молока, чем в латте",
    price: "240",
    image: "https://images.unsplash.com/photo-1596951609001-bb38aab032b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Americano",
    description: "Эспрессо, разбавленный горячей водой",
    price: "180",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const teaItems: MenuItem[] = [
  {
    name: "Чай Эрл Грей",
    description: "Классический черный чай с бергамотом",
    price: "180",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Зеленый чай с жасмином",
    description: "Нежный зеленый чай с ароматом цветков жасмина",
    price: "200",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["vegan"]
  },
  {
    name: "Травяной чай",
    description: "Ароматная смесь трав и цветов с медом",
    price: "220",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["vegan"]
  },
];

const dessertItems: MenuItem[] = [
  {
    name: "Тирамису",
    description: "Нежный итальянский десерт с маскарпоне и кофейным пропитанием",
    price: "280",
    image: "https://images.unsplash.com/photo-1551529834-525807d6b4f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["bestseller"]
  },
  {
    name: "Чизкейк",
    description: "Классический нью-йоркский чизкейк с ягодным соусом",
    price: "260",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Банановый хлеб",
    description: "Домашний ароматный банановый хлеб с орехами",
    price: "220",
    image: "https://images.unsplash.com/photo-1605286658998-09e29c579170?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["vegan"]
  },
];

const snackItems: MenuItem[] = [
  {
    name: "Сэндвич с лососем",
    description: "Свежий багет с лососем, сливочным сыром и зеленью",
    price: "320",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb9ea1e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Авокадо тост",
    description: "Тост с авокадо, яйцом пашот и руколой",
    price: "280",
    image: "https://images.unsplash.com/photo-1603046891744-1f76eb9ea1e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Греческий салат",
    description: "Свежий салат с оливками, фетой и овощами",
    price: "240",
    image: "https://images.unsplash.com/photo-1631818126899-6ec6fbcd5dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    badges: ["vegan", "lactoseFree"]
  },
];

export default Menu;
