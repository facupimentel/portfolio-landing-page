import React from 'react'

const Services = () => {
  return (
    <>
      <div className="flex flex-col text-center mt-50">
        <h1 className="text-[40px] mb-5">Services</h1>
        <h2>transformando ideas en experiencias digitales</h2>
      </div>
      <article className=" flex text-center mt-20 mb-30 items-center gap-5">
        <div className="bg-gray-700 flex flex-col items-center rounded-[50px] p-5">
          <img
            src="./img/icon-services/website.png"
            alt="logo"
            className="w-35"
          />
          <h2>Paginas Webs</h2>
          <p>creacion de paginas web estaticas</p>
        </div>

        <div className="bg-gray-700 flex flex-col items-center rounded-[50px] p-5">
          <img
            src="./img/icon-services/mockup-design.png"
            alt="logo"
            className="w-35"
          />
          <h2>Diseño Web</h2>
          <p>diseño, armado y funcionalidad de un sitio web</p>
        </div>

        <div className=" bg-gray-700 flex flex-col items-center rounded-[50px] p-5">
          <img
            src="./img/icon-services/commerce.png"
            alt="logo"
            className="w-35"
          />
          <h2>E-Commerce</h2>
          <p>Tienda de productos con base de datos</p>
        </div>
      </article>
    </>
  );
}

export default Services
