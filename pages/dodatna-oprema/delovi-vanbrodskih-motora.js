import { useRouter } from "next/router";
import Head from "next/head";
import EquipmentLayout from "../../layout/EquipmentLayout/EquipmentLayout";
import outboardEngineParts from "../../public/assets/images/equipment/engine-equipment.jpg";
import outboardEngineParts1 from "../../public/assets/images/equipment/engine-equipment-1.jpg";
import outboardEngineParts2 from "../../public/assets/images/equipment/engine-equipment-2.jpg";
import outboardEngineParts3 from "../../public/assets/images/equipment/engine-equipment-3.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const NauticalEquipment = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [
    outboardEngineParts,
    outboardEngineParts1,
    outboardEngineParts2,
    outboardEngineParts3,
  ];

  return (
    <>
      <Head>
        <title>{t.common.outboardEngineParts}</title>
        <meta name="title" content={t.common.outboardEngineParts} />
        <meta
          name="description"
          content={t.pages.outboardEngineParts.headingText}
        />
      </Head>
      <EquipmentLayout
        equipmentLayoutBackgroundImage={outboardEngineParts3}
        equipmentLayoutImages={images}
        equipmentLayoutHeading={t.common.outboardEngineParts}
        equipmentLayoutHeadingText={t.pages.outboardEngineParts.headingText}
        equipmentLayoutSubheading={t.common.outboardEngineParts}
        equipmentLayoutText={t.pages.outboardEngineParts.text}
      />
    </>
  );
};

export default NauticalEquipment;
