import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Book, Clock, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "espresso-101",
    title: "Основы эспрессо: секреты идеальной экстракции",
    description: "Подробное руководство по приготовлению идеального эспрессо в домашних условиях с любой кофемашиной",
    category: "brewing",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "24 апреля 2025",
    readTime: "7 мин"
  },
  {
    id: "pour-over-guide",
    title: "Пошаговое руководство по пуроверу",
    description: "Метод приготовления кофе пуровер от А до Я: выбор кофе, помол, техника заваривания",
    category: "brewing",
    image: "https://images.unsplash.com/photo-1544252890-95a2bd25c391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "15 апреля 2025",
    readTime: "9 мин"
  },
  {
    id: "coffee-beans-origins",
    title: "Влияние происхождения зёрен на вкус кофе",
    description: "Как регион выращивания кофе влияет на вкусовой профиль напитка: подробный анализ",
    category: "beans",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "10 апреля 2025",
    readTime: "6 мин"
  },
  {
    id: "coffee-grind-size",
    title: "Степень помола и её влияние на вкус",
    description: "Как правильно выбрать степень помола для разных способов приготовления кофе",
    category: "brewing",
    image: "https://images.unsplash.com/photo-1580933073521-dc51f22c5c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2 апреля 2025",
    readTime: "5 мин"
  },
  {
    id: "latte-art-basics",
    title: "Основы латте-арта для начинающих",
    description: "Первые шаги в создании красивых рисунков на кофе: от простого сердечка до более сложных узоров",
    category: "latte-art",
    image: "https://images.unsplash.com/photo-1534805539898-90e18100330a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "28 марта 2025",
    readTime: "8 мин"
  },
  {
    id: "aeropress-techniques",
    title: "Продвинутые техники заваривания в AeroPress",
    description: "5 необычных рецептов, которые раскроют новые грани вкуса в вашем AeroPress",
    category: "brewing",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "20 марта 2025",
    readTime: "6 мин"
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-coffee-dark/10 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-coffee-dark">
                Искусство приготовления кофе
              </h1>
              <p className="text-lg md:text-xl text-coffee-dark/80 mb-8">
                Углубитесь в мир кофейного мастерства с нашими подробными руководствами, советами экспертов и интересными статьями
              </p>
              <div className="flex justify-center">
                <Button className="bg-coffee-accent text-white hover:bg-coffee-accent/90">
                  Начать читать <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-coffee-light/20">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setActiveCategory("all")}
                    className="data-[state=active]:bg-coffee-accent data-[state=active]:text-white"
                  >
                    Все статьи
                  </TabsTrigger>
                  <TabsTrigger 
                    value="brewing" 
                    onClick={() => setActiveCategory("brewing")}
                    className="data-[state=active]:bg-coffee-accent data-[state=active]:text-white"
                  >
                    Методы заваривания
                  </TabsTrigger>
                  <TabsTrigger 
                    value="beans" 
                    onClick={() => setActiveCategory("beans")}
                    className="data-[state=active]:bg-coffee-accent data-[state=active]:text-white"
                  >
                    О кофейных зёрнах
                  </TabsTrigger>
                  <TabsTrigger 
                    value="latte-art" 
                    onClick={() => setActiveCategory("latte-art")}
                    className="data-[state=active]:bg-coffee-accent data-[state=active]:text-white"
                  >
                    Латте-арт
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* All Categories Content */}
              <TabsContent value={activeCategory} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-coffee-dark/60 mb-2">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <CardTitle className="text-xl font-bold hover:text-coffee-accent transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-coffee-dark/80">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" className="text-coffee-accent hover:text-coffee-dark hover:bg-coffee-light/20">
                            Читать статью <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-coffee-dark/5 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Book className="h-12 w-12 text-coffee-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-coffee-dark">
                Получайте новые статьи на почту
              </h2>
              <p className="text-coffee-dark/80 mb-8">
                Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых статьях, 
                советах по приготовлению кофе и эксклюзивных рецептах
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="px-4 py-2 border border-coffee-light rounded-md flex-grow"
                />
                <Button className="bg-coffee-accent text-white hover:bg-coffee-accent/90 whitespace-nowrap">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
