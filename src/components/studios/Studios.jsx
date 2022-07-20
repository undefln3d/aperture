import React from 'react';
import './studios.scss'
import {useTranslation} from "react-i18next";

const Studios = () => {
  const { t } = useTranslation();
  
  return (
    <div className="studios">
      <div className="title studios__title">
        <p className="studios__title-text1">{t("studios__title-text1")}</p>
        <p className="studios__title-text2">{t("studios__title-text2")}</p>
        <p className="studios__title-text3">{t("studios__title-text3")}</p>
      </div>
      <div className="frame studios__frame">
        <div className="icons icons__clock"/>
        <p>1/2000s</p>
        <div className="icons icons__scope"/>
        <p>f/11</p>
        <div className="icons icons__iso">
          <strong>iso</strong>
        </div>
        <p>100</p>
        <div className="icons icons__seamark"/>
        <p>{t("icons__seamark_studios")}</p>
      </div>
    </div>
  );
};

export default Studios;
