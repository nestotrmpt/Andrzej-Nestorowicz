import React, { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button"; // Upewnij się, że ścieżka jest poprawna
import { Play, Pause, Volume2, X } from "lucide-react"; // Dodano X do zamknięcia modala

const Media = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // Nowy stan dla powiększonego zdjęcia
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false);
      audioRef.current.ontimeupdate = () => setCurrentTime(audioRef.current.currentTime);
      audioRef.current.onloadedmetadata = () => setDuration(audioRef.current.duration);
    }
  }, []);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e) => {
    if (progressBarRef.current && audioRef.current) {
      const progressBarWidth = progressBarRef.current.clientWidth;
      const clickX = e.nativeEvent.offsetX;
      const newTime = (clickX / progressBarWidth) * duration;
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressWidth = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Zaktualizowana lista zdjęć do galerii z poprawnymi rozszerzeniami i zmienioną kolejnością
  const galleryImages = [
    { id: 1, src: '/galeria3.jpg', alt: 'Królewskie Konserwatorium Bruksela', title: 'Królewskie Konserwatorium Bruksela' }, // Teraz pierwsze
    { id: 2, src: '/galeria2.png', alt: 'Garnizon Sztuki Warszawa', title: 'Garnizon Sztuki Warszawa' },
    { id: 3, src: '/galeria1.jpg', alt: 'Ratusz Zduńska Wola', title: 'Ratusz Zduńska Wola' }, // Teraz trzecie
  ];

  const externalLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@AndrzejNestorowiczPiano', icon: '🎥' },
    { name: 'Spotify', url: 'https://open.spotify.com/artist/3MWc7eJixgEUMguIREl87v?si=0Jlos4jRTLSLOrSzOKdrAA', icon: '🎵' },
  ];

  // Funkcje do obsługi powiększania zdjęć
  const openImageModal = (image ) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="media" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 mb-12">Media</h2>

        {/* Odtwarzacz Audio */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              Kompilacja Utworów
            </h3>
            <p className="text-gray-600">
              Fragmenty najnowszych kompozycji
            </p>
          </div>

          {/* Odtwarzacz */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <audio ref={audioRef} src="/fragmenty.mp3" preload="auto"></audio>

            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button
                size="lg"
                onClick={togglePlayback}
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full w-16 h-16"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </div>

            {/* Pasek postępu */}
            <div 
              ref={progressBarRef}
              className="w-full bg-gray-200 rounded-full h-2 mb-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="bg-gray-900 h-2 rounded-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{formatTime(currentTime)}</span>
              <div className="flex items-center space-x-2">
                <Volume2 size={16} />
                <span>Kompilacja 2025</span>
              </div>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Galeria Zdjęć */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-center text-gray-900 mb-6">Galeria Zdjęć</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openImageModal(image)} // Dodana obsługa kliknięcia
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Linki Zewnętrzne */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Posłuchaj więcej</h3>
          <div className="flex justify-center space-x-6">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-5xl"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal do powiększania zdjęć */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal} // Zamknij modal po kliknięciu poza obrazem
        >
          <div className="relative max-w-3xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}> {/* Zapobiega zamknięciu po kliknięciu na obraz */} 
            <button 
              onClick={closeImageModal} 
              className="absolute top-4 right-4 text-white text-4xl z-10 bg-gray-900 rounded-full p-2 hover:bg-gray-700 transition-colors"
              aria-label="Zamknij"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
            />
            {selectedImage.title && (
              <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.title}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Media;