import React from 'react';
import './monstera.scss'
import {useTranslation} from "react-i18next";

const Monstera = () => {
  const { t } = useTranslation();
  
  return (
    <div className="monstera">
      <div className="description">
        <h5>{t("description_monstera_h5")}</h5>
        <p>{t("description_monstera_p")}</p>
      </div>
      <div className="frame monstera_frame">
        <div className="icons icons__clock"/>
        <p>1/400s</p>
        <div className="icons icons__scope"/>
        <p>f/3,5</p>
        <div className="icons icons__iso">
          <strong>iso</strong>
        </div>
        <p>100</p>
        <div className="icons icons__seamark"/>
        <p>Costa Rica</p>
      </div>
    </div>
  );
};

export default Monstera;
