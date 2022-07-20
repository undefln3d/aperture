import React from 'react';
import './footer.scss';
import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <div className="footer">
      <div className="info">
        <div className="block">
          <div className="block__upper">
            <div>
              <div className="logo"></div>
              <p>{t("block__upper-logo")}</p>
            </div>
            <div className="block__upper-text">
              <div className="block__upper-left">
                <p>{t("block__upper-left_p")}</p>
                <a href="/">{t("block__upper-left_a1")}</a>
                <a href="/">{t("block__upper-left_a2")}</a>
                <a href="/">{t("block__upper-left_a3")}</a>
                <a href="/">{t("block__upper-left_a4")}</a>
              </div>
              <div className="block__upper-right">
                <p>{t("block__upper-right_p")}</p>
                <a href="/">{t("block__upper-right_a1")}</a>
                <a href="/">{t("block__upper-right_a2")}</a>
                <a href="/">{t("block__upper-right_a3")}</a>
                <a href="/">{t("block__upper-right_a4")}</a>
                <a href="/">{t("block__upper-right_a5")}</a>
                <a href="/">{t("block__upper-right_a6")}</a>
              </div>
            </div>
          </div>
          <div className="block__line"/>
          <div className="block__middle">
            <div>
              <h5>{t("block__middle_h5")}</h5>
              <p>{t("block__middle_p")}</p>
            </div>
            <div className="block__middle_input">
              <div className="block__middle_input_click"></div>
            </div>
          </div>
          <div className="block__line"/>
          <div className="block__lower">
            <div>
              <p>{t("block__lower")}</p>
            </div>
            <div className="block__lower-messenger">
              <a href="/" className="twitter"/>
              <a href="/" className="instagram"/>
              <a href="/" className="facebook"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
