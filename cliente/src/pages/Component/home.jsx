import React from 'react';
import Cancha1 from '../../assets/pelota.jpg';
import Cancha2 from '../../assets/fondohome.png';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-green-600">
      <header className="bg-green-500 py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-white text-center text-3xl font-bold">Fútbol City</h1>
        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Cancha1})` }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center">
            <div className="container mx-auto text-center text-white">
              <h2 className="text-4xl sm:text-6xl font-bold mb-4">Alquila tu cancha favorita</h2>
              <p className="text-lg sm:text-2xl mb-8">Reserva tu espacio y disfruta del mejor fútbol con amigos</p>
              <p className="text-lg sm:text-xl mb-6">En Fútbol City, contamos con las mejores canchas sintéticas para que vivas la pasión del fútbol en cada partido.</p>
              <a href="#reservas" className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">Reserva ahora</a>
            </div>
          </div>
        </section>
        <section id="reservas" className="py-16 bg-green-600" style={{ backgroundImage: `url(${Cancha2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-green-800 text-center mb-12 bg-gray-100 rounded-lg shadow-lg p-6">Descubre Fútbol City</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Canchas de primer nivel</h3>
                <p className="text-gray-600">Nuestras canchas sintéticas están diseñadas para ofrecer la mejor experiencia de juego, sin importar el clima.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Horarios flexibles</h3>
                <p className="text-gray-600">Reserva en el horario que más te convenga y disfruta del fútbol con total comodidad.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Eventos y torneos</h3>
                <p className="text-gray-600">Participa en torneos y eventos especiales organizados en nuestras instalaciones.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ubicación estratégica</h3>
                <p className="text-gray-600">Encuentra tu cancha más cercana y disfruta del deporte sin complicaciones.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-700 py-6">
        <div className="container mx-auto text-center text-white">
          <p>Derechos de autor © 2025 Fútbol City. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;


