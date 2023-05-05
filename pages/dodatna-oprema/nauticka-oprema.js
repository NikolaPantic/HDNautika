import { useRouter } from "next/router";
import Head from "next/head";
import EquipmentLayout from "../../layout/EquipmentLayout/EquipmentLayout";
import nauticalEquipment from "../../public/assets/images/equipment/nautical-equipment.jpg";
import nauticalEquipment1 from "../../public/assets/images/equipment/nautical-equipment-1.jpg";
import nauticalEquipment2 from "../../public/assets/images/equipment/nautical-equipment-2.jpg";
import nauticalEquipment3 from "../../public/assets/images/equipment/nautical-equipment-3.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const NauticalEquipment = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [
    nauticalEquipment,
    nauticalEquipment1,
    nauticalEquipment2,
    nauticalEquipment3,
  ];

  return (
    <>
      <Head>
        <title>{t.metadata.nauticalEquipment.title}</title>
        <meta name="title" content={t.metadata.nauticalEquipment.title} />
        <meta
          name="description"
          content={t.metadata.nauticalEquipment.description}
        />
        <meta name="keywords" content="nauticka oprema, oprema za camce" />
        <meta
          property="og:title"
          content={t.metadata.nauticalEquipment.title}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.nauticalEquipment.description}
        />
        <meta property="og:image" content="/assets/images/nautica.jpg" />
      </Head>
      <EquipmentLayout
        equipmentLayoutBackgroundImage={nauticalEquipment3}
        equipmentLayoutImages={images}
        equipmentLayoutHeading={t.common.nauticalEquipment}
        equipmentLayoutHeadingText={t.pages.nauticalEquipment.headingText}
        equipmentLayoutSubheading={t.common.nauticalEquipment}
        equipmentLayoutText={t.pages.nauticalEquipment.text}
      />
    </>
  );
};

export default NauticalEquipment;
