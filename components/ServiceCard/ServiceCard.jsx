import OvalButton from "../OvalButton/OvalButton";
import { useRouter } from "next/router";

import en from "../../locales/en";
import sr from "../../locales/sr";

const ServiceCard = ({
  serviceCardLabel = "label",
  serviceCardImageUrl = "",
  serviceData = [],
  serviceCardPath = "",
}) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <div className="service-card">
      <div
        className="service-card__side service-card__side--front"
        style={{ backgroundImage: `url(${serviceCardImageUrl.src})` }}
      >
        <h3 className="service-card__heading">{serviceCardLabel}</h3>
      </div>
      <div className="service-card__side service-card__side--back">
        <div className="service-card__details">
          <ul>
            {serviceData.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
        <OvalButton
          ovalButtonLabel={t.buttons.details}
          ovalButtonPath={serviceCardPath}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
