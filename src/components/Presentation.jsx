// images
import Image from '../../public/medias/images/girl3d.png';

// translation
import { useTranslation } from 'react-i18next';

function Presentation() {

  const { t } = useTranslation();

  return (
    <div className='bg-black max-w-6xl mx-auto p-10 rounded-lg flex flex-col-reverse items-center justify-between md:flex-row'>
      <div className='flex flex-col'>
      <p className='space-y-5 tracking-wider mt-5 md:mt-0'>
            <span className='text-white font-secondary text-sm md:text-base'>
            {t('hello')}
            </span>
            <span className='text-primary text-2xl lg:text-4xl font-tertiary tracking-wider'> Claire Holmaërt</span>
            <span className='text-white font-secondary text-sm md:text-base block'>
            {t('description')} 
            </span>
        </p>
        <a href="#contact" className='mt-5 w-48 animate text-center bg-yellow hover:bg-hover-yellow hover:animate px-4 py-2 md:px-5 md:py-3 rounded-lg text-xl font-primary tracking-widest'>
        {t('contact_me')} 
          </a>
      </div>
        
        <div className="relative">
            <img src={Image} className='w-full object-cover blur-2xl' alt="image flou en 3d d'une fille avec des lunettes derrière une table, posé dessus il y a un ordinateur de la marque apple avec une tasse de café et des journaux derrière l'ordinateur"/>
            <img src={Image} className='absolute inset-0 w-full object-cover' alt="image 3d d'une fille avec des lunettes derrière une table, posé dessus il y a un ordinateur de la marque apple avec une tasse de café et des journaux derrière l'ordinateur"/>
        </div>
    </div>
  )
}

export default Presentation;
