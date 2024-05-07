// images
import Image1 from '../../public/medias/images/javascript.svg';
import Image2 from '../../public/medias/images/react.svg';
import Image3 from '../../public/medias/images/nextjs-icon.svg';
import Image4 from '../../public/medias/images/sass.svg';
import Image5 from '../../public/medias/images/tailwindcss-icon.svg';
import Image6 from '../../public/medias/images/symfony.svg';
import Image7 from '../../public/medias/images/mysql.svg';
import Image8 from '../../public/medias/images/firebase.svg';
import Image9 from '../../public/medias/images/docker-icon.svg';

function Skill() {
  return (
    <div id='skills' className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center my-20">
        <h2 className="text-xl font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest">
            Mes compétences
        </h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
            <a 
            href="https://devdocs.io/javascript/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image1} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image1} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>Javascript</h4>
            </div>
            </a>
            <a 
            href="https://fr.react.dev/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image2} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image2} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>React</h4>
            </div>
            </a>
            <a 
            href="https://nextjs.org/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image3} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image3} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>NextJs</h4>
            </div>
            </a>
            <a 
            href="https://symfony.com/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image6} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image6} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>Symfony</h4>
            </div>
            </a>
            <a 
            href="https://sass-lang.com/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image4} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image4} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>Sass</h4>
            </div>
            </a>
            <a 
            href="https://tailwindcss.com/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image5} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image5} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>Tailwind</h4>
            </div>
            </a>
            <a 
            href="https://dev.mysql.com/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image7} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image7} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>MySQL</h4>
            </div>
            </a>
            <a 
            href="https://firebase.google.com/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image8} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image8} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>Firebase</h4>
            </div>
            </a>
            <a 
            href="https://docs.docker.com/" 
            className='animate hover:scale-110'
            target="_blank">
            <div className="flex flex-col items-center justify-center space-y-5 w-full h-48 rounded-lg">
                <div className='relative left-20'>
                <img 
                src={Image9} 
                className='w-1/3 object-cover blur-2xl dark:blur-sm' 
                alt="" />
                <img 
                src={Image9} 
                className='absolute object-cover inset-0 w-1/3' 
                alt="" />
                </div>
                <h4 className='font-primary tracking-widest text-2xl dark:text-white'>Docker</h4>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Skill;
