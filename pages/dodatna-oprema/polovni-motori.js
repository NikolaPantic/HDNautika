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
        <title>{t.common.usedEquipment}</title>
        <meta name="title" content={t.common.usedEquipment} />
        <meta name="description" content={t.pages.usedEquipment.headingText} />
      </Head>
      <EquipmentLayout
        equipmentLayoutBackgroundImage={usedEquipment}
        isUsedEquipment={true}
        equipmentLayoutHeading={t.common.usedEquipment}
        equipmentLayoutHeadingText={t.pages.usedEquipment.headingText}
        equipmentLayoutSubheading={t.pages.usedEquipment.heading}
        equipmentLayoutText={t.pages.usedEquipment.text}
      />
    </>
  );
};

export default UsedEquipment;
