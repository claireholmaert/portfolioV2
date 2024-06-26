// images
import Image1 from '../../public/assets/images/burgerHouse.avif';
import Image2 from '../../public/assets/images/budgetApp.avif';
import Image3 from '../../public/assets/images/hash.avif';
import Image4 from '../../public/assets/images/brunch-delice.avif';

// translation
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
    <div id='projects' className="max-w-6xl mx-auto pt-1">
      <div className="flex items-center justify-center my-5 lg:my-20">
        <h2 className="text-3xl lg:text-5xl uppercase tracking-widest">
          {t('my_projects')}
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        <div className='col-span-1 w-full flex flex-col items-center justify-center space-x-5 shadow-md p-5 rounded-xl dark:shadow-amber-500 md:col-span-2 md:flex-row'>
          <img className='w-full md:w-1/2 object-cover rounded-lg' src={Image1} width={100} height={100} alt="image du projet Burger House" />
          <div className='flex flex-col items-center justify-center space-y-3 md:item-start md:justify-normal'>
            <h3 className='text-xl text-blue-600 font-semibold dark:text-amber-500 mt-3 md:mt-0'>Burger House</h3>
          <p className='text-center'>{t("burger_house_description")}</p>
          <a className='w-1/2 px-5 py-2.5 bg-blue-600 text-blue-50 rounded-md text-center animate hover:bg-blue-500 dark:bg-amber-500 dark:hover:bg-amber-400' href="https://burger-lrgt.vercel.app" target='_blank'>{t('learn_more')}<span className="sr-only">- Burger House</span></a>
          </div>
        </div>
        <div className='row-span-2 w-full flex flex-col items-center justify-center space-y-3 shadow-md p-5 rounded-xl dark:shadow-amber-500'>
        <img className='w-full object-cover rounded-lg' src={Image2} width={100} height={100} alt="image du projet Budget App" />
          <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-xl text-blue-600 font-semibold dark:text-amber-500'>Budget App</h3>
          <p className='text-center'>{t("budget_app_description")}</p>
          <a className='w-1/2 px-5 py-2.5 bg-blue-600 text-blue-50 rounded-md text-center animate hover:bg-blue-500 dark:bg-amber-500 dark:hover:bg-amber-400' href="https://budget-app-beige.vercel.app" target='_blank'>{t('learn_more')} <span className="sr-only">- Budget App</span></a>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-3 shadow-md p-5 rounded-xl dark:shadow-amber-500'>
        <img className='object-cover rounded-lg' src={Image3} width={500} height={500} alt="image du projet Burger House" />
          <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-xl text-blue-600 font-semibold dark:text-amber-500'>Forge Pass</h3>
          <p className='text-center'>{t("forge_pass_description")}</p>
          <a className='w-1/2 px-5 py-2.5 bg-blue-600 text-blue-50 rounded-md text-center animate hover:bg-blue-500 dark:bg-amber-500 dark:hover:bg-amber-400' href="https://hashage-password.vercel.app" target='_blank'>{t('learn_more')} <span className="sr-only">- Forge Pass</span></a>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-3 shadow-md p-5 rounded-xl dark:shadow-amber-500'>
        <img className='object-cover rounded-lg' src={Image4} width={500} height={500} alt="image du projet Burger House" />
          <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-xl text-blue-600 font-semibold dark:text-amber-500'>Brunch Delice</h3>
          <p className='text-center'>{t("brunch_delice_description")}</p>
          <a className='w-1/2 px-5 py-2.5 bg-blue-600 text-blue-50 rounded-md text-center animate hover:bg-blue-500 dark:bg-amber-500 dark:hover:bg-amber-400' href="https://brunch-delice.vercel.app" target='_blank'>{t('learn_more')} <span className="sr-only">- Brunch Delice</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

