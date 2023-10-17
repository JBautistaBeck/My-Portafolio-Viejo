import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
      <div className="bg-blue-500 p-4 flex flex-col items-center justify-center">
        
        <h1 className=" text-5xl p-4 font-bold">Contáctame</h1>
        

        <p className=" text-lg text-center mb-7">
            Soy un programador en constante aprendizaje. Si estás interesado en colaborar o tienes alguna pregunta, no dudes en contactarme. Puedes escribirme a mi dirección de correo electrónico: 
              <a href="mailto:juanbautistabeck@gmail.com" className="text-blue-900 hover:underline"> juanbautistabeck@gmail.com</a>.
              También puedes conectar conmigo en mis perfiles de redes sociales.
              ¡Espero tener noticias tuyas pronto!
        </p>

        <p className=' text-2xl mb-5'><FontAwesomeIcon icon={faCode} /> con <FontAwesomeIcon icon={faHeart} /></p>

      </div>
    );
  }
  
  export default Footer;
  