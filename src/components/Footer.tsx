import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-light">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Coffee className="h-6 w-6 text-coffee-accent" />
              <span className="font-semibold text-xl tracking-tight text-white">
                Your<span className="text-coffee-accent">Time</span>
              </span>
            </Link>
            <p className="mb-4">
              Наша кофейня — идеальное место для встреч, работы и отдыха. 
              Мы создаем атмосферу, где каждый может найти свой момент спокойствия.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-coffee-light hover:text-coffee-accent" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-coffee-light hover:text-coffee-accent" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-coffee-accent transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-coffee-accent transition-colors">Меню</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-coffee-accent transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-coffee-accent transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-coffee-accent mr-3 mt-0.5" />
                <span>ул. Ленина, 50, Екатеринбург, 620000</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-coffee-accent mr-3" />
                <span>+7 (343) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-coffee-accent mr-3" />
                <span>info@yourtime-coffee.ru</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-coffee-accent mr-3 mt-0.5" />
                <span>
                  Пн-Пт: 7:30 - 22:00<br />
                  Сб-Вс: 9:00 - 23:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-medium/50 mt-12 pt-6 text-center text-sm">
          <p>© 2025 YourTime. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
