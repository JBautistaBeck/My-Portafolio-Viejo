import github from "../utils/github.svg"
import instagram from "../utils/instagram.svg"
import linkedin from "../utils/linkedin.svg"
import twitter from "../utils/twitter.svg"

function Home() {

    const handleAboutClick = (id) => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        }

    };

  return (
    <div className="bg-blue-500 p-10 h-screen">

      <div className="flex flex-col justify-center items-center mt-32">
        <h1 className=" text-5xl">Juan Bautista María Beck</h1>
        <h2 className=" text-3xl mt-5">Full Stack Developer</h2>
      </div>

      <div className="flex justify-center mt-12">
        <a  href="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck/" target="_blank" rel="noopener noreferrer">    <img className='w-10 h-10 hover:transform hover:scale-105' src={linkedin} alt='LinkedIn'/>    </a>
        <a  href="https://github.com/JBautistaBeck" target="_blank" rel="noopener noreferrer">                              <img className='w-10 h-10 ml-6 hover:transform hover:scale-105' src={github} alt='GitHub'/>        </a>
        <a  href="https://www.instagram.com/bautista.beck/" target="_blank" rel="noopener noreferrer">                      <img className='w-10 h-10 ml-6 mr-6 hover:transform hover:scale-105' src={instagram} alt='Instagram'/>  </a>
        <a  href="https://twitter.com/JuanBeckFS" target="_blank" rel="noopener noreferrer">                                <img className='w-10 h-10 hover:transform hover:scale-105' src={twitter} alt='Twitter'/>      </a>
      </div>

        <div className="flex justify-center mt-12">
            <button onClick={handleAboutClick} className="  text-black px-4 py-2 rounded border border-black hover:transform hover:scale-105">More about me</button>
        </div>

    </div>

  );
}

export default Home;
