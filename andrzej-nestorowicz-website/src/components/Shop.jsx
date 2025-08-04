import React from 'react';
import { Button } from './ui/button'; // Upewnij się, że ścieżka jest poprawna

const Shop = () => {
  const products = [
    {
      id: 1,
      type: 'sheet-music',
      title: 'Nuty: Wkrótce',
      description: '',
      price: '',
      purchaseLink: '#',
      featured: true
    },
    {
      id: 2,
      type: 'album',
      title: 'Płyta: Wkrótce',
      description: '',
      price: '',
      purchaseLink: '#',
      featured: false
    },
  ];

  return (
    <section id="shop" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center text-gray-900 mb-12">Sklep</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-64">
              {/* Usunięto div z obrazkiem i aspect-w-3 aspect-h-4 */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{product.title}</h3>
                <Button
                  asChild
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                  disabled
                >
                  <a href={product.purchaseLink} target="_blank" rel="noopener noreferrer">
                    Wkrótce
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
