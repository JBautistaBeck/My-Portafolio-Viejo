import './App.css';
import NavBar from './componentes/NavBar';
import About from './views/about';
import Home from './views/home';

function App() {
  return (
    <div className="bg-red-500 text-white p-4 h-screen">
      <NavBar></NavBar>
      <h1 className="text-2xl">Malfa Criadores</h1>

      <Home></Home>
      <About></About>

    </div>
  );
}

export default App;
