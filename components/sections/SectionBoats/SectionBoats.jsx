import Image from "next/image";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import OvalButton from "../../../components/OvalButton/OvalButton";
import { scrollToContact } from "../../../data/servicesData";

import sportstar from "../../../public/assets/images/boats/sportstar22/sportstar-blue-11.jpg";
import sportstar1 from "../../../public/assets/images/boats/sportstar22/sportstar-22.jpg";
import sportstar2 from "../../../public/assets/images/boats/sportstar22/sportstar-2.jpg";
import sportstar3 from "../../../public/assets/images/boats/sportstar22/sportstar-blue-4.jpg";
import sportstar4 from "../../../public/assets/images/boats/sportstar22/sportstar-1.jpg";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionBoats = () => {
  const { locale } = useRouter();

  const t = locale === "sr" ? sr : en;

  return (
    <section className="section-boats">
      <h2 className="secondary-heading">{t.sections.boats.heading}</h2>
      <div className="section-boats__main">
        <div className="section-boats__info">
          <div className="section-boats__info--carousel">
            <Carousel
              className="section-about-us__content--carousel"
              interval={5000}
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
            >
              <Image src={sportstar} alt="HD Nautika" />
              <Image src={sportstar2} alt="HD Nautika" />
              <Image src={sportstar1} alt="HD Nautika" />
              <Image src={sportstar4} alt="HD Nautika" />
            </Carousel>
          </div>
          <div className="section-boats__info--content">
            <h3 className="tertiary-heading">Sportstar 22</h3>
            <div className="section-boats__info--content--text">
              <p>{t.sections.boats.text}</p>
            </div>
            <div className="section-boats__info--specifications">
              <h4 className="heading-small">{t.sections.boats.subheading}</h4>
              <div className="section-boats__info--specifications-list">
                <div className="section-boats__info--specification-card">
                  <span className="section-boats__info--specification-card--heading">
                    {t.tableData.length}:
                  </span>
                  <span className="section-boats__info--specification-card--data">
                    6.51 m
                  </span>
                </div>
                <div className="section-boats__info--specification-card">
                  <span className="section-boats__info--specification-card--heading">
                    {t.tableData.width}:
                  </span>
                  <span className="section-boats__info--specification-card--data">
                    2.38 m
                  </span>
                </div>
                <div className="section-boats__info--specification-card">
                  <span className="section-boats__info--specification-card--heading">
                    {t.tableData.fuelTank}:
                  </span>
                  <span className="section-boats__info--specification-card--data">
                    215 l
                  </span>
                </div>
                <div className="section-boats__info--specification-card">
                  <span className="section-boats__info--specification-card--heading">
                    {t.tableData.waterTank}:
                  </span>
                  <span className="section-boats__info--specification-card--data">
                    70 l
                  </span>
                </div>
                <div className="section-boats__info--specification-card">
                  <span className="section-boats__info--specification-card--heading">
                    {t.tableData.maxNumberOfPersons}:
                  </span>
                  <span className="section-boats__info--specification-card--data">
                    8
                  </span>
                </div>
              </div>
            </div>
            <div className="section-boats__info--content--buttons">
              <OvalButton
                ovalButtonLabel={t.buttons.sendRequest}
                darkMode={true}
                ovalButtonPath=""
                onButtonClick={scrollToContact}
              />
              <OvalButton
                ovalButtonLabel={t.buttons.details}
                ovalButtonPath="/plovila/sportstar-22"
              />
            </div>
          </div>
        </div>
        <div className="section-boats__videos">
          <h3>{t.common.videoPresentation}</h3>
          <div className="section-boats__videos-container">
            <iframe
              height="300px"
              src="https://www.youtube.com/embed/HH5ShHii2Zw"
              title="Sportstar 22 | HD Nautika"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              height="300px"
              src="https://www.youtube.com/embed/ORtBygcu2wE"
              title="Sportstar 22 | HD Nautika"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <OvalButton
          ovalButtonLabel={t.buttons.viewAllBoats}
          darkMode={true}
          ovalButtonPath="/plovila"
        />
      </div>
    </section>
  );
};

export default SectionBoats;
