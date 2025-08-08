import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="flex flex-col text-center mt-15">
        <h1 className="text-[50px] mb-5">My Projects</h1>
        <h2 className="text-[25px]">
          proyectos realizados a lo largo de mi carrera
        </h2>
      </div>
      <article className=" flex flex-col text-center mt-20 mb-30 items-center gap-15 p-10">
        <div className="bg-[#42d802] text-black flex flex-col items-center rounded-[50px] p-15">
          <img src="./img/img-projects/voltex-pagina.jpg" alt="logo" />
          <h2 className="text-[25px] p-5">Pagina Web Voltex</h2>
          <p>Proyecto realizado a base de HMTL y CSS</p>
          <button className='bg-[#171717] text-white p-3 rounded-sm'>Visitar Pagina</button>
          <button className='bg-[#171717] text-white p-3 rounded-sm'>Ver Repositorio</button>
        </div>

        <div className="bg-[#42d802] text-black flex flex-col items-center rounded-[50px] p-15">
          <img src="./img/img-projects/voltex-pagina.jpg" alt="logo" />
          <h2 className="text-[25px] p-5">Voltex App</h2>
          <p>diseño, armado y funcionalidad de un sitio web</p>
          <button className='bg-[#171717] text-white p-3 rounded-sm'>Visitar Pagina</button>
          <button className='bg-[#171717] text-white p-3 rounded-sm'>Ver Repositorio</button>
        </div>

        <div className=" bg-[#42d802] text-black flex flex-col items-center rounded-[50px] p-15">
          <img src="./img/img-projects/voltex-pagina.jpg" alt="logo" />
          <h2 className="text-[25px] p-5">Tienda Online Voltex</h2>
          <p>Armado y mantenimiento de servidores</p>
          <button className='bg-[#171717] text-white p-3 rounded-sm'>Visitar Pagina</button>
          <button className='bg-[#171717] text-white p-3 rounded-sm'>Ver Repositorio</button>
        </div>
      </article>
    </>
  );
}

export default Projects
