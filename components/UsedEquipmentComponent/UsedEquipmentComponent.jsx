import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import UsedEquipmentCard from "../UsedEquipmentCard/UsedEquipmentCard";
import honda4060 from "../../public/assets/images/used-equipment/honda4060.jpg";
import honda40601 from "../../public/assets/images/used-equipment/honda4060-1.jpg";
import honda40602 from "../../public/assets/images/used-equipment/honda4060-2.jpg";
import honda40603 from "../../public/assets/images/used-equipment/honda4060-3.jpg";
import yamaha4070getl from "../../public/assets/images/used-equipment/yamaha4070getl.jpg";
import yamaha4070getl1 from "../../public/assets/images/used-equipment/yamaha4070getl-1.jpg";
import yamaha25 from "../../public/assets/images/used-equipment/yamaha25.jpg";
import yamaha251 from "../../public/assets/images/used-equipment/yamaha25-1.jpg";
import honda150 from "../../public/assets/images/used-equipment/honda150.jpg";
import honda1501 from "../../public/assets/images/used-equipment/honda150-1.jpg";
import honda1502 from "../../public/assets/images/used-equipment/honda150-2.jpg";
import honda1503 from "../../public/assets/images/used-equipment/honda150-3.jpg";
import mercury815 from "../../public/assets/images/used-equipment/mercury815.jpg";
import mercury8151 from "../../public/assets/images/used-equipment/mercury815-1.jpg";
import yamaha4060efi from "../../public/assets/images/used-equipment/yamaha4060efi.jpg";
import yamaha4060efi1 from "../../public/assets/images/used-equipment/yamaha4060efi-1.jpg";
import yamaha4060efi2 from "../../public/assets/images/used-equipment/yamaha4060efi-2.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const UsedEquipmentComponent = () => {
  const [currentEngine, setCurrentEngine] = useState("honda4060");

  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const engines = {
    honda4060: {
      name: "Honda 40/60",
      specifications: [
        "998ccm",
        t.components.usedEquipmentComponent.engineData.longBoot,
        t.components.usedEquipmentComponent.engineData.electronicTrim,
        t.components.usedEquipmentComponent.engineData.electronicStart,
        t.components.usedEquipmentComponent.engineData.controlsOrHandle,
        t.components.usedEquipmentComponent.engineData.excellentCondition,
        t.components.usedEquipmentComponent.engineData.registrationPapers,
      ],
      images: [honda4060, honda40601, honda40602, honda40603],
    },
    yamaha4070getl: {
      name: "Yamaha 40/70 GETL",
      specifications: [
        t.components.usedEquipmentComponent.engineData.longBoot,
        t.components.usedEquipmentComponent.engineData.electronicTrim,
        t.components.usedEquipmentComponent.engineData.electronicStart,
        t.components.usedEquipmentComponent.engineData.controlsOrHandle,
        t.components.usedEquipmentComponent.engineData.ycopSystem,
        t.components.usedEquipmentComponent.engineData.propellerByChoise,
        t.components.usedEquipmentComponent.engineData.excellentCondition,
        t.components.usedEquipmentComponent.engineData.registrationPapers,
      ],
      images: [yamaha4070getl, yamaha4070getl1],
    },
    yamaha25: {
      name: "Yamaha 25",
      specifications: [
        t.components.usedEquipmentComponent.engineData.longBoot,
        t.components.usedEquipmentComponent.engineData.fourStroke,
        t.components.usedEquipmentComponent.engineData.onTheHandle,
        t.components.usedEquipmentComponent.engineData.possibilityOfInstalation,
        t.components.usedEquipmentComponent.engineData.excellentCondition,
        t.components.usedEquipmentComponent.engineData.registrationPapers,
      ],
      images: [yamaha25, yamaha251],
    },
    honda150: {
      name: "Honda 150",
      specifications: [
        t.components.usedEquipmentComponent.engineData.originalCommands,
        t.components.usedEquipmentComponent.engineData.possibilityOfInstalation,
        t.components.usedEquipmentComponent.engineData.excellentCondition,
        t.components.usedEquipmentComponent.engineData.registrationPapers,
      ],
      images: [honda150, honda1501, honda1502, honda1503],
    },
    mercury815: {
      name: "Mercury 8/15",
      specifications: [
        t.components.usedEquipmentComponent.engineData.fourStroke,
        t.components.usedEquipmentComponent.engineData.yamahaGenerator,
        t.components.usedEquipmentComponent.engineData.builtForSwiss,
        t.components.usedEquipmentComponent.engineData.possibilityOfInstalation,
        t.components.usedEquipmentComponent.engineData.excellentCondition,
        t.components.usedEquipmentComponent.engineData.registrationPapers,
      ],
      images: [mercury815, mercury8151],
    },
    yamaha4060efi: {
      name: "Yamaha 40/60 EFI",
      specifications: [
        t.components.usedEquipmentComponent.engineData.longBoot,
        t.components.usedEquipmentComponent.engineData.electronicStart,
        t.components.usedEquipmentComponent.engineData.electronicTrim,
        t.components.usedEquipmentComponent.engineData.controlsOrHandle,
        t.components.usedEquipmentComponent.engineData.possibilityOfInstalation,
        t.components.usedEquipmentComponent.engineData.excellentCondition,
        t.components.usedEquipmentComponent.engineData.registrationPapers,
      ],
      images: [yamaha4060efi, yamaha4060efi1, yamaha4060efi2],
    },
  };

  const scrollToEngineDetails = () => {
    const element = document.getElementById("details");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const showEngine = (name) => {
    setCurrentEngine(name);
  };

  return (
    <section className="used-equipment">
      <h2 className="tertiary-heading">
        {t.components.usedEquipmentComponent.heading}
      </h2>
      <div className="used-equipment__cards">
        <UsedEquipmentCard
          usedEquipmentCardImageURL={engines.honda4060.images[0]}
          usedEquipmentCardLabel={engines.honda4060.name}
          onCardClick={() => {
            showEngine("honda4060");
            scrollToEngineDetails();
          }}
        />
        <UsedEquipmentCard
          usedEquipmentCardImageURL={engines.yamaha4070getl.images[0]}
          usedEquipmentCardLabel={engines.yamaha4070getl.name}
          onCardClick={() => {
            showEngine("yamaha4070getl");
            scrollToEngineDetails();
          }}
        />
        <UsedEquipmentCard
          usedEquipmentCardImageURL={engines.yamaha25.images[0]}
          usedEquipmentCardLabel={engines.yamaha25.name}
          onCardClick={() => {
            showEngine("yamaha25");
            scrollToEngineDetails();
          }}
        />
        <UsedEquipmentCard
          usedEquipmentCardImageURL={engines.honda150.images[3]}
          usedEquipmentCardLabel={engines.honda150.name}
          onCardClick={() => {
            showEngine("honda150");
            scrollToEngineDetails();
          }}
        />

        <UsedEquipmentCard
          usedEquipmentCardImageURL={engines.mercury815.images[0]}
          usedEquipmentCardLabel={engines.mercury815.name}
          onCardClick={() => {
            showEngine("mercury815");
            scrollToEngineDetails();
          }}
        />
        <UsedEquipmentCard
          usedEquipmentCardImageURL={engines.yamaha4060efi.images[0]}
          usedEquipmentCardLabel={engines.yamaha4060efi.name}
          onCardClick={() => {
            showEngine("yamaha4060efi");
            scrollToEngineDetails();
          }}
        />
      </div>

      <div className="used-equipment__details" id="details">
        <div className="used-equipment__details--info">
          <h3 className="tertiary-heading">{engines[currentEngine].name}</h3>
          <ul>
            {engines[currentEngine].specifications.map((e) => (
              <li key={e}>- {e}</li>
            ))}
          </ul>
        </div>
        <div className="used-equipment__details--images">
          {engines[currentEngine].images.map((e) => (
            <Image src={e} alt={engines[currentEngine].name} key={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsedEquipmentComponent;
