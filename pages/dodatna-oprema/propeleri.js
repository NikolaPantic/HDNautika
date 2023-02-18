import { useRouter } from "next/router";
import EquipmentLayout from "../../layout/EquipmentLayout/EquipmentLayout";
import propeller from "../../public/assets/images/equipment/propeller.jpg";
import propeller1 from "../../public/assets/images/equipment/propeller-1.jpg";
import propeller2 from "../../public/assets/images/equipment/propeller-2.jpg";
import propeller3 from "../../public/assets/images/equipment/propeller-3.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Propellers = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  const images = [propeller, propeller1, propeller2, propeller3];
  const text = t.pages.propellers.text;
  return (
    <EquipmentLayout
      equipmentLayoutBackgroundImage={propeller1}
      equipmentLayoutImages={images}
      equipmentLayoutHeading={t.common.propellers}
      equipmentLayoutHeadingText={t.pages.propellers.headingText}
      equipmentLayoutSubheading={t.pages.propellers.heading}
      equipmentLayoutText={text}
    />
  );
};

export default Propellers;
