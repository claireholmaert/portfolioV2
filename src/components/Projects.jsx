// carousel
import AliceCarousel from "react-alice-carousel";
import '../css/carousel.css';

// props
import PropTypes from 'prop-types';

// images
import Image1 from '../../public/medias/images/burgerHouse.png';
import Image2 from '../../public/medias/images/budgetApp.png';
import Image3 from '../../public/medias/images/hash.png';

// translation
import { useTranslation } from 'react-i18next';

const Slide = ({children, image, title, link}) => {

  const { t } = useTranslation();
  
  return(
    <div className="grid md:grid-cols-2 p-6">
      <div className="relative bg-gray w-full h-[250px] md:h-[350px] rounded-lg">
        <img 
        src={image} 
        className="absolute rounded-lg bg-gray top-0 left-0 w-full h-full object-cover object-bottom z-0"
        alt="" />
      </div>
      <div className="p-10 mb-10">
        <h3 className="text-3xl text-primary font-tertiary mb-5 md:mb-10">{title}</h3>
        <p className="font-secondary tracking-wide text-base lg:text-lg leading-relaxed text-black mb-10 dark:text-white">{children}</p>
        <a 
        href={link} 
        className="animate bg-yellow hover:bg-hover-yellow hover:animate px-5 py-3 rounded-lg text-xl font-primary tracking-widest"
        target="_blank"
        >
          {t('learn_more')}</a>
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

  const { t } = useTranslation();

  const items = [
    <Slide
    key={0}
    image={Image1}
    title="Burger House"
    link="https://burger-lrgt.vercel.app/"
    >
      <p>{t('burger_house_description')}</p>
    </Slide>,
    <Slide
    key={1}
    image={Image2}
    title="Budget App"
    link="https://budget-app-beige.vercel.app/"
    >
      <p>{t('budget_app_description')}</p>
    </Slide>,
    <Slide
    key={2}
    image={Image3}
    title="Forge Pass"
    link="https://hashage-password.vercel.app/"
    >
      <p>{t('forge_pass_description')}</p>
    </Slide>,
  ]

  return (
    <div id="projects" className="max-w-6xl mx-auto pt-1">
        <div className="flex items-center justify-center my-10">
        <h2 className="text-xl font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest">
            {t('my_projects')}
        </h2>
        </div>
        <div className="shadow-2xl mb-20 rounded-lg dark:shadow-lg dark:shadow-yellow">
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
