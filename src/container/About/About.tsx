import aboutLogo from '../../assets/about_logo.svg'
import about from '../../assets/about.jpg';
import './about.css';


const About = () => { 
  return (
    <div className='about' id='About'>
        <div className='about__container section__padding'>       
            <article className='about__desc'>
                <span className='about__desc-title'>
                    <h2 className='p__title'>Nosotros</h2>
                    <img src={aboutLogo} alt="pizza store" />
                </span>
                <p className='p__text'>
                Nos levantamos todas las mañanas para hacer masa fresca desde cero y con una receta que tiene más de 40 años. Así que sí, lo hemos estado haciendo así desde hace un tiempo. Nuestros abuelos lo hicieron de esta manera, nuestros padres lo hicieron de esta manera, así que no hay posibilidad de que lo hagamos de otra manera. Nuestra salsa para pizza está hecha con tomates 100% orgánicos y albahaca fresca de nuestro jardín. Hacemos nuestra mozzarella fresca a partir de una cuajada de Wisconsin todas las semanas. Nuestras pizzas están hechas con nuestra propia mezcla de leche entera, parcialmente descremada y mozzarella fresca para lograr un compañero húmedo pero no demasiado grasoso para nuestra salsa de pizza de la casa. Nuestros hornos se calientan a más de 500 grados para que a las 11 a. m. tengamos pizzas frescas listas para rebanar y servir a nuestros queridos clientes.
                </p>
            </article>
            <div className='about__img'>
                <img src={about} alt="about" />
            </div>
        </div>
    </div>
  )
}

export default About