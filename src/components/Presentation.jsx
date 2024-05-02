import Image from '../../public/medias/images/girl3d.png';

function Presentation() {
  return (
    <div className='max-w-6xl mx-auto flex items-center justify-between'>
        <p>
            <span className='font-secondary'>
            Salut, je m'appelle
            </span>
            <span className='text-primary font-tertiary'> Claire Holmaërt</span>
            <span className='font-secondary block'>
            Je suis une développeuse web full stack avec une touche d'originalité. Mon parcours atypique, de militaire à codeuse, ne manque pas de piquant ! J'ai troqué mes rangers pour des lignes de code, mais je garde l'esprit de combat dans la résolution de bugs. 
            </span>
        </p>
        <div className="relative">
            <img src={Image} className='w-full object-cover blur-2xl' alt="image flou en 3d d'une fille avec des lunettes derrière une table, posé dessus il y a un ordinateur de la marque apple avec une tasse de café et des journaux derrière l'ordinateur"/>
            <img src={Image} className='absolute inset-0 w-full object-cover' alt="image 3d d'une fille avec des lunettes derrière une table, posé dessus il y a un ordinateur de la marque apple avec une tasse de café et des journaux derrière l'ordinateur"/>
        </div>
    </div>
  )
}

export default Presentation;
