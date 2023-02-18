import Head from "next/head";
import SectionHero from "../components/sections/SectionHero/SectionHero";
import SectionAboutUs from "../components/sections/SectionAboutUs/SectionAboutUs";
import SectionBoats from "../components/sections/SectionBoats/SectionBoats";
import SectionEngines from "../components/sections/SectionEngines/SectionEngines";
import SectionEquipment from "../components/sections/SectionEquipment/SectionEquipment";
import SectionServices from "../components/sections/SectionServices/SectionServices";
import SectionNewsletterReviews from "../components/sections/SectionNewsletterReviews/SectionNewsletterReviews";
import SectionContact from "../components/SectionContact/SectionContact";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Servis i prodaja plovila i nautičke opreme | Izrada plovila | Zimovnik
        </title>
        <meta
          name="title"
          content="Servis i prodaja plovila i vanbrodskih motora | Izrada plovila | Zimovnik"
        />
        <meta
          name="description"
          content="Servis i prodaja plovila i vanbrodskih motora. Novi Honda motori. Prodaja nautičke opreme. Zimovnik plovila i motora."
        />
        <meta
          name="keywords"
          content="HD Nautika, servis plovila, prodaja motora"
        />
        <meta property="og:title" content="" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="" />
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
