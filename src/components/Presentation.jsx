import Image from '../../public/medias/images/girl3d.png';

function Presentation() {
  return (
    <div className='bg-black max-w-6xl mx-auto p-10 rounded-lg flex flex-col-reverse items-center justify-between md:flex-row'>
      <div className='flex flex-col'>
      <p className='space-y-5 tracking-wider mt-5 md:mt-0'>
            <span className='text-white font-secondary text-sm md:text-base'>
            Salut, je m'appelle
            </span>
            <span className='text-primary text-2xl lg:text-4xl font-tertiary tracking-wider'> Claire Holmaërt</span>
            <span className='text-white font-secondary text-sm md:text-base block'>
            Je suis une développeuse web full stack avec une touche d'originalité. Mon parcours atypique, de militaire à codeuse, ne manque pas de piquant ! J'ai troqué mes rangers pour des lignes de code, mais je garde l'esprit de combat dans la créativité d'un site, le choix de langage et la résolution de bugs. 
            </span>
        </p>
        <a href="#contact" className='mt-5 w-48 animate bg-yellow hover:bg-hover-yellow hover:animate px-4 py-2 md:px-5 md:py-3 rounded-lg text-xl font-primary tracking-widest'>
            Contactez-moi
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
