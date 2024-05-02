

function Header() {
  return (
    <header className="flex justify-between max-w-7xl mx-auto mt-10">
        <h1>Claire Holmaert</h1>
        <div>
            <nav className="space-x-5">
                <a href="#">A propos</a>
                <a href="#">Projets</a>
                <a href="#">Compétences</a>
                <a href="#">Tarifs</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    </header>
  )
}

export default Header
