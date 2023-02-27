import { useRouter } from "next/router";
import Head from "next/head";
import EquipmentLayout from "../../layout/EquipmentLayout/EquipmentLayout";
import engine from "../../public/assets/images/equipment/engine-4.jpg";
import engine1 from "../../public/assets/images/equipment/engine-1.jpg";
import engine2 from "../../public/assets/images/equipment/engine-2.jpg";
import engine3 from "../../public/assets/images/equipment/engine-3.jpg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Engines = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  const images = [engine, engine1, engine2, engine3];

  return (
    <>
      <Head>
        <title>{t.metadata.newOutboardEngines.title}</title>
        <meta name="title" content={t.metadata.newOutboardEngines.title} />
        <meta
          name="description"
          content={t.metadata.newOutboardEngines.description}
        />
        <meta name="keywords" content="Honda, vanbrodski motori " />
        <meta
          property="og:title"
          content={t.metadata.newOutboardEngines.title}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.newOutboardEngines.description}
        />
      </Head>
      <EquipmentLayout
        equipmentLayoutBackgroundImage={engine2}
        equipmentLayoutImages={images}
        equipmentLayoutHeading={t.common.newOutboardEngines}
        equipmentLayoutHeadingText={t.pages.newEngines.headingText}
        equipmentLayoutSubheading={t.common.newOutboardEngines}
        equipmentLayoutText={t.pages.newEngines.text}
      />
    </>
  );
};

export default Engines;
