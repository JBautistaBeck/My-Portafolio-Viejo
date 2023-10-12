import github from "../utils/github.svg"
import instagram from "../utils/instagram.svg"
import linkedin from "../utils/linkedin.svg"
import twitter from "../utils/twitter.svg"

function Home() {
  return (
    <div className="bg-green-500 text-white p-10 h-screen">

      <div className="">
        <h1 className="">Juan Bautista María Beck</h1>
        <h2 className="">Full Stack Developer</h2>
      </div>

      <div className="flex">
        <a  href="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck/" target="_blank" rel="noopener noreferrer">    <img className='w-10 h-10' src={linkedin} alt='LinkedIn'/>    </a>
        <a  href="https://github.com/JBautistaBeck" target="_blank" rel="noopener noreferrer">                              <img className='w-10 h-10' src={github} alt='GitHub'/>        </a>
        <a  href="https://www.instagram.com/bautista.beck/" target="_blank" rel="noopener noreferrer">                      <img className='w-10 h-10' src={instagram} alt='Instagram'/>  </a>
        <a  href="https://twitter.com/JuanBeckFS" target="_blank" rel="noopener noreferrer">                                <img className='w-10 h-10' src={twitter} alt='Twitter'/>      </a>
      </div>
      {/* <Link className='link-boton-aboutme' to="/about"><button className='button-aboutme'>More about me</button></Link> */}
    </div>

  );
}

export default Home;
