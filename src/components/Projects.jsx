// carousel
import AliceCarousel from "react-alice-carousel";
import '../css/carousel.css';

// props
import PropTypes from 'prop-types';

// images
import Image1 from '../../public/medias/images/burgerHouse.png';
import Image2 from '../../public/medias/images/budgetApp.png';
import Image3 from '../../public/medias/images/hash.png';

const Slide = ({children, image, title, link}) => {
  return(
    <div className="grid grid-cols-2 p-6">
      <div className="relative bg-gray w-full h-[350px] rounded-lg">
        <img 
        src={image} 
        className="absolute rounded-lg bg-gray top-0 left-0 w-full h-full object-cover object-bottom z-0"
        alt="" />
      </div>
      <div className="p-10 mb-10">
        <h3 className="text-3xl text-primary font-tertiary mb-10">{title}</h3>
        <p className="font-secondary tracking-wide text-lg leading-relaxed text-black mb-10">{children}</p>
        
        <a 
        href={link} 
        className="animate bg-yellow hover:bg-hover-yellow hover:animate px-5 py-3 rounded-lg text-xl font-primary tracking-widest"
        target="_blank"
        >
          En savoir plus</a>
      </div>
    </div>
  )
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}

function Projects() {

  const items = [
    <Slide
    key={0}
    image={Image1}
    title="Burger House"
    link="https://burger-lrgt.vercel.app/"
    >
      <p>Burger House est un site vitrine que j'ai développé pour mettre en avant mes compétences de front-end.</p>
    </Slide>,
    <Slide
    key={1}
    image={Image2}
    title="Budget App"
    link="https://budget-app-beige.vercel.app/"
    >
      <p>Budget App est une application de gestion de budget intuitivement conçue pour aider les utilisateurs à gérer efficacement leurs finances personnelles ou professionnelles. </p>
    </Slide>,
    <Slide
    key={2}
    image={Image3}
    title="Forge Pass"
    link="https://hashage-password.vercel.app/"
    >
      <p>Forge Pass est une application que j'ai conçue pour répondre à un besoin crucial en matière de sécurité : la génération de mots de passe robustes et sécurisés.</p>
    </Slide>,
  ]

  return (
    <div className="max-w-6xl mx-auto ">
        <div className="flex items-center justify-center my-10">
        <h2 className="text-xl font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest">
            Mes projets
        </h2>
        </div>
        <div className="shadow-2xl mb-20 rounded-lg">
      <AliceCarousel 
      mouseTracking
      disableButtonsControls
      autoPlay
      infinite
      autoPlayInterval={4000}
      animationType="fadeout"
      items={items}
      />
      </div>
    </div> 
  )
}

export default Projects;
