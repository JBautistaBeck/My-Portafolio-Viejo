import github from "../utils/github.svg"
import instagram from "../utils/instagram.svg"
import linkedin from "../utils/linkedin.svg"
import twitter from "../utils/twitter.svg"

function Home() {
  return (
    <div className="bg-green-500 p-10 h-screen">

      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className=" text-5xl">Juan Bautista María Beck</h1>
        <h2 className=" text-3xl mt-10">Full Stack Developer</h2>
      </div>

      <div className="flex justify-center mt-12">
        <a  href="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck/" target="_blank" rel="noopener noreferrer">    <img className='w-10 h-10 ' src={linkedin} alt='LinkedIn'/>    </a>
        <a  href="https://github.com/JBautistaBeck" target="_blank" rel="noopener noreferrer">                              <img className='w-10 h-10 ml-6' src={github} alt='GitHub'/>        </a>
        <a  href="https://www.instagram.com/bautista.beck/" target="_blank" rel="noopener noreferrer">                      <img className='w-10 h-10 ml-6 mr-6' src={instagram} alt='Instagram'/>  </a>
        <a  href="https://twitter.com/JuanBeckFS" target="_blank" rel="noopener noreferrer">                                <img className='w-10 h-10' src={twitter} alt='Twitter'/>      </a>
      </div>
      {/* <Link className='link-boton-aboutme' to="/about"><button className='button-aboutme'>More about me</button></Link> */}
    </div>

  );
}

export default Home;
