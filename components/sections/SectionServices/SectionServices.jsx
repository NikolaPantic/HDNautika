import { useRouter } from "next/router";
import ServiceCard from "../../ServiceCard/ServiceCard";
import mechanic from "../../../public/assets/images/services/mechanic/mechanic-2.jpg";
import painting from "../../../public/assets/images/services/reparation/painting.jpg";
import interior from "../../../public/assets/images/services/interior/interior-1.jpg";
import winter from "../../../public/assets/images/services/winter/winter.jpg";
import OvalButton from "../../OvalButton/OvalButton";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionServices = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const servicesData = {
    service: [
      t.services.vesselService.service1,
      t.services.vesselService.service2,
      t.services.vesselService.service3,
      t.services.vesselService.service4,
    ],
    mechanic: [
      t.services.mechanicService.service1,
      t.services.mechanicService.service2,
      t.services.mechanicService.service3,
    ],
    winter: [
      t.services.winterLog.service1,
      t.services.winterLog.service2,
      t.services.winterLog.service3,
    ],
    interior: [
      t.services.interiorDesign.service1,
      t.services.interiorDesign.service2,
      t.services.interiorDesign.service3,
      t.services.interiorDesign.service4,
    ],
  };

  return (
    <section className="section-services">
      <h2 className="secondary-heading">{t.sections.services.heading}</h2>
      <div className="section-services__content">
        <div className="section-services__cards">
          <ServiceCard
            serviceCardLabel={t.services.mechanicService.heading}
            serviceCardImageUrl={mechanic}
            serviceData={servicesData["mechanic"]}
            serviceCardPath="/usluge/mehanicarske-usluge"
          />
          <ServiceCard
            serviceCardLabel={t.services.vesselService.heading}
            serviceCardImageUrl={painting}
            serviceData={servicesData["service"]}
            serviceCardPath="usluge/servis-plovila"
          />
          <ServiceCard
            serviceCardLabel={t.services.interiorDesign.heading}
            serviceCardImageUrl={interior}
            serviceData={servicesData["interior"]}
            serviceCardPath="/usluge/izrada-enterijera"
          />
          <ServiceCard
            serviceCardLabel={t.services.winterLog.heading}
            serviceCardImageUrl={winter}
            serviceData={servicesData["winter"]}
            serviceCardPath="/usluge/zimovnik"
          />
        </div>
        <OvalButton
          ovalButtonLabel={t.buttons.viewAll}
          darkMode={true}
          ovalButtonPath="/usluge"
        />
      </div>
    </section>
  );
};

export default SectionServices;
