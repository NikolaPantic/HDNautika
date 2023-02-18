import { useRouter } from "next/router";
import Head from "next/head";
import EquipmentLayout from "../../layout/EquipmentLayout/EquipmentLayout";
import sonar from "../../public/assets/images/equipment/sonar.jpg";
import sonar1 from "../../public/assets/images/equipment/sonar-1.jpg";
import sonar2 from "../../public/assets/images/equipment/sonar-2.jpg";
import sonar3 from "../../public/assets/images/equipment/sonar-4.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Sonars = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [sonar, sonar1, sonar3, sonar2];

  return (
    <>
      <Head>
        <title>{t.common.sonars}</title>
        <meta name="title" content={t.common.sonars} />
        <meta name="description" content={t.pages.sonars.headingText} />
      </Head>
      <EquipmentLayout
        equipmentLayoutBackgroundImage={sonar1}
        equipmentLayoutImages={images}
        equipmentLayoutHeading={t.common.sonars}
        equipmentLayoutHeadingText={t.pages.sonars.headingText}
        equipmentLayoutSubheading={t.pages.sonars.heading}
        equipmentLayoutText={t.pages.sonars.text}
      />
    </>
  );
};

export default Sonars;
