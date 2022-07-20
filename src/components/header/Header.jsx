import React from 'react';
import './header.scss';
import ModalWindow from "./modal-window/modale-window";
import {useTranslation} from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="header">
      <div>
        <div className="logo header__logo"/>
      </div>
      <div className="header__button_language">
        <button className='button_language' onClick={() => changeLanguage("en")}>EN</button>
        <button className='button_language' onClick={() => changeLanguage("de")}>DE</button>
      </div>
      <div className="menu header__menu">
        <a href="/table_page">{t("header__menu_text1")}</a>
        <a href="/">{t("header__menu_text2")}</a>
        <a href="/">{t("header__menu_text3")}</a>
        <a href="/">{t("header__menu_text4")}</a>
      </div>
      <ModalWindow/>
    </div>
  );
};

export default Header;
