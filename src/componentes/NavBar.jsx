import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


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
      <div className=" p-2 pl-6 bg-gray-200 flex justify-between">

        <FontAwesomeIcon className=' w-12 h-12' icon={faLaptopCode} />

        <div className="">

            <button onClick={() => handleAboutClick("about")} className="text-black border-b border-black mt-2 ml-6 scroll-link hover:transform hover:scale-105 hover:shadow-xl">About Us</button>
            <button onClick={() => handleAboutClick("razas")} className="text-black border-b border-black mt-2 ml-6 scroll-link hover:transform hover:scale-105 hover:shadow-xl">Nuestras Razas</button>

        </div>

        
  
      </div>
    );
  }
  
  export default NavBar;
  