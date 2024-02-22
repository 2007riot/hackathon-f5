import React from "react";
import icon from "../assets/iconoww.jpg";
import { Button } from "flowbite-react";

function LandingPage() {
  const backgroundImageUrl = "../assets/fbg.jpg";

  return (
    <div className="bg-image bg-cover h-screen bg-no-repeat bg-center relative">
      <div className="flex flex-col">
        <div>
          <img src={icon} alt="icon" className="h-20 w-20 rounded-full" />
        </div>
      </div>
      <div className="text-center">
        <div className="mb-20">
          <h1 className="text-6xl font-serif text-white animate-float mb-10">
            Bienvenido a WanderWell
          </h1>
          <p className="text-gabriela text-2xl text-white mb-50">
            Donde cada paso es una aventura y cada destino, una historia por
            contar.
          </p>
        </div>
        <div className="text-center">
          <NavLink to='/home' >
          <Button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-2 px-4 w-3/12 rounded-xl mx-auto"
            gradientDuoTone="purpleToBlue"
          >
            Explorar
          </Button>
         </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;