import React, { useState } from 'react';
import Card from '../componentes/card';
import Detail from '../componentes/detail';
import informacionPro from '../utils/informacionPro.json';

function Proyectos() {

  const [showDetail, setShowDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowDetail = (project) => {
    setSelectedProject(project); // Almacena el proyecto seleccionado
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null); // Limpia el proyecto seleccionado cuando se cierra Detail
    setShowDetail(false);
  };

  return (
    <div className=" bg-orange-500 text-black p-10 h-full flex flex-col items-center justify-center">

      <h1 className='text-5xl font-bold mb-10'>Proyectos</h1>

      <div className=" flex flex-wrap items-center justify-center ">
      {informacionPro.map((proyecto, index) => (
        <div className="w-1/2 p-2" key={index}>
          <Card
            key={index}
            id={proyecto.id}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            clonePBack={proyecto.clonePBack}
            clonePFront={proyecto.clonePFront}
            repositorioBack={proyecto.repositorioBack}
            repositorioFront={proyecto.repositorioFront}
            repositorio={proyecto.repositorio}
            lenguajes={proyecto.lenguajes}
            fechaCreacion={proyecto.fechaCreacion}
            onClickFotos={() => handleShowDetail(proyecto)}
          />
        </div>
       ))}
      </div>

      {showDetail && (
        <Detail
          proyecto={selectedProject}
          onClose={handleCloseDetail} // Pasa la función para cerrar Detail
        />
      )}
      
    </div>
  );
}

export default Proyectos;
