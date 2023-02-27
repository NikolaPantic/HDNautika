import { useRouter } from "next/router";
import Head from "next/head";
import EquipmentLayout from "../../layout/EquipmentLayout/EquipmentLayout";
import usedEquipment from "../../public/assets/images/used-equipment/honda4060.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";
const UsedEquipment = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <>
      <Head>
        <title>{t.metadata.usedEngines.title}</title>
        <meta name="title" content={t.metadata.usedEngines.title} />
        <meta name="description" content={t.metadata.usedEngines.description} />
        <meta
          name="keywords"
          content="polovni vanbrodski motori, honda vanbrodski motori"
        />
        <meta property="og:title" content={t.metadata.usedEngines.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.usedEngines.description}
        />{" "}
      </Head>
      <EquipmentLayout
        equipmentLayoutBackgroundImage={usedEquipment}
        isUsedEquipment={true}
        equipmentLayoutHeading={t.common.usedEquipment}
        equipmentLayoutHeadingText={t.pages.usedEngines.headingText}
        equipmentLayoutSubheading={t.pages.usedEngines.heading}
        equipmentLayoutText={t.pages.usedEngines.text}
      />
    </>
  );
};

export default UsedEquipment;
