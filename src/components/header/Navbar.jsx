

const Navbar = () => {


  return (
    <>
      <header className="flex justify-center">
        <nav className="bg-gray-700 text-white flex items-center justify-around p-8 w-[95%] rounded-md mt-5">
          <h1>My Portafolios</h1>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>CV</li>
            <li>About Me</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar
