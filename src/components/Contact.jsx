// react
import { useRef } from 'react';

// email
import emailjs from '@emailjs/browser';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// images
import Image from '../../public/assets/images/light-girl.webp';

// translation
import { useTranslation } from 'react-i18next';

function Contact() {

  const { t } = useTranslation();
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
          toast.success(t('success_message'));
        form.current.reset();
        },
        (error) => {
          toast.error(`${t('error_message')}: ${error.text}`);
        },
      );
  };

  return (
    <div id='contact' className='pt-4'>
        <div className='text-center lg:mb-10'>
        <h2 className='text-3xl lg:text-5xl mb-10 font-primary px-7 py-3 bg-primary rounded-lg uppercase inline-block tracking-widest'>Contact</h2>
        <div className='space-y-2'>
        <p className='text-xl'>{t('idea')}</p>
        <p className='dark:text-blue-50'>{t('send_email')}</p>
        </div>
        </div>
        
    <form ref={form} onSubmit={sendEmail} className='max-w-6xl mx-auto flex items-center p-10 rounded-lg lg:space-x-10'>
        <div className='relative w-1/2 bg-slate-900 rounded-full dark:bg-none hidden lg:flex'>
        <img 
        src={Image} 
        width={100}
        height={100}
        className='w-full object-cover blur-2xl dark:blur-lg'
        loading='lazy'
        alt="image floutée d'une femme en 3d tenant une ampoule allumé dans chaque main" />
        <img 
        src={Image} 
        width={100}
        height={100}
        className='absolute inset-0 w-full object-cover p-5'
        loading='eager'
        alt="image d'une femme en 3d tenant une ampoule allumé dans chaque main" />
        </div>
        <div className='grid grid-cols-2 gap-5 z-10 w-full border-2 border-dashed p-5 md:p-10 border-blue-600 rounded-lg dark:border-amber-500'>
        <div>
        <label className='hidden'>{t('name')}</label>
      <input 
      type="text" 
      name="to_name"
      placeholder={t('name')}
      className="border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 block w-full border-formulaire rounded-md md:p-5 dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:border-amber-50"
    />
        </div>
        <div>
        <label className='hidden'>Email</label>
      <input 
      type="email" 
      name="from_name"
      placeholder='Email'
      className="border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 block w-full border-formulaire rounded-md md:p-5 dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:border-amber-50"
    />
        </div>
        <div className='col-span-2'>
        <label className='hidden'>Message</label>
      <textarea 
      name="message" 
      placeholder='Message'
      className="border-2 border-blue-200 focus:ring-blue-500 focus:border-blue-500 block w-full border-formulaire rounded-md md:p-5 dark:focus:ring-amber-500 dark:focus:border-amber-500 dark:border-amber-50"
      />
        </div>
        <div className='flex justify-end col-span-2'>
        <input 
        onClick={notify}
        className='animate bg-blue-600 text-blue-50 hover:bg-blue-500 px-4 py-2 md:px-5 md:py-3 rounded-lg text-xl font-primary tracking-widest dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-amber-50' 
        type="submit" 
        value={t('send_button')} 
        />
        <ToastContainer />
        </div>
        </div> 
    </form>
    </div>
  );
}

export default Contact
