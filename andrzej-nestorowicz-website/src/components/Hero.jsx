import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mojetlo.JPG')" }}
      >
        {/* Ciemna nakładka (opcjonalna, dla czytelności tekstu) */}
        <div className="w-full h-full bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Andrzej Nestorowicz
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-light">
          Kompozytor, koncerty na żywo
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3"
            onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Poznaj moją muzykę
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-gray-900 bg-white hover:bg-gray-100 font-medium px-8 py-3" // Zmieniono: dodano text-gray-900 i bg-white
            onClick={() => document.getElementById('concerts')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Najbliższe koncerty
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;