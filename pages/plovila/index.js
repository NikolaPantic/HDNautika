import Head from "next/head";
import { useRouter } from "next/router";
import BoatCard from "../../components/BoatCard/BoatCard";
import PageLayout from "../../layout/PageLayout/PageLayout";

import background from "../../public/assets/images/boats/sportstar22/sportstar-page-background.jpg";
import sportstar from "../../public/assets/images/boats/sportstar22/sportstar-boat-card.jpg";
import sportstar1 from "../../public/assets/images/boats/sportstar22/sportstar-3.jpg";
import cerion from "../../public/assets/images/boats/cerion27/cerion.jpg";
import cerion1 from "../../public/assets/images/boats/cerion27/cerion-4.jpg";
import eolo from "../../public/assets/images/boats/eolo710/eolo-1.jpg";
import eolo1 from "../../public/assets/images/boats/eolo710/eolo-12.jpg";
import marino from "../../public/assets/images/boats/marino550/marino.jpg";
import marino1 from "../../public/assets/images/boats/marino550/marino-1.jpg";
import teorema from "../../public/assets/images/boats/teorema20/teorema-1.jpg";
import teorema1 from "../../public/assets/images/boats/teorema20/teorema-3.jpg";
import Suggestions from "../../components/Suggestions/Suggestions";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Boats = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const boatsData = {
    superstarData: {
      heading: "Sportstar 22",
      length: 6.51,
      numberOfPersons: 8,
      enginePower: 120,
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
    cerionData: {
      heading: "Cerion 27,7 WA",
      length: 8.4,
      numberOfPersons: 8,
      enginePower: "2 x 150",
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
    eoloData: {
      heading: "Eolo 710",
      length: 7.7,
      numberOfPersons: 8,
      enginePower: "2 x 230",
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
    marinoData: {
      heading: "Marino Gabry 550",
      length: 5.54,
      numberOfPersons: 7,
      enginePower: "120",
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
    teoremaData: {
      heading: "Teorema 20",
      length: 5.92,
      numberOfPersons: 7,
      enginePower: "140",
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
  };

  return (
    <>
      <Head>
        <title>{t.common.boats}</title>
        <meta name="title" content={t.common.boats} />
        <meta name="description" content={t.pages.boats.headingText} />
      </Head>
      <PageLayout
        pageLayoutHeadingText={t.pages.boats.headingText}
        pageLayoutHeading={t.common.boats}
        pageLayoutImageUrl={background}
      >
        <div className="boats">
          <BoatCard
            boatCardData={boatsData.superstarData}
            boatCardImageURL={sportstar1}
            boatCardBackgroundImageURL={sportstar}
            boatCardHomemade={true}
            boatCardLink="/plovila/sportstar-22"
          />
          <BoatCard
            boatCardData={boatsData.cerionData}
            boatCardBackgroundImageURL={cerion}
            boatCardImageURL={cerion1}
            boatCardLink="/plovila/cerion-27,7-wa"
          />
          <BoatCard
            boatCardData={boatsData.eoloData}
            boatCardBackgroundImageURL={eolo}
            boatCardImageURL={eolo1}
            boatCardLink="/plovila/eolo-710"
          />
          <BoatCard
            boatCardData={boatsData.marinoData}
            boatCardBackgroundImageURL={marino}
            boatCardImageURL={marino1}
            boatCardLink="/plovila/marino-gabry-550"
          />
          <BoatCard
            boatCardData={boatsData.teoremaData}
            boatCardBackgroundImageURL={teorema}
            boatCardImageURL={teorema1}
            boatCardLink="/plovila/teorema-20"
          />
        </div>
        <Suggestions suggestionType="equipment" />
      </PageLayout>
    </>
  );
};

export default Boats;
