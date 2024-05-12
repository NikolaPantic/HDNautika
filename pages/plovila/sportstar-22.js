import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import BoatLayout from "../../layout/BoatLayout/BoatLayout";

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
import sportstar24 from "../../public/assets/images/boats/sportstar22/sportstar-21.jpg";
import sportstar25 from "../../public/assets/images/boats/sportstar22/sportstar-22.jpg";
import sportstar26 from "../../public/assets/images/boats/sportstar22/sportstar-23.jpg";
import sportstarblue from "../../public/assets/images/boats/sportstar22/sportstar-blue-1.jpg";
import sportstarblue1 from "../../public/assets/images/boats/sportstar22/sportstar-blue-2.jpg";
import sportstarblue2 from "../../public/assets/images/boats/sportstar22/sportstar-blue-3.jpg";
import sportstarblue3 from "../../public/assets/images/boats/sportstar22/sportstar-blue-4.jpg";
import sportstarblue4 from "../../public/assets/images/boats/sportstar22/sportstar-blue-5.jpg";
import sportstarblue5 from "../../public/assets/images/boats/sportstar22/sportstar-blue-6.jpg";
import sportstarblue6 from "../../public/assets/images/boats/sportstar22/sportstar-blue-7.jpg";
import sportstarblue7 from "../../public/assets/images/boats/sportstar22/sportstar-blue-8.jpg";
import sportstarblue8 from "../../public/assets/images/boats/sportstar22/sportstar-blue-9.jpg";
import sportstarblue9 from "../../public/assets/images/boats/sportstar22/sportstar-blue-10.jpg";
import sportstarblue10 from "../../public/assets/images/boats/sportstar22/sportstar-blue-11.jpg";
import sportstarblue11 from "../../public/assets/images/boats/sportstar22/sportstar-blue-12.jpg";
import sportstarblue12 from "../../public/assets/images/boats/sportstar22/sportstar-blue-13.jpg";
import sportstarblue13 from "../../public/assets/images/boats/sportstar22/sportstar-blue-14.jpg";
import sportstarblue14 from "../../public/assets/images/boats/sportstar22/sportstar-blue-15.jpg";
import sportstarblue15 from "../../public/assets/images/boats/sportstar22/sportstar-blue-16.jpg";
import sportstarblue16 from "../../public/assets/images/boats/sportstar22/sportstar-blue-17.jpg";
import sportstarblue17 from "../../public/assets/images/boats/sportstar22/sportstar-blue-18.jpg";
import sportstarblue18 from "../../public/assets/images/boats/sportstar22/sportstar-blue-19.jpg";
import sportstarblue19 from "../../public/assets/images/boats/sportstar22/sportstar-blue-20.jpg";
import sportstarblue20 from "../../public/assets/images/boats/sportstar22/sportstar-blue-21.jpg";
import sportstarblue21 from "../../public/assets/images/boats/sportstar22/sportstar-blue-22.jpg";
import sportstarblue22 from "../../public/assets/images/boats/sportstar22/sportstar-river-view.jpg";
import sportstarblue23 from "../../public/assets/images/boats/sportstar22/sportstar-river-view-2.jpg";
import sportstarblue24 from "../../public/assets/images/boats/sportstar22/sportstar-river-view-3.jpg";
import sportstarblue25 from "../../public/assets/images/boats/sportstar22/sportstar-river-view-4.jpg";
import sportstarblue26 from "../../public/assets/images/boats/sportstar22/sportstar-blue.jpg";
import sportstarblue27 from "../../public/assets/images/boats/sportstar22/sportstar-river-view-1.jpg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Sportstar = () => {
  const { locale } = useRouter();

  const [boatColor, setBoatColor] = useState("red");
  const t = locale === "sr" ? sr : en;

  const changeBoatColor = (boatColor) => {
    setBoatColor(boatColor);
  };

  const sportstarRedImages = [
    sportstar2,
    sportstar1,
    sportstar11,
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
    sportstar24,
    sportstar25,
    sportstar26,
  ];

  const sportstarBlueImages = [
    sportstarblue3,
    sportstarblue4,
    sportstarblue5,
    sportstarblue6,
    sportstarblue7,
    sportstarblue8,
    sportstarblue9,
    sportstarblue10,
    sportstarblue11,
    sportstarblue12,
    sportstarblue13,
    sportstarblue14,
    sportstarblue15,
    sportstarblue16,
    sportstarblue17,
    sportstarblue18,
    sportstarblue19,
    sportstarblue20,
    sportstarblue21,
    sportstarblue22,
    sportstarblue23,
    sportstarblue24,
    sportstarblue25,
    sportstarblue26,
    sportstarblue27,
    sportstarblue,
    sportstarblue1,
    sportstarblue2,
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
    maxEnginePower: 260,
    fuelTank: 215,
    waterTank: 70,
    maxPerson: 8,
    color: `${t.common.basic}: ${t.common.white}`,
  };

  return (
    <>
      <Head>
        <title>{t.metadata.sportstar.title}</title>
        <meta name="title" content={t.metadata.sportstar.title} />
        <meta name="description" content={t.metadata.sportstar.description} />
        <meta property="og:title" content={t.metadata.sportstar.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.sportstar.description}
        />
        <meta
          property="og:image"
          content="/assets/images/boats/sportstar22/sportstar-background.jpg"
        />
        <meta name="twitter:title" content={t.metadata.sportstar.title} />
        <meta
          name="twitter:description"
          content="/assets/images/boats/sportstar22/sportstar-background.jpg"
        />
        <meta name="twitter:image" content={sportstar5} />
      </Head>
      <BoatLayout
        isSportstarBoat={true}
        boatData={data}
        boatImages={
          boatColor === "red" ? sportstarRedImages : sportstarBlueImages
        }
        changeBoatColor={changeBoatColor}
        isRedBoat={boatColor === "red"}
        boatHeading="Sportstar 22"
        boatDescription={description}
        boatAdditionalEquipment={equipment}
        boatImageURL={sportstar5}
      />
    </>
  );
};

export default Sportstar;
