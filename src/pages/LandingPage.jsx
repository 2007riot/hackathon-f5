import React from 'react';
import 'tailwindcss/tailwind.css';
import icon from '../../public/iconoww.jpg'

function LandingPage() { 
  const backgroundImageUrl = '../../public/fbg.jpg';

  return (
    <div className="bg-cover h-screen bg-no-repeat bg-center relative" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="absolute top-0 left-0 right-0 flex mt-12">
      <div className="bg-white rounded-full ">
          <img src={icon} alt="icon" className="h-20 w-20 rounded-full" />
        </div>
      </div>
      <div className="container text-center">
        <div className="mb-20">
          <h1 className="text-6xl font-serif text-white animate-float mb-10">Bienvenido a WonderWell</h1>
          <p className="text-gabriela text-white mb-50">Donde cada paso es una aventura y cada destino, una historia por contar.</p>
        </div>
        <div className="text-center">
          <button className="bg-blue-300 hover:bg-pink-400 text-black font-bold text-gabriola py-2 px-4 rounded">
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
