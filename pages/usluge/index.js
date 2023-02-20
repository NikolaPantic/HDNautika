import { useRouter } from "next/router";
import Head from "next/head";
import OvalButton from "../../components/OvalButton/OvalButton";
import PageLayout from "../../layout/PageLayout/PageLayout";

import reparation from "../../public/assets/images/services/reparation/reparation.jpg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Services = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const servicesData = {
    service: [
      t.services.vesselService.service1,
      t.services.vesselService.service2,
      t.services.vesselService.service3,
      t.services.vesselService.service4,
    ],
    mechanic: [
      t.services.mechanicService.service1,
      t.services.mechanicService.service2,
      t.services.mechanicService.service3,
    ],
    winter: [
      t.services.winterLog.service1,
      t.services.winterLog.service2,
      t.services.winterLog.service3,
    ],
    interior: [
      t.services.interiorDesign.service1,
      t.services.interiorDesign.service2,
      t.services.interiorDesign.service3,
      t.services.interiorDesign.service4,
    ],
  };
  return (
    <>
      <Head>
        <title>{t.metadata.services.title}</title>
        <meta name="title" content={t.metadata.services.title} />
        <meta name="description" content={t.metadata.services.description} />
        <meta name="keywords" content="usluge plovila" />
        <meta property="og:title" content={t.metadata.services.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.services.description}
        />
      </Head>
      <PageLayout
        pageLayoutImageUrl={reparation}
        pageLayoutHeading={t.common.services}
        pageLayoutHeadingText={t.pages.services.headingText}
      >
        <div className="services">
          <div className="services__single-service">
            <h2 className="services__single-service--heading services__single-service--heading--1">
              {t.services.mechanicService.heading}
            </h2>
            <ul className="services__single-service--list">
              {servicesData["mechanic"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <OvalButton
              ovalButtonLabel={t.buttons.details}
              ovalButtonPath="/usluge/mehanicarske-usluge"
            />
          </div>
          <div className="services__single-service">
            <h2 className="services__single-service--heading services__single-service--heading--2">
              {t.services.vesselService.heading}
            </h2>
            <ul className="services__single-service--list">
              {servicesData["service"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <OvalButton
              ovalButtonLabel={t.buttons.details}
              ovalButtonPath="/usluge/servis-plovila"
            />
          </div>
          <div className="services__single-service">
            <h2 className="services__single-service--heading services__single-service--heading--3">
              {t.services.interiorDesign.heading}
            </h2>
            <ul className="services__single-service--list">
              {servicesData["interior"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <OvalButton
              ovalButtonLabel={t.buttons.details}
              ovalButtonPath="/usluge/izrada-enterijera"
            />
          </div>
          <div className="services__single-service">
            <h2 className="services__single-service--heading services__single-service--heading--4">
              {t.services.winterLog.heading}
            </h2>
            <ul className="services__single-service--list">
              {servicesData["winter"].map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <OvalButton
              ovalButtonLabel={t.buttons.details}
              ovalButtonPath="/usluge/zimovnik"
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Services;
