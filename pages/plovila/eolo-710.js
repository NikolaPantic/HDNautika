import { useRouter } from "next/router";
import Head from "next/head";
import BoatLayout from "../../layout/BoatLayout/BoatLayout";
import eolo from "../../public/assets/images/boats/eolo710/eolo.jpg";
import eolo1 from "../../public/assets/images/boats/eolo710/eolo-1.jpg";
import eolo2 from "../../public/assets/images/boats/eolo710/eolo-2.jpg";
import eolo3 from "../../public/assets/images/boats/eolo710/eolo-3.jpg";
import eolo4 from "../../public/assets/images/boats/eolo710/eolo-5.jpg";
import eolo5 from "../../public/assets/images/boats/eolo710/eolo-6.jpg";
import eolo6 from "../../public/assets/images/boats/eolo710/eolo-7.jpg";
import eolo7 from "../../public/assets/images/boats/eolo710/eolo-8.jpg";
import eolo8 from "../../public/assets/images/boats/eolo710/eolo-9.jpg";
import eolo9 from "../../public/assets/images/boats/eolo710/eolo-10.jpg";
import eolo10 from "../../public/assets/images/boats/eolo710/eolo-11.jpg";
import eolo11 from "../../public/assets/images/boats/eolo710/eolo-12.jpg";
import eolo12 from "../../public/assets/images/boats/eolo710/eolo-13.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Eolo = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const images = [
    eolo,
    eolo1,
    eolo2,
    eolo3,
    eolo4,
    eolo5,
    eolo6,
    eolo7,
    eolo8,
    eolo9,
    eolo10,
    eolo11,
    eolo12,
  ];

  const equipment = [
    t.boatEquipment.vhf,
    "GPS",
    t.boatEquipment.compass,
    "fishfinder",
    t.boatEquipment.depthGauge,
    t.boatEquipment.winch,
    t.boatEquipment.charger,
    t.boatEquipment.awning,
    t.boatEquipment.shower,
    t.boatEquipment.fridge,
    "TV",
    "WC",
  ];

  const description = t.pages.boats.eoloText;

  const data = {
    length: 7.7,
    width: 2.5,
    weight: 2000,
    engineType: t.boatEquipment.outboardEngine,
    maxEnginePower: "2 x 230",
    fuelTank: 250,
    waterTank: 100,
    maxPerson: 8,
    color: t.common.blue + "-" + t.common.white,
  };

  return (
    <>
      <Head>
        <title>{t.metadata.eolo.title}</title>
        <meta name="title" content={t.metadata.eolo.title} />
        <meta name="description" content={t.metadata.eolo.description} />
        <meta property="og:title" content={t.metadata.eolo.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.eolo.description}
        />{" "}
      </Head>
      <BoatLayout
        boatDescription={description}
        boatImages={images}
        boatHeading="Eolo 710"
        boatAdditionalEquipment={equipment}
        boatImageURL={eolo}
        boatData={data}
      />
    </>
  );
};

export default Eolo;
