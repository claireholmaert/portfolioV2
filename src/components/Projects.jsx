// carousel
import AliceCarousel from "react-alice-carousel";
import '../css/carousel.css';

// props
import PropTypes from 'prop-types';

// images
import Image1 from '../../public/assets/images/burgerHouse.png';
import Image2 from '../../public/assets/images/budgetApp.avif';
import Image3 from '../../public/assets/images/hash.png';
import Image4 from '../../public/assets/images/brunch-delice.avif';

// translation
import { useTranslation } from 'react-i18next';

const Slide = ({children, image, title, link}) => {

  const { t } = useTranslation();
  
  return(
    <div className="grid md:grid-cols-2 p-6 rounded-lg">
      <div className="relative w-full h-[200px] md:h-[350px]">
        <img 
        src={image} 
        className="absolute rounded-lg bg-gray top-0 left-0 w-full h-full object-cover object-bottom z-0"
        alt="" />
      </div>
      <div className="p-10 mb-10">
        <h3 className="text-xl text-blue-600 mb-5 md:mb-10">{title}</h3>
        <div className="font-secondary tracking-wide leading-relaxed text-black mb-10 dark:text-white">{children}</div>
        <a 
        href={link} 
        className="animate bg-blue-600 text-blue-50 hover:bg-hover-yellow hover:animate px-5 py-3 rounded-lg text-xl font-primary tracking-widest"
        target="_blank"
        >
          {t('learn_more')} <span className="sr-only">- {title}</span></a>
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
      {t('burger_house_description')}
    </Slide>,
    <Slide
    key={1}
    image={Image4}
    title="Brunch Delice"
    link="https://brunch-delice.vercel.app/"
    >
      {t('brunch_delice_description')}
    </Slide>,
    <Slide
    key={2}
    image={Image2}
    title="Budget App"
    link="https://budget-app-beige.vercel.app/"
    >
      {t('budget_app_description')}
    </Slide>,
    <Slide
    key={3}
    image={Image3}
    title="Forge Pass"
    link="https://hashage-password.vercel.app/"
    >
      {t('forge_pass_description')}
    </Slide>,
  ]

  return (
    <div id="projects" className="max-w-6xl mx-auto pt-1">
        <div className="flex items-center justify-center my-10">
        <h2 className="text-3xl lg:text-5xl uppercase tracking-widest">
            {t('my_projects')}
        </h2>
        </div>
        <div className="shadow-2xl mb-20 rounded-lg dark:shadow-lg dark:shadow-amber-500">
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
