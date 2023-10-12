import logoMalfa from "../utils/logoMalfa.jpg"
import React from 'react';

function NavBar() {

    const handleAboutClick = (id) => {
        if(id === "about") {

            const aboutSection = document.getElementById('about');
            if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            }

        } else if (id === "razas") {
            const razasSection = document.getElementById('razas');
            if (razasSection) {
            razasSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
      };


    return (
      <div className=" text-white p-4 bg-gray-200 flex justify-between">

        <img src={logoMalfa} alt="LogoMalfa" className=" max-h-14"></img>

        <div className=" mt-4">

            <button onClick={() => handleAboutClick("about")} className="text-black border-b border-black m-4 scroll-link hover:transform hover:scale-105 hover:shadow-xl">About Us</button>
            <button onClick={() => handleAboutClick("razas")} className="text-black border-b border-black m-4  scroll-link hover:transform hover:scale-105 hover:shadow-xl">Nuestras Razas</button>

        </div>

        
  
      </div>
    );
  }
  
  export default NavBar;
  