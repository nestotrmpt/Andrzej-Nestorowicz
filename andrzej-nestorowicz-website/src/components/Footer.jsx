import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Importujemy tylko potrzebne ikony

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sekcja 1: O Andrzeju Nestorowiczu */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Andrzej Nestorowicz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kompozytor muzyki neoklasycznej, tworzący dźwiękowe pejzaże, które poruszają serca i umysły.
            </p>
          </div>

          {/* Sekcja 2: Kontakt */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-500" />
                <a href="mailto:andrzejnestorowicz.piano@gmail.com" className="text-gray-400 hover:text-white">
                  andrzejnestorowicz.piano@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-500" />
                <a href="tel:+48885055222" className="text-gray-400 hover:text-white">
                  +48 885 055 222
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-gray-500" />
                <span className="text-gray-400">Warszawa, Polska</span>
              </li>
            </ul>
          </div>

          {/* Sekcja 3: Nawigacja (lub inne linki) */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Nawigacja</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">O mnie</a></li>
              <li><a href="#concerts" className="text-gray-400 hover:text-white">Koncerty</a></li>
              <li><a href="#media" className="text-gray-400 hover:text-white">Media</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-white">Sklep</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {currentYear} Andrzej Nestorowicz. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;