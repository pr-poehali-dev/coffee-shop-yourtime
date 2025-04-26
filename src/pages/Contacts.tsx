
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-coffee-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-xl max-w-2xl mx-auto text-coffee-light">
              Мы всегда рады ответить на ваши вопросы, выслушать пожелания или помочь с организацией мероприятия
            </p>
          </div>
        </div>

        {/* Contact Info & Form */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Информация</h2>
              
              <div className="space-y-6">
                <Card className="border-coffee-light/30">
                  <CardContent className="flex items-start p-6">
                    <MapPin className="h-6 w-6 text-coffee-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">ул. Ленина, 50, Екатеринбург, 620000</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-coffee-light/30">
                  <CardContent className="flex items-start p-6">
                    <Phone className="h-6 w-6 text-coffee-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (343) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-coffee-light/30">
                  <CardContent className="flex items-start p-6">
                    <Mail className="h-6 w-6 text-coffee-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">info@yourtime-coffee.ru</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-coffee-light/30">
                  <CardContent className="flex items-start p-6">
                    <Clock className="h-6 w-6 text-coffee-accent mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Часы работы</h3>
                      <p className="text-muted-foreground">
                        Понедельник - Пятница: 7:30 - 22:00<br />
                        Суббота - Воскресенье: 9:00 - 23:00
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Ваше имя
                        </label>
                        <Input id="name" placeholder="Введите имя" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Тема
                      </label>
                      <Input id="subject" placeholder="Тема сообщения" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Сообщение
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Ваше сообщение..." 
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-coffee-accent hover:bg-coffee-accent/90">
                      <Send className="h-4 w-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="w-full h-96 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8876.291451829252!2d60.60457587436466!3d56.83679274072994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ed2e6bb6fd9%3A0x26d3bbde4926c571!2z0YPQuy4g0JvQtdC90LjQvdCwLCA1MCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDAw!5e0!3m2!1sru!2sru!4v1650300147263!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="YourTime Coffee Shop Location"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
