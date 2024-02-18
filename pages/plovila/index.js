import Head from "next/head";
import { useRouter } from "next/router";
import BoatCard from "../../components/BoatCard/BoatCard";
import PageLayout from "../../layout/PageLayout/PageLayout";

import background from "../../public/assets/images/boats/sportstar22/sportstar-page-background.jpg";
import sportstar from "../../public/assets/images/boats/sportstar22/sportstar-boat-card.jpg";
import sportstar1 from "../../public/assets/images/boats/sportstar22/sportstar-3.jpg";
import skip from "../../public/assets/images/boats/skip-sport-19/skip-sport-1.jpeg";
import skip1 from "../../public/assets/images/boats/skip-sport-19/skip-sport-2.jpeg";
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
      enginePower: 260,
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
    skipSportData: {
      heading: "SKIP sport 19",
      length: 5.7,
      numberOfPersons: 7,
      enginePower: "140",
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
    teoremaData: {
      heading: "Teorema 20",
      length: 5.92,
      numberOfPersons: 7,
      enginePower: "150",
      price: t.tableData.priceValue,
      available: t.tableData.available,
    },
  };

  return (
    <>
      <Head>
        <title>{t.metadata.boats.title}</title>
        <meta name="title" content={t.metadata.boats.title} />
        <meta name="description" content={t.metadata.boats.description} />
        <meta name="keywords" content="prodaja plovila" />
        <meta property="og:title" content={t.metadata.boats.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.boats.description}
        />
        <meta property="og:image" content="/assets/images/nautica.jpg" />
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
              boatCardData={boatsData.skipSportData}
              boatCardBackgroundImageURL={skip1}
              boatCardImageURL={skip}
              boatCardLink="/plovila/skip-sport-19"
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
