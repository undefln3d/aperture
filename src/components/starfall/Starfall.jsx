import React from 'react';
import './starfall.scss'
import {useTranslation} from "react-i18next";

const Starfall = () => {
  const { t } = useTranslation();
  
  return (
    <div className="starfall">
      <div className="description">
        <h5>{t("description_starfall_h5")}</h5>
        <p>{t("description_starfall_p")}</p>
      </div>
      <div className="frame starfall_frame">
        <div className="icons icons__clock"/>
        <p>6''</p>
        <div className="icons icons__scope"/>
        <p>f/11</p>
        <div className="icons icons__iso">
          <strong>iso</strong>
        </div>
        <p>800</p>
        <div className="icons icons__seamark"/>
        <p>{t("icons__seamark_starfall")}</p>
      </div>
    </div>
  );
};

export default Starfall;
