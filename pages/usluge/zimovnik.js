import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { scrollToContact } from "../../data/servicesData";
import winter from "../../public/assets/images/services/winter/winter.jpg";
import winter1 from "../../public/assets/images/services/winter/winter-1.jpg";
import winter2 from "../../public/assets/images/services/winter/winter-2.jpg";
import winter3 from "../../public/assets/images/services/reparation/reparation-blue-after.jpg";
import winterDrive from "../../public/assets/images/services/winter/winter-drive.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Winter = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <>
      <Head>
        <title>{t.metadata.winterLog.title}</title>
        <meta name="title" content={t.metadata.winterLog.title} />
        <meta name="description" content={t.metadata.winterLog.description} />
        <meta name="keywords" content="zimovnik plovila" />
        <meta property="og:title" content={t.metadata.winterLog.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.winterLog.description}
        />
        <meta property="og:image" content="/assets/images/nautica.jpg" />
      </Head>
      <PageLayout
        pageLayoutImageUrl={winterDrive}
        pageLayoutHeading={t.services.winterLog.heading}
        pageLayoutHeadingText={t.pages.winterLog.headingText}
      >
        <div className="service winter">
          <div className="service__content">
            <div className="service__content--info winter--info">
              <h2 className="secondary-heading">
                {t.services.winterLog.heading}
              </h2>
              <p>{t.pages.winterLog.text1}</p>
              <br />
              <p>
                {t.pages.winterLog.text2}{" "}
                <Link className="text-link" href="tel:+38169722767">
                  {t.pages.winterLog.text3}
                </Link>{" "}
                {t.pages.winterLog.text4}{" "}
                <Link className="text-link" href="" onClick={scrollToContact}>
                  {t.pages.winterLog.text5}
                </Link>
                .
              </p>
            </div>
            <figure className="winter__figure">
              <Image src={winterDrive} alt="HD Nautika zimovnik" />
              <figcaption>{t.pages.winterLog.figcaption}</figcaption>
            </figure>
          </div>
          <div className="mechanic-service__images">
            <Image src={winter} alt="HD Nautika zimovnik" />
            <Image src={winter2} alt="HD Nautika zimovnik" />
            <Image src={winter1} alt="HD Nautika zimovnik" />
            <Image src={winter3} alt="HD Nautika zimovnik" />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Winter;
