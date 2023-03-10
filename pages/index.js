import Head from "next/head";
import { useRouter } from "next/router";
import SectionHero from "../components/sections/SectionHero/SectionHero";
import SectionAboutUs from "../components/sections/SectionAboutUs/SectionAboutUs";
import SectionBoats from "../components/sections/SectionBoats/SectionBoats";
import SectionEngines from "../components/sections/SectionEngines/SectionEngines";
import SectionNewsletterReviews from "../components/sections/SectionNewsletterReviews/SectionNewsletterReviews";
import SectionContact from "../components/SectionContact/SectionContact";
import SectionEquipment from "../components/sections/SectionEquipment/SectionEquipment";
import SectionServices from "../components/sections/SectionServices/SectionServices";
import en from "../locales/en";
import sr from "../locales/sr";

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <>
      <Head>
        <title>{t.metadata.landingPage.title}</title>
        <meta name="title" content={t.metadata.landingPage.title} />
        <meta name="description" content={t.metadata.landingPage.description} />
        <meta name="keywords" content="HD Nautika, servis plovila" />
        <meta property="og:title" content={t.metadata.landingPage.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={t.metadata.landingPage.description}
        />
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
