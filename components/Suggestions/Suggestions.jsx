import { useRouter } from "next/router";
import OvalButton from "../OvalButton/OvalButton";
import EquipmentCard from "../EquipmentCard/EquipmentCard";

import sportstar from "../../public/assets/images/boats/sportstar22/sportstar-4.jpg";
import cerion from "../../public/assets/images/boats/cerion27/cerion.jpg";
import teorema from "../../public/assets/images/boats/teorema20/teorema-1.jpg";
import eolo from "../../public/assets/images/boats/eolo710/eolo-2.jpg";
import marino from "../../public/assets/images/boats/marino550/marino.jpg";
import propeller from "../../public/assets/images/equipment/propeller-card.jpg";
import sonar from "../../public/assets/images/equipment/sonar-4.jpg";
import engine1 from "../../public/assets/images/equipment/honda-outboard-engine.jpg";
import engineEquipment from "../../public/assets/images/equipment/engine-equipment.jpg";
import nauticalEquipment from "../../public/assets/images/equipment/nautical-equipment.jpg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Suggestions = ({ suggestionType = "boats" }) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const suggestions = {
    boats: [
      {
        name: "Sportstar 22",
        image: sportstar,
        path: "/plovila/sportstar-22",
      },
      {
        name: "Marino Gabry 550",
        image: marino,
        path: "/plovila/marino-gabry-550",
      },
      {
        name: "Teorema 20",
        image: teorema,
        path: "/plovila/teorema-20",
      },
      {
        name: "Cerion 27,7 WA",
        image: cerion,
        path: "/plovila/cerion-27,7-wa",
      },
      {
        name: "Eolo 710",
        image: eolo,
        path: "/plovila/eolo-710",
      },
    ],
    equipment: [
      {
        name: t.common.propellers,
        image: propeller,
        path: "/dodatna-oprema/propeleri",
      },
      {
        name: t.common.sonars,
        image: sonar,
        path: "/dodatna-oprema/sonari",
      },
      {
        name: t.common.outboardEngineParts,
        image: engineEquipment,
        path: "/dodatna-oprema/delovi-vanbrodskih-motora",
      },
      {
        name: t.common.nauticalEquipment,
        image: nauticalEquipment,
        path: "/dodatna-oprema/nauticka-oprema",
      },
      {
        name: t.common.usedEquipment,
        image: engine1,
        path: "/dodatna-oprema/polovni-motori",
      },
    ],
  };
  return (
    <div className="suggestions">
      <h2 className="tertiary-heading">
        {suggestionType === "boats"
          ? t.components.suggestions.headingBoats
          : t.components.suggestions.headingEquipment}
      </h2>
      <div className="suggestions__images">
        {suggestions[suggestionType].map((e) => (
          <EquipmentCard
            key={e.name}
            rectangular={true}
            equipmentCardURL={e.path}
            equipmentCardImageSrc={e.image}
            equipmentCardLabel={e.name}
          />
        ))}
      </div>
      <OvalButton
        ovalButtonLabel={t.buttons.viewAll}
        darkMode={true}
        ovalButtonPath={
          suggestionType === "boats" ? "/plovila" : "/dodatna-oprema"
        }
      />
    </div>
  );
};

export default Suggestions;
