import { useRouter } from "next/router";
import Head from "next/head";
import BoatLayout from "../../layout/BoatLayout/BoatLayout";
import marino from "../../public/assets/images/boats/marino550/marino.jpg";
import marino1 from "../../public/assets/images/boats/marino550/marino-1.jpg";
import marino2 from "../../public/assets/images/boats/marino550/marino-2.jpg";
import marino3 from "../../public/assets/images/boats/marino550/marino-3.jpg";
import marino4 from "../../public/assets/images/boats/marino550/marino-4.jpg";
import marino5 from "../../public/assets/images/boats/marino550/marino-5.jpg";
import marino6 from "../../public/assets/images/boats/marino550/marino-6.jpg";
import marino7 from "../../public/assets/images/boats/marino550/marino-7.jpg";
import marino8 from "../../public/assets/images/boats/marino550/marino-8.jpg";
import marino9 from "../../public/assets/images/boats/marino550/marino-9.jpg";
import marino10 from "../../public/assets/images/boats/marino550/marino-10.jpg";
import marino11 from "../../public/assets/images/boats/marino550/marino-11.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Marino = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  const images = [
    marino1,
    marino,
    marino2,
    marino3,
    marino4,
    marino5,
    marino6,
    marino7,
    marino8,
    marino9,
    marino10,
    marino11,
  ];

  const equipment = [t.boatEquipment.extraEquipment];

  const description = t.pages.boats.marinoText;
  const data = {
    length: 5.54,
    width: 2.2,
    weight: 500,
    engineType: t.boatEquipment.outboardEngine,
    maxEnginePower: "120",
    fuelTank: 90,
    waterTank: "/",
    maxPerson: 7,
    color: t.common.white,
  };

  return (
    <>
      <Head>
        <title>{t.metadata.marino.title}</title>
        <meta name="title" content={t.metadata.marino.title} />
        <meta name="description" content={t.metadata.marino.description} />
        <meta property="og:title" content={t.metadata.marino.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.marino.description}
        />{" "}
      </Head>
      <BoatLayout
        boatDescription={description}
        boatImages={images}
        boatHeading="Marino Gabry 550"
        boatAdditionalEquipment={equipment}
        boatImageURL={marino}
        boatData={data}
      />
    </>
  );
};

export default Marino;
