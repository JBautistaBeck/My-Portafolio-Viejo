import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 
import PosgreSQL from "../utils/LogosSkills/PosgreSQL.png"
import CSS from "../utils/LogosSkills/CSS.png"
import HTML from "../utils/LogosSkills/HTML.png"
import Sequelize from "../utils/LogosSkills/Sequelize.png"
import Git from "../utils/LogosSkills/Git.png"
import Express from "../utils/LogosSkills/Express.png"
import React1 from "../utils/LogosSkills/React.png"
import Redux from "../utils/LogosSkills/Redux.png"
import Node1 from "../utils/LogosSkills/Node.png"
import JS from "../utils/LogosSkills/JS.png"

function Skills() {
  
  const [activeTab, setActiveTab] = useState('tech');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className=" bg-gradient-to-r from-mantis-400 to-mantis-700 h-full flex flex-col items-center justify-center">

      <h1 className=' text-5xl mt-24 mb-8 font-bold'>Habilidades</h1>
      
      <div className=" flex flex-row w-3/4 mt-0">

        <div className={` w-1/2 cursor-pointer p-2 rounded-t-lg flex items-center justify-center ${ activeTab === 'tech' ? ' border border-b-0 border-black' : ' border-b border-black'}`} onClick={() => handleTabChange('tech')}> Tech Skills </div>

        <div className={` w-1/2 cursor-pointer p-2 rounded-t-lg flex items-center justify-center ${ activeTab === 'soft' ? ' border border-b-0 border-black' : ' border-b border-black'}`} onClick={() => handleTabChange('soft')}> Soft Skills </div>

      </div>

      <div className=" border border-black border-t-0 rounded-b-lg w-3/4 h-[70vh] mb-14 py-5  shadow-lg">

        {/* Contenido de Tech Skills */}
        {activeTab === 'tech' && (
          <div className=''>
            <ul className=' grid grid-cols-5 gap-y-28 mt-10'>
              <li className=' flex flex-col items-center'><img className=' w-20 mb-2' src={JS} alt='JavaScript'></img> <b>JavaScript</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-20 mb-2' src={CSS} alt='CSS'></img> <b>CSS</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-16 mb-4' src={HTML} alt='HTML'></img> <b>HTML</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-20 mb-2' src={React1} alt='React.js'></img> <b>React.js</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-20 mb-2' src={Redux} alt='Redux'></img> <b>Redux</b> </li>

              <li className=' flex flex-col items-center'><img className=' w-20 mt-3 mb-1' src={Node1} alt='Node.js'></img> <b>Node.js</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-20 mt-5 mb-7' src={Express} alt='Express'></img> <b>Express</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-16 mt-4 mb-4' src={PosgreSQL} alt='PosgreSQL'></img> <b>PosgreSQL</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-16 mt-2 mb-4' src={Sequelize} alt='Sequelize'></img> <b>Sequelize</b> </li>
              <li className=' flex flex-col items-center'><img className=' w-20 mt-2 mb-3' src={Git} alt='Git'></img> <b>Git</b> </li>
            </ul>
          </div>
        )}



        {/* Contenido de Soft Skills */}
        {activeTab === 'soft' && (
          <div className=' ml-28'>
            <ul className='grid grid-cols-2 gap-y-12 gap-x-14 p-8 text-xl'>
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
