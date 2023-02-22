import { useRouter } from "next/router";
import EquipmentCard from "../../EquipmentCard/EquipmentCard";
import OvalButton from "../../OvalButton/OvalButton";
import propeller from "../../../public/assets/images/equipment/propeller.jpg";
import sonar from "../../../public/assets/images/equipment/sonar-1.jpg";
import engineEquipment from "../../../public/assets/images/equipment/engine-equipment.jpg";
import engine1 from "../../../public/assets/images/equipment/honda-outboard-engine.jpg";
import nauticalEquipment from "../../../public/assets/images/equipment/nautical-equipment-1.jpg";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionEquipment = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <section className="section-equipment">
      <h2 className="secondary-heading">{t.common.additionalEquipment}</h2>
      <div className="section-equipment__content">
        <div className="section-equipment__cards">
          <div className="section-equipment__cards--single-card">
            <div className="section-equipment__cards--single-card--description">
              <p>{t.sections.equipment.text1}</p>
            </div>
            <EquipmentCard
              equipmentCardURL="/dodatna-oprema/propeleri"
              equipmentCardImageSrc={propeller}
              equipmentCardLabel={t.common.propellers}
            />
          </div>
          <div className="section-equipment__cards--single-card">
            <EquipmentCard
              equipmentCardURL="/dodatna-oprema/sonari"
              equipmentCardImageSrc={sonar}
              equipmentCardLabel={t.common.sonars}
            />
            <div className="section-equipment__cards--single-card--description">
              <p>{t.sections.equipment.text2}</p>
            </div>
          </div>
          <div className="section-equipment__cards--single-card">
            <div className="section-equipment__cards--single-card--description">
              <p>{t.sections.equipment.text3}</p>
            </div>
            <EquipmentCard
              equipmentCardURL="/dodatna-oprema/delovi-vanbrodskih-motora"
              equipmentCardImageSrc={engineEquipment}
              equipmentCardLabel={t.common.outboardEngineParts}
            />
          </div>
          <div className="section-equipment__cards--single-card">
            <EquipmentCard
              equipmentCardURL="/dodatna-oprema/nauticka-oprema"
              equipmentCardImageSrc={nauticalEquipment}
              equipmentCardLabel={t.common.nauticalEquipment}
            />
            <div className="section-equipment__cards--single-card--description">
              <p>{t.sections.equipment.text4}</p>
            </div>
          </div>
          <div className="section-equipment__cards--single-card">
            <div className="section-equipment__cards--single-card--description">
              <p>{t.sections.equipment.text5}</p>
            </div>
            <EquipmentCard
              equipmentCardURL="/dodatna-oprema/polovni-motori"
              equipmentCardImageSrc={engine1}
              equipmentCardLabel={t.common.usedEquipment}
            />
          </div>
        </div>
        <OvalButton ovalButtonLabel={t.buttons.viewAll} darkMode={true} />
      </div>
    </section>
  );
};

export default SectionEquipment;
