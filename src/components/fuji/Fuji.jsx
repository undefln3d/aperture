import React from 'react';
import './fuji.scss';
import {useTranslation} from "react-i18next";

const Fuji = () => {
  const { t } = useTranslation();
  
  return (
    <div className="fuji">
      <div className="description">
        <h5>{t("description_fuji_h5")}</h5>
        <p>{t("description_fuji_p")}</p>
      </div>
      <div className="frame fuji_frame">
        <div className="icons icons__clock"/>
        <p>1''</p>
        <div className="icons icons__scope"/>
        <p>f/16</p>
        <div className="icons icons__iso">
          <strong>iso</strong>
        </div>
        <p>400</p>
        <div className="icons icons__seamark"/>
        <p>Japan</p>
      </div>
    </div>
  );
};

export default Fuji;
