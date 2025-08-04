import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Zdjęcie */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                {/* Zdjęcie profilowe */}
                <img 
                  src="/profilowe.jpg" 
                  alt="Andrzej Nestorowicz - zdjęcie profilowe" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Dekoracyjny element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Treść */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              O Andrzeju Nestorowiczu
            </h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Andrzej Nestorowicz to kompozytor tworzący muzykę neoklasyczną, która łączy w sobie 
                elegancję tradycyjnych form z nowoczesnością wyrazu. Jego kompozycje charakteryzują się 
                głęboką refleksyjnością i filmową atmosferą, tworząc dźwiękowe pejzaże, które poruszają 
                serca słuchaczy.
              </p>
              
              <p>
                Tworzy muzykę, która rodzi się z jego wewnętrznej wrażliwości i osobistych przeżyć. 
                Jego utwory wymykają się gatunkowym ramom, snując opowieści bez słów, 
                malując dźwiękiem emocjonalne pejzaże i zapraszając słuchacza w podróż 
                do świata intuicji i autentyczności.
              </p>
              
              <p>
                Jako artysta wierzy w moc muzyki do łączenia ludzi i przekazywania uniwersalnych 
                emocji. Każda jego kompozycja to starannie wyrzeźbiona opowieść, która zaprasza 
                do refleksji i budzi wyobraźnię, tworząc przestrzeń do osobistych przeżyć.
              </p>
            </div>

            {/* Wyróżnienia/Cytaty */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-900">
              <blockquote className="text-gray-700 italic">
                "Są tacy artyści, których muzyka nie tylko porusza.. ona zostaje w Tobie na długo po ostatnim dźwięku."
              </blockquote>
              <cite className="text-sm text-gray-600 mt-2 block">— Sylwia Pogorzelska</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;