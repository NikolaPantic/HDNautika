import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import nautika from "../../public/assets/images/services/mechanic/mechanic.jpg";
import nautika1 from "../../public/assets/images/services/mechanic/mechanic-1.jpg";
import nautika2 from "../../public/assets/images/services/reparation/reparation-2.jpg";
import nautika3 from "../../public/assets/images/services/reparation/painting.jpg";
import nautika4 from "../../public/assets/images/boats/sportstar22/sportstar-blue-small.jpg";
import nautika5 from "../../public/assets/images/services/reparation/reparation-1.jpg";
import nautika6 from "../../public/assets/images/boats/sportstar22/sportstar-table.jpg";
import nautika7 from "../../public/assets/images/boats/sportstar22/sportstar-engine.jpg";
import logo from "../../public/assets/svg/logo1.svg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const AboutUs = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <>
      <Head>
        <title>{t.metadata.aboutUs.title}</title>
        <meta name="title" content={t.metadata.aboutUs.title} />
        <meta name="description" content={t.metadata.aboutUs.description} />
        <meta name="keywords" content="HD Nautika, o nama" />
        <meta property="og:title" content={t.metadata.aboutUs.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.aboutUs.description}
        />
      </Head>
      <PageLayout
        pageLayoutHeading={t.common.aboutUs}
        pageLayoutImageUrl={logo}
        pageLayoutHeadingText={t.pages.aboutUs.headingText}
      >
        <div className="about-us">
          <section className="about-us__section">
            <h2 className="secondary-heading">{t.pages.aboutUs.subheading1}</h2>
            <div className="about-us__section--text">
              <p>
                {t.pages.aboutUs.text1} <strong>HONDA</strong>{" "}
                {t.pages.aboutUs.text2}
              </p>
              <br />
              <p>
                {t.pages.aboutUs.text3} <strong>SPORTSTAR 22</strong>,{" "}
                {t.pages.aboutUs.text4}{" "}
                <Link className="text-link" href="/plovila/sportstar-22">
                  {t.pages.aboutUs.text5}
                </Link>
                .
              </p>
            </div>
            <div className="about-us__section--images">
              <Image src={nautika4} alt="HD Nautika Sportstar 22" />
              <Image src={nautika} alt="HD Nautika mehaničke usluge" />
              <Image src={nautika7} alt="HD Nautika Honda motor" />
              <Image src={nautika1} alt="HD Nautika vanbrodski motori" />
            </div>
          </section>
          <section className="about-us__section">
            <h2 className="secondary-heading">{t.pages.aboutUs.subheading2}</h2>
            <div className="about-us__section--text">
              <p>{t.pages.aboutUs.text6}</p>
              <br />
              <p>
                - <strong>{t.pages.aboutUs.text7}</strong>{" "}
                {t.pages.aboutUs.text8},
              </p>
              <p>
                - {t.pages.aboutUs.text9}{" "}
                <strong>{t.pages.aboutUs.text10}</strong>{" "}
                {t.pages.aboutUs.text11},
              </p>
              <p>
                - {t.pages.aboutUs.text12}{" "}
                <strong>{t.pages.aboutUs.text13}</strong>,
              </p>
              <p>
                - <strong>{t.pages.aboutUs.text14}</strong>{" "}
                {t.pages.aboutUs.text15},
              </p>

              <br />
              <p>{t.pages.aboutUs.text16}</p>
              <p>{t.pages.aboutUs.text17}</p>
            </div>

            <div className="about-us__section--images">
              <Image src={nautika5} alt="HD Nautika farbanje plovila" />
              <Image src={nautika2} alt="HD Nautika servis plovila" />
              <Image src={nautika3} alt="HD Nautika farbanje plovila" />
              <Image src={nautika6} alt="HD Nautika Sportstar 22" />
            </div>
          </section>
        </div>
      </PageLayout>
    </>
  );
};

export default AboutUs;
