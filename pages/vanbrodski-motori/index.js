import { useRouter } from "next/router";
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
    <EquipmentLayout
      equipmentLayoutBackgroundImage={engine2}
      equipmentLayoutImages={images}
      equipmentLayoutHeading={t.common.outboardEngines}
      equipmentLayoutHeadingText={t.pages.engines.headingText}
      equipmentLayoutSubheading={t.common.outboardEngines}
      equipmentLayoutText={t.pages.engines.text}
    />
  );
};

export default Engines;
