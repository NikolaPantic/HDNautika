import { useRouter } from "next/router";
import Head from "next/head";
import BoatLayout from "../../layout/BoatLayout/BoatLayout";
import teorema from "../../public/assets/images/boats/teorema20/teorema.jpg";
import teorema1 from "../../public/assets/images/boats/teorema20/teorema-1.jpg";
import teorema2 from "../../public/assets/images/boats/teorema20/teorema-2.jpg";
import teorema3 from "../../public/assets/images/boats/teorema20/teorema-3.jpg";
import teorema4 from "../../public/assets/images/boats/teorema20/teorema-4.jpg";
import teorema5 from "../../public/assets/images/boats/teorema20/teorema-5.jpg";
import teorema6 from "../../public/assets/images/boats/teorema20/teorema-6.jpg";
import teorema7 from "../../public/assets/images/boats/teorema20/teorema-7.jpg";
import teorema8 from "../../public/assets/images/boats/teorema20/teorema-8.jpg";
import teorema9 from "../../public/assets/images/boats/teorema20/teorema-9.jpg";
import teorema10 from "../../public/assets/images/boats/teorema20/teorema-10.jpg";
import teorema11 from "../../public/assets/images/boats/teorema20/teorema-11.jpg";
import teorema12 from "../../public/assets/images/boats/teorema20/teorema-12.jpg";
import teorema13 from "../../public/assets/images/boats/teorema20/teorema-13.jpg";
import teorema14 from "../../public/assets/images/boats/teorema20/teorema-14.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Teorema = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  const images = [
    teorema3,
    teorema,
    teorema1,
    teorema2,
    teorema4,
    teorema5,
    teorema6,
    teorema7,
    teorema8,
    teorema9,
    teorema10,
    teorema11,
    teorema12,
    teorema13,
    teorema14,
  ];

  const equipment = [
    t.boatEquipment.cleats,
    t.boatEquipment.ladder,
    t.boatEquipment.cushions,
    t.boatEquipment.bilgePump,
    t.boatEquipment.ledLights,
    t.boatEquipment.panelWithSwitches,
    t.boatEquipment.steeringWheel,
    t.boatEquipment.steeringWheelMechanism,
    t.boatEquipment.teleflexCable,
  ];

  const description = t.pages.boats.teoremaText;

  const data = {
    length: 5.92,
    width: 2.2,
    weight: "/",
    engineType: t.boatEquipment.outboardEngine,
    maxEnginePower: "150",
    fuelTank: "/",
    waterTank: "/",
    maxPerson: 7,
    color: t.common.white,
  };

  return (
    <>
      <Head>
        <title>{t.metadata.teorema.title}</title>
        <meta name="title" content={t.metadata.teorema.title} />
        <meta name="description" content={t.metadata.teorema.description} />
        <meta property="og:title" content={t.metadata.teorema.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.teorema.description}
        />{" "}
      </Head>
      <BoatLayout
        boatDescription={description}
        boatImages={images}
        boatHeading="Teorema 20"
        boatAdditionalEquipment={equipment}
        boatImageURL={teorema}
        boatData={data}
      />
    </>
  );
};

export default Teorema;
