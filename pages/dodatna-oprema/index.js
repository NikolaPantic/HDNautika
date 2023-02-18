import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";

import propeller from "../../public/assets/images/equipment/propeller-card.jpg";
import sonar from "../../public/assets/images/equipment/sonar-4.jpg";
import engine1 from "../../public/assets/images/equipment/engine-equipment-4.jpg";
import outboardEngineParts from "../../public/assets/images/equipment/engine-equipment.jpg";
import nauticalEquipment from "../../public/assets/images/equipment/nautical-equipment.jpg";
import Suggestions from "../../components/Suggestions/Suggestions";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Equipment = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <PageLayout
      pageLayoutImageUrl={engineEquipment}
      pageLayoutHeading={t.common.additionalEquipment}
      pageLayoutHeadingText={t.pages.additionalEquipment.headingText}
    >
      <div className="equipment">
        <h2 className="secondary-heading">
          {t.pages.additionalEquipment.heading}
        </h2>
        <p className="equipment__text">{t.pages.additionalEquipment.text}</p>

        <div className="equipment__cards">
          <EquipmentCard
            rectangular={true}
            equipmentCardLabel={t.common.propellers}
            equipmentCardImageSrc={propeller}
            equipmentCardURL="/dodatna-oprema/propeleri"
          />
          <EquipmentCard
            rectangular={true}
            equipmentCardLabel={t.common.sonars}
            equipmentCardImageSrc={sonar}
            equipmentCardURL="/dodatna-oprema/sonari"
          />
          <EquipmentCard
            rectangular={true}
            equipmentCardLabel={t.common.outboardEngineParts}
            equipmentCardImageSrc={outboardEngineParts}
            equipmentCardURL="/dodatna-oprema/delovi-vanbrodskih-motora"
          />
          <EquipmentCard
            rectangular={true}
            equipmentCardLabel={t.common.nauticalEquipment}
            equipmentCardImageSrc={nauticalEquipment}
            equipmentCardURL="/dodatna-oprema/nauticka-oprema"
          />
          <EquipmentCard
            rectangular={true}
            equipmentCardLabel={t.common.usedEquipment}
            equipmentCardImageSrc={engine1}
            equipmentCardURL="/dodatna-oprema/polovna-oprema"
          />
        </div>
      </div>
      <Suggestions suggestionType="boats" />
    </PageLayout>
  );
};

export default Equipment;
