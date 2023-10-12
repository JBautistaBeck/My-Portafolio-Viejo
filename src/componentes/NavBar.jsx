import logoMalfa from "../utils/logoMalfa.jpg"

function NavBar() {
    return (
      <div className=" text-white p-4 bg-gray-200">

        <img src={logoMalfa} alt="LogoMalfa" className=" max-h-20"></img>

        <button className=" text-black">About Us</button>
  
      </div>
    );
  }
  
  export default NavBar;
  