import logoMalfa from "../utils/logoMalfa.jpg"

function NavBar() {
    return (
      <div className=" text-white p-4 bg-gray-200 flex justify-between">

        <img src={logoMalfa} alt="LogoMalfa" className=" max-h-14"></img>

        <div className="">
            <button className=" text-black border-b border-black m-4">About Us</button>
            <button className=" text-black border-b border-black m-4">Nuestras Razas</button>
        </div>

        
  
      </div>
    );
  }
  
  export default NavBar;
  