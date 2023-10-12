import NavBar from './componentes/NavBar';
import About from './views/about';
import Home from './views/home';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />

      <div className="flex-1">
        <Home />
      </div>
      <div className="flex-1">
        <About />
      </div>
    </div>
  );
}

export default App;


