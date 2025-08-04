import React from 'react'

const Services = () => {
  return (
    <>
      <div className="flex flex-col text-center mt-35">
        <h1 className="text-[50px] mb-5">Services</h1>
        <h2 className="text-[25px]">
          transformando ideas en experiencias digitales
        </h2>
      </div>
      <article className=" flex text-center mt-20 mb-30 items-center gap-15">
        <div className="bg-gray-700 flex flex-col items-center rounded-[50px] p-15">
          <img
            src="./img/icon-services/website.png"
            alt="logo"
            className="w-60"
          />
          <h2 className="text-[25px] p-5">Paginas Webs</h2>
          <p>creacion de paginas web estaticas</p>
        </div>

        <div className="bg-gray-700 flex flex-col items-center rounded-[50px] p-15">
          <img
            src="./img/icon-services/mockup-design.png"
            alt="logo"
            className="w-60"
          />
          <h2 className="text-[25px] p-5">Diseño Web</h2>
          <p>diseño, armado y funcionalidad de un sitio web</p>
        </div>

        <div className=" bg-gray-700 flex flex-col items-center rounded-[50px] p-15">
          <img
            src="./img/icon-services/backend-coding.png"
            alt="logo"
            className="w-60"
          />
          <h2 className="text-[25px] p-5">Desarrollo Backend</h2>
          <p>Armado y mantenimiento de servidores</p>
        </div>
      </article>
    </>
  );
}

export default Services
