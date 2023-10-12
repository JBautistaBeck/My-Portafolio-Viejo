import logoMalfa from "../utils/logoMalfa.jpg"

function NavBar() {
    return (
      <div className=" text-white p-4 bg-gray-200 flex justify-between">

        <img src={logoMalfa} alt="LogoMalfa" className=" max-h-14"></img>

        <div className=" mt-4">

            <a href="#about" className="text-black border-b border-black m-4 scroll-link hover:bg-red-600 ">About Us</a>
            <a href="#nuestrasRazas" className="text-black border-b border-black m-4  scroll-link hover:bg-red-600">Nuestras Razas</a>

        </div>

        
  
      </div>
    );
  }
  
  export default NavBar;
  