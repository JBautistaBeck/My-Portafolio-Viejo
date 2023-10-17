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

        } else if (id === "proyectos") {
            const proyectosSection = document.getElementById('proyectos');
            if (proyectosSection) {
            proyectosSection.scrollIntoView({ behavior: 'smooth' });
            }
        }  else if (id === "skills") {
          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
          }
      }
    };


    return (
      <div className=" p-2 pl-6 bg-gray-200 flex justify-between">

        <FontAwesomeIcon className=' w-12 h-12' icon={faLaptopCode} />

        <div className="">

            <button onClick={() => handleAboutClick("about")} className=" text-slate-700 border-b border-slate-700 mt-2 ml-6 scroll-link hover:text-black hover:border-black">About Us</button>
            <button onClick={() => handleAboutClick("proyectos")} className="text-slate-700 border-b border-slate-700 mt-2 ml-6 scroll-link hover:text-black hover:border-black">Proyectos</button>
            <button onClick={() => handleAboutClick("skills")} className="text-slate-700 border-b border-slate-700 mt-2 ml-6 mr-4 scroll-link hover:text-black hover:border-black">Skills</button>

        </div>

        
  
      </div>
    );
  }
  
  export default NavBar;
  