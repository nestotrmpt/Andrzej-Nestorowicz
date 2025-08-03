import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'; // Import ikon

const Contact = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/andrzejnestorowicz.piano/', icon: <Facebook size={24} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/andrzejnestorowicz.piano/', icon: <Instagram size={24} /> },
    { name: 'YouTube', url: 'https://www.youtube.com/@AndrzejNestorowiczPiano', icon: <Youtube size={24} /> },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 mb-12">Kontakt</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Lewa kolumna - Informacje kontaktowe */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Skontaktuj się ze mną</h3>
            <p className="text-gray-700 mb-4">
              Chętnie odpowiem na wszelkie pytania dotyczące<br />
              mojej muzyki, koncertów czy współpracy.
            </p>

            <div className="space-y-4 mb-8 inline-block text-left">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-900" />
                <a href="mailto:andrzejnestorowicz.piano@gmail.com" className="text-gray-700 hover:text-gray-900">
                  andrzejnestorowicz.piano@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-900" />
                <a href="tel:+48885055222" className="text-gray-700 hover:text-gray-900">
                  +48 885 055 222
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-gray-900" />
                <span className="text-gray-700">Warszawa, Polska</span>
              </div>
            </div>
          </div>

          {/* Prawa kolumna - Media społecznościowe */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Śledź mnie</h3>
            <p className="text-gray-700 mb-4">
              Bądź na bieżąco z moimi koncertami<br />
              i najnowszymi nagraniami.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex space-x-6 justify-center">
                {socialLinks.map((link, index ) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;