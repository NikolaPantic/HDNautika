import Image from "next/image";
import { useRouter } from "next/router";
import TranslatedLink from "../TranslatedLink/TranslatedLink";

import sr from "../../locales/sr";
import en from "../../locales/en";

const EquipmentCard = ({
  equipmentCardURL = "#",
  equipmentCardImageSrc,
  equipmentCardLabel = "label",
  rectangular = false,
}) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <TranslatedLink
      className={rectangular ? "equipment-card--rectangular" : "equipment-card"}
      href={equipmentCardURL}
    >
      <div className="equipment-card__wrapper">
        <div
          className={
            rectangular
              ? "equipment-card--rectangular--image"
              : "equipment-card__image"
          }
        >
          <Image src={equipmentCardImageSrc} alt={equipmentCardLabel} />
        </div>
        <div
          className={
            rectangular
              ? "equipment-card--rectangular--label"
              : "equipment-card__label"
          }
        >
          {equipmentCardLabel}
        </div>
        <span className="equipment-card__sublabel">{t.buttons.viewAll}</span>
      </div>
    </TranslatedLink>
  );
};

export default EquipmentCard;
