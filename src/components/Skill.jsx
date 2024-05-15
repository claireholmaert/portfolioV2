// images
import Image1 from '../../public/medias/images/javascript.svg';
import Image2 from '../../public/medias/images/react.svg';
import Image3 from '../../public/medias/images/nextjs-icon.svg';
import Image4 from '../../public/medias/images/symfony.svg';
import Image5 from '../../public/medias/images/sass.svg';
import Image6 from '../../public/medias/images/tailwindcss-icon.svg';
import Image7 from '../../public/medias/images/mysql.svg';
import Image8 from '../../public/medias/images/firebase.svg';
import Image9 from '../../public/medias/images/docker-icon.svg';

// translation
import { useTranslation } from 'react-i18next';

function Skill() {

  const { t } = useTranslation();

  return (
    <div id='skills' className="max-w-6xl mx-auto pt-1">
      <div className="flex items-center justify-center my-20">
        <h2 className="text-xl font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest">
          {t('my_skills')}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
        {[{ img: Image1, name: 'Javascript', link: 'https://devdocs.io/javascript/' },
          { img: Image2, name: 'React', link: 'https://fr.react.dev/' },
          { img: Image3, name: 'NextJs', link: 'https://nextjs.org/' },
          { img: Image4, name: 'Sass', link: 'https://sass-lang.com/' },
          { img: Image5, name: 'Tailwind', link: 'https://tailwindcss.com/' },
          { img: Image6, name: 'Symfony', link: 'https://symfony.com/' },
          { img: Image7, name: 'MySQL', link: 'https://dev.mysql.com/' },
          { img: Image8, name: 'Firebase', link: 'https://firebase.google.com/' },
          { img: Image9, name: 'Docker', link: 'https://docs.docker.com/' }
        ].map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            className='animate hover:scale-110'
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-full h-48 rounded-lg">
              <div className='relative w-1/4'>
                <img
                  src={skill.img}
                  className='w-full object-cover blur-2xl dark:blur-sm'
                  alt={skill.name}
                />
                <img
                  src={skill.img}
                  className='absolute top-0 left-0 w-full object-cover'
                  alt={skill.name}
                />
              </div>
              <h4 className='mt-4 font-primary tracking-widest text-base md:text-xl lg:text-2xl dark:text-white'>{skill.name}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Skill;
