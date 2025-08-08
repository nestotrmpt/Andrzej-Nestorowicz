import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Concerts = () => {
  // Przykładowe dane koncertów - użytkownik będzie mógł je łatwo edytować
  const upcomingConcerts = [
    {
      id: 1,
      date: '2025-09-21',
      time: '18:00',
      title: 'Solowy koncert fortepianowy',
      venue: 'DK Kadr',
      city: 'Warszawa',
      description: 'Autorski koncert Andrzeja Nestorowicza',
      ticketLink: 'https://biletyna.pl/koncert/Koncert-Andrzej-Nestorowicz'
    },
   
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section id="concerts" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Koncerty
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nadchodzące występy i wydarzenia muzyczne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingConcerts.map((concert) => (
            <div key={concert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {/* Data i godzina */}
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span className="text-sm">
                    {formatDate(concert.date)} • {concert.time}
                  </span>
                </div>

                {/* Tytuł */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {concert.title}
                </h3>

                {/* Miejsce */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={18} className="mr-2" />
                  <span className="text-sm">
                    {concert.venue}, {concert.city}
                  </span>
                </div>

                {/* Opis */}
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {concert.description}
                </p>

                {/* Przycisk biletów */}
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={() => window.open(concert.ticketLink, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Bilety
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Informacja o archiwum */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Chcesz zobaczyć poprzednie koncerty?
          </p>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
            Zobacz archiwum koncertów
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Concerts;

