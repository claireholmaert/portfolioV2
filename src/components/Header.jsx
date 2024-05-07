// react
import { useState } from 'react';

// images
import Image1 from '../../public/medias/images/logo.png';
import Image2 from '../../public/medias/images/dark-logo.svg';

function Header() {

    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark');
    }

  return (
    <header id='header' className="flex items-center justify-between pt-10">
        <h1>
          <img src={Image1} className='dark:hidden' width={80} alt="logo du site avec la lettre C couleur orange et la lettre H couleur noire" />
          <img src={Image2} className='hidden dark:block' width={80} alt="logo du site avec la lettre C couleur orange et la lettre H couleur blanche" />
        </h1>
        <div className="font-secondary">
            <nav className="flex items-center space-x-5">
                <a href="#projects" className="animate">Projets</a>
                <a href="#skills" className="animate dark:text-yellow dark:hover:text-hover-yellow">Compétences</a>
                <a href="#contact" className="animate">Contact</a>
                <label className="inline-flex items-center cursor-pointer">
                  <input 
                  type="checkbox" 
                  value="" 
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={handleToggle}
                  id='darkModeToggle' />
                  <div className="relative w-11 h-6 bg-gray peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow"></div>
                </label>
            </nav>
        </div>
    </header>
  )
}

export default Header;
