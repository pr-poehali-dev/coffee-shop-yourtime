import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-coffee-light/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Как нас найти</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады видеть вас в нашей кофейне. Приходите, чтобы насладиться 
            чашечкой свежего кофе в уютной атмосфере.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.1691754883824!2d60.60342137688471!3d56.83669128936214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e9f9de8360f%3A0x8e717930ebb12d5!2z0YPQuy4g0JvQtdC90LjQvdCwLCA1MCwg0JXQutCw0YLQtdGA0LjQvdCx0YPRgNCzLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNjIwMDAw!5e0!3m2!1sru!2sru!4v1650000000000!5m2!1sru!2sru" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения кофейни YourTime"
            ></iframe>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-coffee-accent mr-4 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">ул. Ленина, 50, Екатеринбург, 620000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-coffee-accent mr-4 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (343) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-coffee-accent mr-4 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@yourtime-coffee.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-coffee-accent mr-4 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Часы работы</h3>
                  <p className="text-muted-foreground">
                    Понедельник - Пятница: 7:30 - 22:00<br />
                    Суббота - Воскресенье: 9:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
