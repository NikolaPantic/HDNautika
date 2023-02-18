import { useRouter } from "next/router";
import Head from "next/head";
import BoatLayout from "../../layout/BoatLayout/BoatLayout";
import sportstarLogo from "../../public/assets/images/boats/sportstar22/sportstar-logo.jpg";
import sportstar from "../../public/assets/images/boats/sportstar22/sportstar.jpg";
import sportstar1 from "../../public/assets/images/boats/sportstar22/sportstar-1.jpg";
import sportstar2 from "../../public/assets/images/boats/sportstar22/sportstar-2.jpg";
import sportstar3 from "../../public/assets/images/boats/sportstar22/sportstar-3.jpg";
import sportstar4 from "../../public/assets/images/boats/sportstar22/sportstar-4.jpg";
import sportstar5 from "../../public/assets/images/boats/sportstar22/sportstar-background.jpg";
import sportstar6 from "../../public/assets/images/boats/sportstar22/sportstar-page-background.jpg";
import sportstar7 from "../../public/assets/images/boats/sportstar22/sportstar-5.jpg";
import sportstar8 from "../../public/assets/images/boats/sportstar22/sportstar-6.jpg";
import sportstar9 from "../../public/assets/images/boats/sportstar22/sportstar-7.jpg";
import sportstar10 from "../../public/assets/images/boats/sportstar22/sportstar-8.jpg";
import sportstar11 from "../../public/assets/images/boats/sportstar22/sportstar-9.jpg";
import sportstar12 from "../../public/assets/images/boats/sportstar22/sportstar-10.jpg";
import sportstar13 from "../../public/assets/images/boats/sportstar22/sportstar-11.jpg";
import sportstar14 from "../../public/assets/images/boats/sportstar22/sportstar-12.jpg";
import sportstar15 from "../../public/assets/images/boats/sportstar22/sportstar-13.jpg";
import sportstar16 from "../../public/assets/images/boats/sportstar22/sportstar-14.jpg";
import sportstar17 from "../../public/assets/images/boats/sportstar22/sportstar-15.jpg";
import sportstar18 from "../../public/assets/images/boats/sportstar22/sportstar-16.jpg";
import sportstar19 from "../../public/assets/images/boats/sportstar22/sportstar-17.jpg";
import sportstar20 from "../../public/assets/images/boats/sportstar22/sportstar-18.jpg";
import sportstar21 from "../../public/assets/images/boats/sportstar22/sportstar-19.jpg";
import sportstar22 from "../../public/assets/images/boats/sportstar22/sportstar-20.jpg";
import sportstar23 from "../../public/assets/images/boats/sportstar22/sportstar-blue.jpg";
import sportstar24 from "../../public/assets/images/boats/sportstar22/sportstar-blue-1.jpg";
import sportstar25 from "../../public/assets/images/boats/sportstar22/sportstar-blue-2.jpg";
import sportstar26 from "../../public/assets/images/boats/sportstar22/sportstar-blue-3.jpg";
import sportstar28 from "../../public/assets/images/boats/sportstar22/sportstar-22.jpg";
import sportstar29 from "../../public/assets/images/boats/sportstar22/sportstar-23.jpg";
import sportstar27 from "../../public/assets/images/boats/sportstar22/sportstar-21.jpg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Sportstar = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [
    sportstar2,
    sportstar1,
    sportstar11,
    sportstar27,
    sportstar3,
    sportstar4,
    sportstar,
    sportstar5,
    sportstar6,
    sportstar7,
    sportstar8,
    sportstar9,
    sportstar10,
    sportstar12,
    sportstar13,
    sportstar14,
    sportstar15,
    sportstar16,
    sportstar17,
    sportstar18,
    sportstar19,
    sportstar20,
    sportstar21,
    sportstar22,
    sportstar23,
    sportstar24,
    sportstar25,
    sportstar26,
    sportstar28,
    sportstar29,
  ];

  const equipment = [
    t.boatEquipment.navigationLights,
    t.boatEquipment.bowAndRailing,
    t.boatEquipment.ladder,
    `4x ${t.boatEquipment.cleats}`,
    t.boatEquipment.cockpit,
    t.boatEquipment.bilgePump,
    t.boatEquipment.awning,
    t.boatEquipment.upholstery,
    t.boatEquipment.music,
    t.boatEquipment.shower,
    t.boatEquipment.steeringWheelMechanism,
    t.boatEquipment.cable,
    t.boatEquipment.panel,
  ];

  const description = t.pages.boats.sportstarText;

  const data = {
    length: 6.51,
    width: 2.38,
    weight: 800,
    engineType: t.boatEquipment.outboardEngine,
    maxEnginePower: 120,
    fuelTank: 180,
    waterTank: 70,
    maxPerson: 8,
    color: `${t.common.red}/${t.common.blue}/${t.common.white}`,
  };

  return (
    <>
      <Head>
        <title>Sportstar 22</title>
        <meta name="title" content="Sportstar 22" />
        <meta name="description" content={t.pages.boats.sportstarText} />
      </Head>
      <BoatLayout
        boatData={data}
        boatImages={images}
        boatHeading="Sportstar 22"
        boatDescription={description}
        boatAdditionalEquipment={equipment}
        boatImageURL={sportstarLogo}
      />
    </>
  );
};

export default Sportstar;
