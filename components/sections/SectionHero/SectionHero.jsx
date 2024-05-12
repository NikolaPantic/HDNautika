import { useRouter } from "next/router";
import OvalButton from "../../OvalButton/OvalButton";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionHero = () => {
  const { locale } = useRouter();

  const t = locale === "sr" ? sr : en;

  return (
    <section className="section-hero">
      <video
        className="section-hero__video"
        autoPlay
        muted
        loop
        poster="../../../assets/images/boat-poster.jpg"
      >
        <source src="../../../assets/images/boat.mp4" type="video/mp4" />
      </video>

      <h1 className="section-hero__heading">
        <span className="primary-heading">HD Nautika</span>
        <span className="subheading">{t.heading}</span>
      </h1>

      <OvalButton
        ovalButtonLabel={t.buttons.boatsOffer}
        darkMode={true}
        ovalButtonPath="/plovila"
      />
    </section>
  );
};

export default SectionHero;
