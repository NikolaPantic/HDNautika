import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { scrollToContact } from "../../data/servicesData";
import saltEngine from "../../public/assets/images/services/mechanic/engine-salt.jpg";
import mechanic from "../../public/assets/images/services/mechanic/mechanic.jpg";
import mechanic1 from "../../public/assets/images/services/mechanic/mechanic-1.jpg";
import mechanic2 from "../../public/assets/images/services/mechanic/mechanic-2.jpg";
import mechanic3 from "../../public/assets/images/services/mechanic/mechanic-3.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const MechanicService = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <>
      <Head>
        <title>{t.metadata.mechanicService.title}</title>
        <meta name="title" content={t.metadata.mechanicService.title} />
        <meta
          name="description"
          content={t.metadata.mechanicService.description}
        />
        <meta name="keywords" content="popravka vanbrodskih motora" />
        <meta property="og:title" content={t.metadata.mechanicService.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.mechanicService.description}
        />
        <meta property="og:image" content="/assets/images/nautica.jpg" />
      </Head>
      <PageLayout
        pageLayoutImageUrl={mechanic}
        pageLayoutHeading={t.services.mechanicService.heading}
        pageLayoutHeadingText={t.pages.mechanicService.headingText}
      >
        <div className="service">
          <div className="service__content">
            <div className="service__content--info">
              <h2 className="secondary-heading">
                {t.services.mechanicService.heading}
              </h2>
              <p>{t.pages.mechanicService.text1}</p>
              <br />
              <p>
                {t.pages.mechanicService.text2}{" "}
                <a className="text-link" href="tel:+38169722767">
                  {t.pages.mechanicService.text3}
                </a>{" "}
                {t.pages.mechanicService.text4}{" "}
                <Link className="text-link" href="" onClick={scrollToContact}>
                  {t.pages.mechanicService.text5}
                </Link>
                .
              </p>
            </div>
            <figure>
              <Image src={saltEngine} alt="HD Nautika mehaničarske usluge" />
              <figcaption>{t.pages.mechanicService.figcaption}</figcaption>
            </figure>
          </div>
          <div className="mechanic-service__images">
            <Image src={mechanic} alt="HD Nautika mehaničarske usluge" />
            <Image src={mechanic2} alt="HD Nautika mehaničarske usluge" />
            <Image src={mechanic3} alt="HD Nautika mehaničarske usluge" />
            <Image src={mechanic1} alt="HD Nautika mehaničarske usluge" />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default MechanicService;
