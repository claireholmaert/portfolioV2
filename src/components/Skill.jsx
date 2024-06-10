// images
import Image1 from '../../public/assets/images/javascript.svg';
import Image2 from '../../public/assets/images/react.svg';
import Image3 from '../../public/assets/images/nextjs-icon.svg';
import Image4 from '../../public/assets/images/symfony.svg';
import Image5 from '../../public/assets/images/sass.svg';
import Image6 from '../../public/assets/images/tailwindcss-icon.svg';
import Image7 from '../../public/assets/images/mysql.svg';
import Image8 from '../../public/assets/images/firebase.svg';
import Image9 from '../../public/assets/images/docker-icon.svg';

// translation
import { useTranslation } from 'react-i18next';

function Skill() {

  const { t } = useTranslation();

  return (
    <div id='skills' className="max-w-6xl mx-auto pt-1">
      <div className="flex items-center justify-center my-5 lg:my-20">
        <h2 className="text-3xl lg:text-5xl uppercase tracking-widest">
          {t('my_skills')}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
        {[{ img: Image1, name: 'Javascript', link: 'https://devdocs.io/javascript/', alt: 'logo de javascript' },
          { img: Image2, name: 'React', link: 'https://fr.react.dev/', alt: 'logo de react' },
          { img: Image3, name: 'NextJs', link: 'https://nextjs.org/', alt: 'logo de next.js' },
          { img: Image4, name: 'Sass', link: 'https://sass-lang.com/', alt: 'logo de saas' },
          { img: Image5, name: 'Tailwind', link: 'https://tailwindcss.com/', alt: 'logo de tailwind' },
          { img: Image6, name: 'Symfony', link: 'https://symfony.com/', alt: 'logo de symfony' },
          { img: Image7, name: 'MySQL', link: 'https://dev.mysql.com/', alt: 'logo de mysql' },
          { img: Image8, name: 'Firebase', link: 'https://firebase.google.com/', alt:'logo de firebase' },
          { img: Image9, name: 'Docker', link: 'https://docs.docker.com/', alt: 'logo de docker' }
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
                  width={100}
                  height={100}
                  className='w-full object-cover blur-2xl dark:blur-sm'
                  loading='lazy'
                  alt={skill.alt}
                />
                <img
                  src={skill.img}
                  width={100}
                  height={100}
                  loading='eager'
                  className='absolute top-0 left-0 w-full object-cover'
                  alt={skill.alt}
                />
              </div>
              <h3 className='mt-4 tracking-widest text-md md:text-xl dark:text-blue-50'>{skill.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Skill;
