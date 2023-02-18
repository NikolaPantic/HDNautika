import Image from "next/image";
import { useRouter } from "next/router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import OvalButton from "../../../components/OvalButton/OvalButton";

import about from "../../../public/assets/images/boats/sportstar22/sportstar-boat-logo.jpg";
import about1 from "../../../public/assets/images/services/reparation/reparation-landscape.jpg";
import about2 from "../../../public/assets/images/services/winter/winter-landscape.jpg";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionAboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <section className="section-about-us">
      <h3 className="secondary-heading">{t.sections.aboutUs.heading}</h3>
      <div className="section-about-us__content">
        <div className="section-about-us__content--text-and-button">
          <div className="section-about-us__content--text">
            <p>{t.sections.aboutUs.text1} </p>
            <p>{t.sections.aboutUs.text2}</p>
            <p>{t.sections.aboutUs.text3}</p>
            <p>{t.sections.aboutUs.text4}</p>
          </div>
          <OvalButton
            darkMode={true}
            ovalButtonLabel={t.buttons.learnMore}
            ovalButtonPath="/o-nama"
          />
        </div>
        <Carousel
          className="section-about-us__content--carousel"
          stopOnHover={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          <Image src={about} alt="HD Nautika" />
          <Image src={about1} alt="HD Nautika" />
          <Image src={about2} alt="HD Nautika" />
          <Image src={about} alt="" />
        </Carousel>
      </div>
    </section>
  );
};

export default SectionAboutUs;
