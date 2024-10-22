import { useState } from "react";

// images
import Logo from "/svg/logo.svg";
import LogoDark from "/svg/logoDark.svg";
import FlagEN from "/images/flag-england.webp";
import FlagFR from "/images/flag-french.webp";

// translation
import { useTranslation } from "react-i18next";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoAlbums } from "react-icons/io5";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header id="header" className="flex items-center justify-between xl:pt-10">
      <div>
        <img
          src={Logo}
          className="w-10 md:w-16 xl:w-20 dark:hidden"
          width={80}
          height={80}
          alt="logo du site ressemblant à une soucoupe volante couleur gradient bleu clair vers le bleu ciel"
        />
        <img
          src={LogoDark}
          className="w-10 md:w-16 xl:w-20 hidden dark:block"
          width={80}
          height={80}
          alt="logo du site avec la lettre C couleur orange et la lettre H couleur noire"
        />
      </div>
      <div className="font-secondary">
        <nav className="flex items-center space-x-3 xl:space-x-10">
          <div className="flex">
            <a
              href="#projects"
              aria-label="lien qui mène vers l'encre des projets de ce site"
              className="transition-colors text-blue-600 hover:text-blue-500 dark:text-amber-500 dark:hover:text-amber-400 lg:flex"
            >
              <span className="mr-1 flex">
              <PiProjectorScreenChartFill className="w-8 h-8 lg:w-6 lg:h-6" />
              </span>
              <span className="hidden lg:flex">{t("projects")}</span>
            </a>
          </div>
          <div className="flex">
            <a
              href="#skills"
              aria-label="lien qui mène vers l'encre des compétences de ce site"
              className="transition-colors text-blue-600 hover:text-blue-500 dark:text-amber-500 dark:hover:text-amber-400 lg:flex"
            >
              <span className="mr-1 flex">
              <IoAlbums className="w-8 h-8 lg:w-6 lg:h-6" />
              </span>
              <span className="hidden lg:flex">{t("skills")}</span>
            </a>
          </div>
          <div className="flex">
            <a
              href="#contact"
              aria-label="lien qui mène vers l'encre me contacter de ce site"
              className="transition-colors text-blue-600 hover:text-blue-500 dark:text-amber-500 dark:hover:text-amber-400 lg:flex"
            >
              <span className="mr-1 flex">
              <BiSolidMessageAltDetail className="w-8 h-8 lg:w-6 lg:h-6" />
              </span>
              <span className="hidden lg:flex">{t("contact")}</span>
            </a>
          </div>

          <label htmlFor="darkModeToggle" className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={darkMode}
              onChange={handleToggle}
              id="darkModeToggle"
            />
            <span className="sr-only">Dark Mode</span>
            <div className="relative w-11 h-6 bg-amber-500 peer-focus:outline-none dark:peer-focus:ring-amber-500 rounded-full peer dark:bg-blue-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-blue-50 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-blue-500 peer-checked:bg-blue-500"></div>
          </label>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-full dark:bg-amber-500 focus:outline-none"
            >
              <img
                src={i18n.language === "en" ? FlagEN : FlagFR}
                className="max-w-10 rounded-full"
                width={100}
                height={100}
                alt="current language flag"
              />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-10 dark:text-black">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setIsDropdownOpen(false);
                  }}
                  className="transition-colors flex items-center w-full p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-amber-100"
                >
                  <img
                    src={FlagEN}
                    className="w-7 h-5 rounded-full mr-2"
                    alt="English flag"
                  />
                  <span>English</span>
                </button>
                <button
                  onClick={() => {
                    changeLanguage("fr");
                    setIsDropdownOpen(false);
                  }}
                  className="transition-colors flex items-center w-full p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-amber-100"
                >
                  <img
                    src={FlagFR}
                    className="w-7 h-5 rounded-full mr-2"
                    alt="French flag"
                  />
                  <span>Français</span>
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
