import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

import PageLayout from "../PageLayout/PageLayout";
import OvalButton from "../../components/OvalButton/OvalButton";
import Suggestions from "../../components/Suggestions/Suggestions";
import { scrollToContact } from "../../data/servicesData";

import en from "../../locales/en";
import sr from "../../locales/sr";

const BoatLayout = ({
  isSportstarBoat = false,
  boatImages = [],
  boatHeading = "",
  boatImageURL = "",
  boatDescription = "",
  boatAdditionalEquipment = [],
  boatData = {},
}) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <PageLayout
      pageLayoutHeading={boatHeading}
      pageLayoutImageUrl={boatImageURL}
    >
      <div
        className={
          isSportstarBoat ? "boat-layout boat-layout--sportstar" : "boat-layout"
        }
      >
        <div className="boat-layout__about-and-image">
          <div className="boat-layout__about">
            <h2 className="tertiary-heading">{t.pages.boats.headingAbout}</h2>
            <p>{boatDescription}</p>
            <p>{t.common.vesselAvailableWithCreditPayment}</p>
          </div>
          <div className="boat-layout__image">
            <Image src={boatImageURL} alt="image" />
          </div>
        </div>
        <div className="boat-layout__info">
          <div className="boat-layout__section">
            <h2 className="tertiary-heading">
              {t.pages.boats.headingTechnicalData}
            </h2>
            <div className="boat-layout__section--data">
              <table className="boat-layout__section--table">
                <tbody>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.length}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.length} m
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.width}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.width} m
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.weight}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.weight} kg
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.engineType}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.engineType}
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.maximumEnginePower}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.maxEnginePower} {t.tableData.enginePowerUnit}
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.fuelTank}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.fuelTank} l
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.waterTank}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.waterTank} l
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.maxNumberOfPersons}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.maxPerson}
                    </td>
                  </tr>
                  <tr>
                    <td className="boat-layout__section--table--heading">
                      {t.tableData.color}:
                    </td>
                    <td className="boat-layout__section--table--data">
                      {boatData?.color}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="boat-layout__section boat-layout__equipment">
            <h2 className="tertiary-heading">{t.common.basicEquipment}</h2>
            <ul className="boat-layout__equipment--list">
              {boatAdditionalEquipment.map((e) => (
                <li key={e}>- {e}</li>
              ))}
            </ul>

            <OvalButton
              ovalButtonLabel={t.buttons.orderVessel}
              darkMode={true}
              ovalButtonPath=""
              onButtonClick={scrollToContact}
            />
          </div>
        </div>

        <div className="boat-layout__carousel">
          <h2 className="tertiary-heading">{t.common.imageGallery}</h2>

          <Carousel
            images={boatImages}
            shouldMaximizeOnClick={true}
            hasMediaButton={false}
          />
        </div>

        {isSportstarBoat && (
          <div className="boat-layout__video-gallery">
            <h2 className="tertiary-heading">{t.common.videoPresentation}</h2>
            <div className="boat-layout__video-gallery--videos">
              <iframe
                src="https://www.youtube.com/embed/HRIFgDDBx6I"
                title="Sportstar 22"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/ynrgNtx3tIs"
                title="Sportstar 22"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <Suggestions suggestionType="equipment" />
    </PageLayout>
  );
};

export default BoatLayout;
