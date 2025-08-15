import AboutMe from "../AboutMe"
import Services from "../Services"
import Projects from "../Projects";
import Contact from "../Contact";

const Main = () => {
  return (
    <main className="text-white flex items-center flex-col">
      <article className=" w-[95%] flex justify-center items-center mt-5 p-5">
        <div className="mt-20">
          <img src="./img/me.png" alt="personaje hecho por ia" />
        </div>

        <div className="text-center">
          <h1 className="text-[50px] ">Hola, mi nombre es Facundo</h1>
          <p className="text-[25px] p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id,
            cupiditate numquam reprehenderit ab pariatur doloremque nihil, unde
            dignissimos excepturi, amet delectus minima non! Praesentium sed sit
            eveniet error quo.
          </p>
          <button className="p-3 bg-[#42d802] text-black rounded-[20px] mr-10 mt-5">
            My CV
          </button>
          <button className="p-3 bg-[#42d802] text-black rounded-[20px]">
            My Linkedin
          </button>
        </div>
      </article>

      <AboutMe />
      <Services />
      <Projects/>
      <Contact/>
    </main>
  );
}

export default Main
