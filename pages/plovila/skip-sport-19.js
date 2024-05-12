import { useRouter } from "next/router";
import Head from "next/head";
import BoatLayout from "../../layout/BoatLayout/BoatLayout";
import en from "../../locales/en";
import sr from "../../locales/sr";

import skipTest from "../../public/assets/images/boats/skip-sport-19/skip-sport-sea-3.png";
import skip1 from "../../public/assets/images/boats/skip-sport-19/skip-sport-1.jpeg";
import skip2 from "../../public/assets/images/boats/skip-sport-19/skip-sport-2.jpeg";
import skip3 from "../../public/assets/images/boats/skip-sport-19/skip-sport-3.jpeg";
import skip4 from "../../public/assets/images/boats/skip-sport-19/skip-sport-4.jpeg";
import skip5 from "../../public/assets/images/boats/skip-sport-19/skip-sport-5.jpeg";
import skip6 from "../../public/assets/images/boats/skip-sport-19/skip-sport-6.jpeg";
import skip7 from "../../public/assets/images/boats/skip-sport-19/skip-sport-7.jpeg";
import skip8 from "../../public/assets/images/boats/skip-sport-19/skip-sport-8.jpeg";
import skip9 from "../../public/assets/images/boats/skip-sport-19/skip-sport-9.jpeg";
import skip10 from "../../public/assets/images/boats/skip-sport-19/skip-sport-10.jpeg";
import skip11 from "../../public/assets/images/boats/skip-sport-19/skip-sport-11.jpeg";
import skip12 from "../../public/assets/images/boats/skip-sport-19/skip-sport-12.jpeg";
import skip13 from "../../public/assets/images/boats/skip-sport-19/skip-sport-13.jpeg";
import skip14 from "../../public/assets/images/boats/skip-sport-19/skip-sport-14.jpeg";
import skip15 from "../../public/assets/images/boats/skip-sport-19/skip-sport-15.jpeg";
import skip16 from "../../public/assets/images/boats/skip-sport-19/skip-sport-16.jpeg";
import skip17 from "../../public/assets/images/boats/skip-sport-19/skip-sport-17.jpeg";
import skip18 from "../../public/assets/images/boats/skip-sport-19/skip-sport-18.jpeg";
import skip19 from "../../public/assets/images/boats/skip-sport-19/skip-sport-19.jpeg";
import skip20 from "../../public/assets/images/boats/skip-sport-19/skip-sport-20.jpeg";
import skip21 from "../../public/assets/images/boats/skip-sport-19/skip-sport-21.jpeg";
import skip22 from "../../public/assets/images/boats/skip-sport-19/skip-sport-22.jpeg";
import skip23 from "../../public/assets/images/boats/skip-sport-19/skip-sport-23.jpeg";
import skip24 from "../../public/assets/images/boats/skip-sport-19/skip-sport-24.jpeg";
import skip25 from "../../public/assets/images/boats/skip-sport-19/skip-sport-25.jpeg";
import skip26 from "../../public/assets/images/boats/skip-sport-19/skip-sport-sea.jpg";
import skip27 from "../../public/assets/images/boats/skip-sport-19/skip-sport-sea-1.jpg";
import skip28 from "../../public/assets/images/boats/skip-sport-19/skip-sport-sea-2.jpg";
import skip29 from "../../public/assets/images/boats/skip-sport-19/skip-sport-sea-3.jpg";

const Skip = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [
    skip27,
    skip29,
    skip28,
    skip26,
    skip1,
    skip2,
    skip3,
    skip4,
    skip5,
    skip6,
    skip7,
    skip24,
    skip25,
    skip8,
    skip9,
    skip10,
    skip11,
    skip12,
    skip13,
    skip14,
    skip15,
    skip16,
    skip17,
    skip18,
    skip19,
    skip20,
    skip21,
    skip22,
    skip23,
  ];

  const equipment = [
    t.boatEquipment.navigationLights,
    t.boatEquipment.bilgePump,
    t.boatEquipment.batterySwitch,
    t.boatEquipment.compass,
    t.boatEquipment.ladder,
    t.boatEquipment.seat,
    t.boatEquipment.storageLocker,
    t.boatEquipment.upholsteryComplete,
  ];

  const description = t.pages.boats.skipText;

  const data = {
    length: 5.7,
    width: 2.2,
    weight: 600,
    engineType: t.boatEquipment.outboardEngine,
    maxEnginePower: "140",
    fuelTank: "/",
    waterTank: "/",
    maxPerson: 7,
    color: t.common.white,
  };

  return (
    <>
      <Head>
        <title>{t.metadata.skip.title}</title>
        <meta name="title" content={t.metadata.skip.title} />
        <meta name="description" content={t.metadata.skip.description} />
        <meta property="og:title" content={t.metadata.skip.title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={t.metadata.skip.description} />
        <meta
          property="og:image"
          content="/assets/images/boats/skip-sport-19/skip-sport-3.jpeg"
        />
        <meta name="twitter:title" content={t.metadata.skip.title} />
        <meta
          name="twitter:description"
          content={t.metadata.skip.description}
        />
        <meta
          name="twitter:image"
          content="/assets/images/boats/skip-sport-19/skip-sport-3.jpeg"
        />
      </Head>
      <BoatLayout
        boatDescription={description}
        boatImages={images}
        boatHeading="SKIP sport 19"
        boatAdditionalEquipment={equipment}
        boatImageURL={skipTest}
        boatData={data}
      />
    </>
  );
};

export default Skip;
