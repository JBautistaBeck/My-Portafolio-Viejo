import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 

function Skills() {
  
  const [activeTab, setActiveTab] = useState('tech');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className=" bg-yellow-500 h-screen flex flex-col items-center justify-center">
      
      <div className=" flex flex-row bg-lime-700 mt-20">

        <div className={`cursor-pointer p-2 border-t-2 border-l-2 border-r-2 rounded-t-lg ${ activeTab === 'tech' ? 'bg-blue-500 border-blue-600' : ''}`} onClick={() => handleTabChange('tech')}> Tech Skills </div>

        <div className={`cursor-pointer p-2 border-t-2 border-l-2 border-r-2 rounded-t-lg ${ activeTab === 'soft' ? 'bg-blue-500 border-blue-600' : ''}`} onClick={() => handleTabChange('soft')}> Soft Skills </div>

      </div>

      <div className=" bg-red-800 w-96 h-full mb-20 py-5 ">

        {/* Contenido de Tech Skills */}
        {activeTab === 'tech' && (
          <div className=''>
            <ul className=' grid grid-cols-2 gap-4'>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/javascript.png' alt='JavaScript'></img> <b>JavaScript</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/nodejs.png' alt='Node.js'></img> <b>Node.js</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/redux.png' alt='Redux'></img> <b>Redux</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/react-native.png' alt='React.js'></img> <b>React.js</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/express.png' alt='Express'></img> <b>Express</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png' alt='PosgreSQL'></img> <b>PosgreSQL</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/css3.png' alt='CSS'></img> <b>CSS</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/html-5.png' alt='HTML'></img> <b>HTML</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png' alt='Sequelize'></img> <b>Sequelize</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-11' src='https://img.icons8.com/color/48/000000/git.png' alt='Git'></img> <b>Git</b> </li>
            </ul>
          </div>
        )}



        {/* Contenido de Soft Skills */}
        {activeTab === 'soft' && (
          <div className=''>
            <ul className='grid grid-cols-2 gap-4'>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Comunicación</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Trabajo en equipo</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Resolución de problemas</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Creatividad</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Adaptabilidad</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Gestión del tiempo</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Ética profesional</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Aprendizaje rápido</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Optimista</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Proactivo</b></li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Skills;
