import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="flex items-center w-full mb-15">
        <article className="flex justify-center w-[100%]">
          <form
            className="w-[80%] p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="text-white block mb-1 font-medium">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-400"
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-400"
              />
            </div>

            <div className="mb-4">
              <label className="text-white block mb-1 font-medium">
                Mensaje
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </article>

        <article className="w-[100%] mb-10 ">
          <div className="text-center max-w-lg mx-auto p-21 rounded-lg shadow-lg">
            <h1 className="text-[40px] mb-5  ">Contactame</h1>
            <p className="text-[20px] ">
              Si estas interesado en mis servicios no dudes en ponerte en
              contacto conmigo por medio de este formulario o en cualquiera de
              mis redes sociales, estamos atentos y agradecidos de su contacto,
              Saludos.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Contact
