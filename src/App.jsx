import NavBar from "./components/header/Navbar"
import Main from "./components/main/presentation/Main"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <body
      className="bg-neutral-900
    rounded shadow"
    >
      <NavBar />
      <Main />
      <Footer/>
    </body>
  );
}

export default App
