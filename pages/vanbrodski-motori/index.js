import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import hondaEngines from "../../public/assets/images/equipment/honda-engines.jpg";
import sr from "../../locales/sr";
import en from "../../locales/en";
import Link from "next/link";
import Head from "next/head";
const OutboardEngines = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <>
      <Head>
        <title>{t.metadata.outboardEngines.title}</title>
        <meta name="title" content={t.metadata.outboardEngines.title} />
        <meta
          name="description"
          content={t.metadata.outboardEngines.description}
        />
        <meta name="keywords" content="Honda, vanbrodski motori " />
        <meta property="og:title" content={t.metadata.outboardEngines.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.outboardEngines.description}
        />
      </Head>
      <PageLayout
        pageLayoutImageUrl={hondaEngines}
        pageLayoutHeading={t.common.outboardEngines}
        pageLayoutHeadingText={t.pages.outboardEngines.headingText}
      >
        <div className="outboard-engines">
          <div className="outboard-engines__content">
            <h2 className="secondary-heading">
              {t.pages.outboardEngines.subheading}
            </h2>
            <p className="outboard-engines__text">
              {" "}
              {t.pages.outboardEngines.text}
            </p>
          </div>
          <div className="outboard-engines__cards">
            <Link
              className="outboard-engines__card outboard-engines__card--1"
              href="/vanbrodski-motori/novi-motori"
            >
              <div>{t.common.newOutboardEngines}</div>
            </Link>
            <Link
              className="outboard-engines__card outboard-engines__card--2"
              href="/vanbrodski-motori/polovni-motori"
            >
              <div>{t.common.usedOutboardEngines}</div>
            </Link>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default OutboardEngines;
