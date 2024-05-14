// react
import { useRef } from 'react';

// email
import emailjs from '@emailjs/browser';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// images
import Image from '../../public/medias/images/light-girl.png';

function Contact() {
    const form = useRef();

    const notify = () => toast();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
      .sendForm('service_c2yvj8r', 'template_0awiyst', form.current, {
        publicKey: 'UzhmqBoR2CxAIhQuc',
        to_name: e.target.to_name.value,
        from_name: e.target.from_name.value
      })
      .then(
        () => {
          toast.success('Message envoyé');
        form.current.reset();
        },
        (error) => {
          toast.error("Erreur lors de l'envoi du message", error.text);
        },
      );
  };

  return (
    <div id='contact' className='pt-4'>
        <div className='text-center lg:mb-10'>
        <h2 className='text-xl mb-10 font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest'>Contact</h2>
        <div className='text-xl space-y-2'>
        <p className='shadowTitle text-4xl font-tertiary text-primary'>Une idée de projet...</p>
        <p className='font-primary dark:text-white'>Envoyez-moi un email</p>
        </div>
        </div>
        
    <form ref={form} onSubmit={sendEmail} className='max-w-6xl mx-auto flex items-center p-10 font-secondary rounded-lg lg:space-x-10'>
        <div className='relative w-1/2 bg-gradient-to-b from-black via-black to-marine rounded-full dark:bg-none hidden lg:flex'>
        <img 
        src={Image} 
        className='w-full object-cover blur-2xl dark:blur-lg'
        alt="image floutée d'une femme en 3d tenant une ampoule allumé dans chaque main" />
        <img 
        src={Image} 
        className='absolute inset-0 w-full object-cover p-5'
        alt="image d'une femme en 3d tenant une ampoule allumé dans chaque main" />
        </div>
        <div className='grid grid-cols-2 gap-5 z-10 w-full border-2 border-dashed p-5 md:p-10 border-primary rounded-lg'>
        <div>
        <label className='hidden'>Nom</label>
      <input 
      type="text" 
      name="to_name"
      placeholder='Nom'
      className="focus:ring-primary focus:border-primary block w-full border-formulaire rounded-md md:p-5"
    />
        </div>
        <div>
        <label className='hidden'>Email</label>
      <input 
      type="email" 
      name="from_name"
      placeholder='Email'
      className="focus:ring-primary focus:border-primary block w-full border-formulaire rounded-md md:p-5"
    />
        </div>
        <div className='col-span-2'>
        <label className='hidden'>Message</label>
      <textarea 
      name="message" 
      placeholder='Message'
      className="focus:ring-primary focus:border-primaryblock w-full border-formulaire rounded-md pb-16 pt-3"
      />
        </div>
        <div className='flex justify-end col-span-2'>
        <input 
        onClick={notify}
        className='animate bg-yellow hover:bg-hover-yellow hover:animate px-4 py-2 md:px-5 md:py-3 rounded-lg text-xl font-primary tracking-widest' 
        type="submit" 
        value="Envoyer" />
        <ToastContainer />
        </div>
        </div> 
    </form>
    </div>
  );
}

export default Contact
