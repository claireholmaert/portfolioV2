// react
import { useState } from 'react';

// images
import Image2 from '../../public/medias/images/dark-logo.svg';
import Image1 from '../../public/medias/images/logo.png';

function Header() {

    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('dark');
    }

  return (
    <header id='header' className="flex items-center justify-between xl:pt-10">
        <h1>
          <img src={Image1} className='w-10 md:w-16 xl:w-18 dark:hidden' alt="logo du site avec la lettre C couleur orange et la lettre H couleur noire" />
          <img src={Image2} className='w-10 md:w-16 xl:w-18 hidden dark:block' alt="logo du site avec la lettre C couleur orange et la lettre H couleur blanche" />
        </h1>
        <div className="font-secondary">
            <nav className="flex items-center space-x-10 lg:space-x-5">
              <div className='flex'>
              <a 
                href="#projects" 
                className="animate text-primary hover:text-primary/70 lg:flex"
                >
                  <span className='mr-1 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 lg:w-6 lg:h-6">
  <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
</svg>

                  </span>
                  <span className='hidden lg:flex'>Projets</span>
                </a>
              </div>
                <div className='flex'>
                <a 
                href="#skills" 
                className="animate text-black hover:text-black/70 lg:flex dark:text-yellow dark:hover:text-hover-yellow"
                >
                  <span className='mr-1 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 lg:w-6 lg:h-6">
  <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
  <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
  <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
</svg>

                  </span>
                  <span className='hidden lg:flex'>Compétences</span>
                  
                </a>
                </div>
                <div className='flex'>
                <a 
                href="#contact" 
                className="animate text-primary hover:text-primary/70 lg:flex">
                  <span className='mr-1 flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 lg:w-6 lg:h-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

                  </span>
                  <span className='hidden lg:flex'>Contact</span>
                </a>
                </div>
                
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
