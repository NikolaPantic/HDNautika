import Head from "next/head";
import SectionHero from "../components/sections/SectionHero/SectionHero";
import SectionAboutUs from "../components/sections/SectionAboutUs/SectionAboutUs";
import SectionBoats from "../components/sections/SectionBoats/SectionBoats";
import SectionEngines from "../components/sections/SectionEngines/SectionEngines";
import SectionNewsletterReviews from "../components/sections/SectionNewsletterReviews/SectionNewsletterReviews";
import SectionContact from "../components/SectionContact/SectionContact";
import SectionEquipment from "../components/sections/SectionEquipment/SectionEquipment";
import SectionServices from "../components/sections/SectionServices/SectionServices";

export default function Home() {
  return (
    <>
      <Head>
        <title>{t.metadata.landingPage.heading}</title>
        <meta name="title" content={t.metadata.landingPage.heading} />
        <meta name="description" content={t.metadata.landingPage.description} />
        <meta
          name="keywords"
          content="HD Nautika, servis plovila, prodaja motora"
        />
        <meta property="og:title" content={t.metadata.landingPage.heading} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
      </Head>

      <article className="landing-page">
        <SectionHero />
        <SectionAboutUs />
        <SectionBoats />
        <SectionServices />
        <SectionEngines />
        <SectionEquipment />
        <SectionNewsletterReviews />
        <SectionContact />
      </article>
    </>
  );
}
