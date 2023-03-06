import { useRouter } from "next/router";
import Head from "next/head";
import BoatLayout from "../../layout/BoatLayout/BoatLayout";
import cerion from "../../public/assets/images/boats/cerion27/cerion.jpg";
import cerion1 from "../../public/assets/images/boats/cerion27/cerion-1.jpg";
import cerion2 from "../../public/assets/images/boats/cerion27/cerion-2.jpg";
import cerion3 from "../../public/assets/images/boats/cerion27/cerion-3.jpg";
import cerion4 from "../../public/assets/images/boats/cerion27/cerion-4.jpg";
import cerion5 from "../../public/assets/images/boats/cerion27/cerion-5.jpg";
import cerion6 from "../../public/assets/images/boats/cerion27/cerion-6.jpg";
import cerion7 from "../../public/assets/images/boats/cerion27/cerion-7.jpg";
import cerion8 from "../../public/assets/images/boats/cerion27/cerion-8.jpg";
import cerion9 from "../../public/assets/images/boats/cerion27/cerion-9.jpg";
import cerion10 from "../../public/assets/images/boats/cerion27/cerion-10.jpg";
import cerion11 from "../../public/assets/images/boats/cerion27/cerion-11.jpg";
import cerion12 from "../../public/assets/images/boats/cerion27/cerion-12.jpg";
import cerion13 from "../../public/assets/images/boats/cerion27/cerion-13.jpg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Cerion = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [
    cerion,
    cerion1,
    cerion2,
    cerion3,
    cerion4,
    cerion5,
    cerion6,
    cerion7,
    cerion8,
    cerion9,
    cerion10,
    cerion11,
    cerion12,
    cerion13,
  ];

  const equipment = [
    t.boatEquipment.vhf,
    "GPS",
    t.boatEquipment.compass,
    "fishfinder",
    t.boatEquipment.depthGauge,
    t.boatEquipment.winch,
    t.boatEquipment.charger,
    t.boatEquipment.shower,
    t.boatEquipment.fridge,
    t.boatEquipment.awning,
    "WC",
    t.boatEquipment.teakFloor,
  ];

  const description = t.pages.boats.cerionText;

  const data = {
    length: 8.4,
    width: 2.5,
    weight: "/",
    engineType: t.boatEquipment.outboardEngine,
    maxEnginePower: "2 x 150",
    fuelTank: 240,
    waterTank: 100,
    maxPerson: 8,
    color: `${t.common.blue}-${t.common.white}`,
  };

  return (
    <>
      <Head>
        <title>{t.metadata.cerion.title}</title>
        <meta name="title" content={t.metadata.cerion.title} />
        <meta name="description" content={t.metadata.cerion.description} />
        <meta property="og:title" content={t.metadata.cerion.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.cerion.description}
        />
      </Head>
      <BoatLayout
        boatDescription={description}
        boatImages={images}
        boatHeading="Cerion 27,7 WA"
        boatAdditionalEquipment={equipment}
        boatImageURL={cerion7}
        boatData={data}
      />
    </>
  );
};

export default Cerion;
