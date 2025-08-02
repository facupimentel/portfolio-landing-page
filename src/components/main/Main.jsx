import AboutMe from "./AboutMe"
import Services from "./Services"

const Main = () => {
  return (
    <main className="text-white flex items-center flex-col">
      <article className=" w-[95%] flex justify-center items-center">
        <div className="mt-30">
          <img src="./img/me.png" alt="personaje hecho por ia" />
        </div>

        <div className="text-center">
          <h1 className="text-[30px] mb-10">Hola, mi nombre es Facundo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id,
            cupiditate numquam reprehenderit ab pariatur doloremque nihil, unde
            dignissimos excepturi, amet delectus minima non! Praesentium sed sit
            eveniet error quo.
          </p>
          <button className="p-3 bg-gray-700 text-white rounded-[20px] mr-10 mt-5">
            My GitHub
          </button>
          <button className="p-3 bg-gray-700 text-white rounded-[20px]">
            My Linkedin
          </button>
        </div>
      </article>

      <AboutMe />
      <Services />
    </main>
  );
}

export default Main
