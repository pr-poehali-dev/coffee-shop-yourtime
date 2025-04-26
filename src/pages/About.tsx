
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Award, Coffee, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
            alt="YourTime Coffee Shop Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">О нас</h1>
            <p className="text-xl text-white max-w-2xl">
              Узнайте историю, ценности и миссию кофейни YourTime
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-muted-foreground mb-4">
                YourTime начался с простой идеи: создать место, где время принадлежит вам. 
                В 2018 году основатели Анна и Михаил, объединенные любовью к качественному кофе и 
                уютной атмосфере, открыли первую кофейню в центре Екатеринбурга.
              </p>
              <p className="text-muted-foreground mb-4">
                За годы работы мы выросли от маленькой кофейни до сети заведений, 
                известных своим отменным кофе, домашней выпечкой и особым подходом к каждому гостю.
              </p>
              <p className="text-muted-foreground">
                Несмотря на рост, мы сохраняем наши ценности: качество во всем, 
                заботу о каждой детали и создание атмосферы, где время по-настоящему принадлежит вам.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="YourTime Coffee Founders" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <Separator className="max-w-3xl mx-auto" />

        {/* Our Values */}
        <div className="bg-coffee-light/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Coffee className="h-12 w-12 text-coffee-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Качество кофе</h3>
                  <p className="text-muted-foreground">
                    Мы работаем только с проверенными поставщиками и обжарщиками кофе, 
                    используем современное оборудование и следим за каждым этапом приготовления.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 text-coffee-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Забота о госте</h3>
                  <p className="text-muted-foreground">
                    Мы создаем пространство, где каждый чувствует себя комфортно.
                    Внимательный сервис и искренняя забота — основа нашего подхода.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 text-coffee-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ценность времени</h3>
                  <p className="text-muted-foreground">
                    Мы верим, что время — самый ценный ресурс. Поэтому создаем 
                    пространство, где вы можете наслаждаться моментом, не спеша.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 rounded-full overflow-hidden mx-auto w-48 h-48 shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-coffee-accent mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="bg-coffee-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Award className="h-10 w-10 text-coffee-accent mr-4" />
              <h2 className="text-3xl font-bold">Достижения и награды</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-coffee-accent mb-2">2021</div>
                <p className="text-lg font-semibold mb-1">Лучшая кофейня года</p>
                <p className="text-coffee-light">По версии журнала "Ресторанный бизнес"</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-coffee-accent mb-2">2022</div>
                <p className="text-lg font-semibold mb-1">Народное признание</p>
                <p className="text-coffee-light">Выбор посетителей на Ekaterinburg Food Festival</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-coffee-accent mb-2">2023</div>
                <p className="text-lg font-semibold mb-1">Лучший кофейный бренд</p>
                <p className="text-coffee-light">Премия "Золотая чашка"</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const team = [
  {
    name: "Анна Соколова",
    position: "Основатель",
    description: "Ценитель качественного кофе и создатель особой атмосферы YourTime",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Михаил Волков",
    position: "Шеф-бариста",
    description: "Профессионал с 10-летним опытом и множеством наград",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Елена Смирнова",
    position: "Шеф-кондитер",
    description: "Создает восхитительные десерты, которые дополняют наш кофе",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Дмитрий Петров",
    position: "Менеджер",
    description: "Заботится о безупречной работе кофейни и комфорте гостей",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default About;
