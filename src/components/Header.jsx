function Header() {
  return (
    <header className="flex items-center justify-between mt-10">
        <h1>
            <span className="text-6xl text-primary font-primary">C</span>
            <span className="text-5xl text-black font-tertiary tracking-wider">.Holmaërt</span>
            </h1>
        <div className="font-secondary">
            <nav className="space-x-5">
                <a href="#" className="animate">A propos</a>
                <a href="#" className="animate">Projets</a>
                <a href="#" className="animate">Compétences</a>
                <a href="#" className="animate">Tarifs</a>
                <a href="#" className="animate">Contact</a>
            </nav>
        </div>
    </header>
  )
}

export default Header;
