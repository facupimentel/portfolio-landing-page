import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="flex flex-col text-center ">
        <h1 className="text-[50px] mb-5">My Projects</h1>
        <h2 className="text-[25px]">
          proyectos realizados a lo largo de mi carrera
        </h2>
      </div>
      <article className=" flex flex-col text-center mt-20 mb-30 items-center gap-15 p-10">
        <section className="bg-[#42d802] text-black flex justify-around items-center rounded-[50px] p-15 w-[80%]">
          <img
            src="./img/img-projects/voltex-pagina.jpg"
            alt="logo"
            className="w-[60%]"
          />
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[25px] p-5">Pagina Web Voltex</h2>
            <p>Proyecto realizado a base de HMTL y CSS</p>
            <button className="bg-[#171717] text-white p-3 rounded-sm">
              Visitar Pagina
            </button>
            <button className="bg-[#171717] text-white p-3 rounded-sm">
              Ver Repositorio
            </button>
          </div>
        </section>

        <section className="bg-[#42d802] text-black flex justify-around items-center rounded-[50px] p-15 w-[80%]">
          <img
            src="./img/img-projects/voltex-pagina.jpg"
            alt="logo"
            className="w-[60%]"
          />
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[25px] p-5">Voltex App</h2>
            <p>App hecha con React.js</p>
            <button className="bg-[#171717] text-white p-3 rounded-sm">
              Visitar Pagina
            </button>
            <button className="bg-[#171717] text-white p-3 rounded-sm">
              Ver Repositorio
            </button>
          </div>
        </section>

        <section className="bg-[#42d802] text-black flex justify-around items-center rounded-[50px] p-15 w-[80%]">
          <img
            src="./img/img-projects/voltex-pagina.jpg"
            alt="logo"
            className="w-[60%]"
          />
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[25px] p-5">Tienda Online Voltex</h2>
            <p>E-Commerce elaborado con frontend y backend</p>
            <button className="bg-[#171717] text-white p-3 rounded-sm">
              Visitar Pagina
            </button>
            <button className="bg-[#171717] text-white p-3 rounded-sm">
              Ver Repositorio
            </button>
          </div>
        </section>
      </article>
    </>
  );
}

export default Projects
