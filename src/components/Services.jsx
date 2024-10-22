// icons
import { CgDebug } from "react-icons/cg";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdBuild, MdCloud, MdCreate } from "react-icons/md";
import { TbBackground } from "react-icons/tb";

// translation
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div className="flex items-center justify-center my-5 lg:my-20">
        <h2 className="text-3xl lg:text-5xl uppercase tracking-widest">
          {t('my_services')}
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 place-items-center dark:text-black">
        <div className="w-40 h-40 bg-blue-100 rounded-full flex flex-col items-center justify-center dark:bg-amber-100">
          <MdCreate className="w-8 h-8" />
          {t('creation')}
        </div>
        <div className="w-40 h-40 bg-blue-200 rounded-full flex flex-col items-center justify-center dark:bg-amber-200">
          <TbBackground className="w-8 h-8" />
          {t('redesign')}
        </div>
        <div className="w-40 h-40 bg-blue-300 rounded-full flex flex-col items-center justify-center dark:bg-amber-300">
          <GrDocumentPerformance className="w-8 h-8" />
          {t('seo')}
        </div>
        <div className="w-40 h-40 bg-blue-400 rounded-full flex flex-col items-center justify-center dark:bg-amber-400">
          <CgDebug className="w-8 h-8" />
          {t('debug')}
        </div>
        <div className="w-40 h-40 bg-blue-500 rounded-full flex flex-col items-center justify-center dark:bg-amber-500">
          <MdCloud className="w-8 h-8" />
          {t('hosting')}
        </div>
        <div className="w-40 h-40 bg-blue-600 rounded-full flex flex-col items-center justify-center dark:bg-amber-600">
          <MdBuild className="w-8 h-8" />
          {t('maintenance')}
        </div>
      </div>
    </div>
  );
};
