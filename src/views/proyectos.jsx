import React, { useState } from 'react';
import Card from '../componentes/card';
// import Detail from '../detail/detail';
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
    <div className=" bg-orange-500 text-black p-10 h-screen">

      <h1 className='text-5xl font-bold'>Proyectos</h1>

      <div className="">
      {informacionPro.map((proyecto, index) => (
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
          // onClickFotos={() => handleShowDetail(proyecto)}
        />
       ))}
      </div>

      {/* {showDetail && (
        <Detail
          proyecto={selectedProject}
          onClose={handleCloseDetail} // Pasa la función para cerrar Detail
        />
      )} */}
      
    </div>
  );
}

export default Proyectos;
