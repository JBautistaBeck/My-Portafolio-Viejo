import NavBar from './componentes/NavBar';
import Footer from './componentes/footer';
import About from './views/about';
import Home from './views/home';
import Proyectos from './views/nuestrasRazas';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <div className="flex-1">
        <Home />
      </div>
      <div className="flex-1" id="about">
        <About />
      </div>
      <div className="flex-1" id="razas">
        <Proyectos></Proyectos>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;


