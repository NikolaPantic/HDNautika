import { useRouter } from "next/router";
import OvalButton from "../OvalButton/OvalButton";
import { scrollToContact } from "../../data/servicesData";

import en from "../../locales/en";
import sr from "../../locales/sr";

const BoatCard = ({
  boatCardImageURL = "",
  boatCardBackgroundImageURL = "",
  boatCardLink = "",
  boatCardData = {},
  boatCardHomemade = false,
}) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <div className="boat-card">
      {boatCardHomemade && (
        <div className="boat-card__homemade">{t.pages.boats.homemade}</div>
      )}
      <div
        className="boat-card__image"
        style={{ backgroundImage: `url(${boatCardImageURL.src})` }}
      ></div>
      <div
        className="boat-card__description"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,10, 0.8), rgba(14,54,89, 0.8)), url(${boatCardBackgroundImageURL.src})`,
        }}
      >
        <h2 className="secondary-heading">{boatCardData?.heading}</h2>
        <div className="boat-card__description--data">
          <div className="boat-card__description--card">
            <span className="boat-card__description--card--heading">
              {t.tableData.length}:
            </span>
            <span className="boat-card__description--card--data">
              {boatCardData?.length} m
            </span>
          </div>
          <div className="boat-card__description--card">
            <span className="boat-card__description--card--heading">
              {t.tableData.maxNumberOfPersons}:
            </span>
            <span className="boat-card__description--card--data">
              {boatCardData?.numberOfPersons}
            </span>
          </div>
          <div className="boat-card__description--card">
            <span className="boat-card__description--card--heading">
              {t.tableData.maximumEnginePower}:
            </span>
            <span className="boat-card__description--card--data">
              {boatCardData?.enginePower} {t.tableData.enginePowerUnit}
            </span>
          </div>
          <div className="boat-card__description--card">
            <span className="boat-card__description--card--heading">
              {t.tableData.price}:
            </span>
            <span className="boat-card__description--card--data">
              {boatCardData?.price}
            </span>
          </div>
          <div className="boat-card__description--card">
            <span className="boat-card__description--card--heading">
              {t.tableData.availability}:
            </span>
            <span
              className="boat-card__description--card--data"
              style={{ color: "green", fontWeight: "600" }}
            >
              {boatCardData?.available}
            </span>
          </div>
        </div>
        <div className="boat-card__buttons">
          <OvalButton
            darkMode={true}
            ovalButtonLabel={t.buttons.sendRequest}
            ovalButtonPath=""
            onButtonClick={scrollToContact}
          />
          <OvalButton
            ovalButtonLabel={t.buttons.details}
            ovalButtonPath={boatCardLink}
          />
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
