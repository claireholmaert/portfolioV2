import Image from '../../public/medias/images/logo.png';

function Header() {
  return (
    <header id='header' className="flex items-center justify-between mt-10">
        <h1>
          <img src={Image} width={80} alt="logo du site avec la lettre C couleur orange et la lettre H couleur noire" />
        </h1>
        <div className="font-secondary">
            <nav className="space-x-5">
                <a href="#projects" className="animate">Projets</a>
                <a href="#skills" className="animate">Compétences</a>
                <a href="#contact" className="animate">Contact</a>
            </nav>
        </div>
    </header>
  )
}

export default Header;
