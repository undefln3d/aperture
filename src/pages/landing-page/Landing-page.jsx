import './landing-page.scss';
import Studios from "../../components/studios/Studios";
import Fuji from "../../components/fuji/Fuji";
import Monstera from "../../components/monstera/Monstera";
import Starfall from "../../components/starfall/Starfall";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header/>
      <body className="body">
        <Studios/>
        <div className="product">
          <div className="title product__title">
            <p className="product__title-text1">{t("product__title-text1")}</p>
            <p className="product__title-text2">{t("product__title-text2")}</p>
          </div>
          <div className="table">
            <div className="device component-table__description-position">
              <div className="component-table__description">
                <h5>{t("device_h5")}</h5>
                <p>{t("device_p")}</p>
                <div className="button component-table__description_button">
                  <div className="button__click"/>
                  <a href="/src/pages">{t("button__click-product-table")}</a>
                </div>
              </div>
            </div>
            <div className="architecture component-table__description-position">
              <div className="component-table__description">
                <h5>{t("architecture_h5")}</h5>
                <p>{t("architecture_p")}</p>
                <div className="button component-table__description_button">
                  <div className="button__click"/>
                  <a href="/src/pages">{t("button__click-product-table")}</a>
                </div>
              </div>
            </div>
            <div className="drone component-table__description-position">
              <div className="component-table__description">
                <h5>{t("drone_h5")}</h5>
                <p className="component-table__description__text-padding">{t("drone_p")}</p>
                <div className="button component-table__description_button">
                  <div className="button__click"/>
                  <a href="/src/pages">{t("button__click-product-table")}</a>
                </div>
              </div>
            </div>
            <div className="wildlife component-table__description-position">
              <div className="component-table__description">
                <h5>{t("wildlife_h5")}</h5>
                <p className="component-table__description__text-padding">{t("wildlife_p")}</p>
                <div className="button component-table__description_button">
                  <div className="button__click"/>
                  <a href="/src/pages">{t("button__click-product-table")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Fuji/>
        <div className="tools">
          <div className="title tools__title">
            <p className="tools__title-text1">{t("tools__title-text1")}</p>
            <p className="tools__title-text2">{t("tools__title-text2")}</p>
            <p className="tools__title-text3">{t("tools__title-text3")}</p>
            <div className="button tools__title-button">
              <div className="button__click"/>
              <a href="/src/pages">{t("tools__title-button")}</a>
            </div>
          </div>
          <div className="camera">
            <div className="frame camera_frame">
              <div className="icons icons__clock"/>
              <p>0,8''</p>
              <div className="icons icons__scope"/>
              <p>f/5,6</p>
              <div className="icons icons__iso">
                  <strong>iso</strong>
              </div>
              <p>100</p>
              <div className="icons icons__seamark"/>
              <p>{t("icons__seamark_camera")}</p>
            </div>
          </div>
        </div>
        <Monstera/>
        <div className="past-сlients">
          <div className="title past-сlients__title">
            <h5>{t("past-сlients__title_h5")}</h5>
            <p>{t("past-сlients__title_p")}</p>
          </div>
          <div className="clients">
            <div className="hill-hayes"></div>
            <div className="riks-gr"></div>
            <div className="studio-cai"></div>
            <div className="chillIn"></div>
            <div className="stock-holm"></div>
          </div>
        </div>
        <Starfall/>
        <div className="offer past-сlients__title">  {/*pastClients__title for text decoration*/}
          <h5>{t("offer_text_h5")}</h5>
          <p>{t("offer_text_p")}</p>
          <div className="button tools__title-button"> {/*tools__title-button for text decoration*/}
            <div className="button__click"/>
            <a href="/src/pages">{t("offer_text_button")}</a>
          </div>
        </div>
      </body>
      <Footer/>
    </>
  );
}

export default LandingPage;
