import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "../../layout/PageLayout/PageLayout";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { scrollToContact } from "../../data/servicesData";
import serviceImage from "../../public/assets/images/services/reparation/reparation.jpg";

import reparationBlue1 from "../../public/assets/images/services/reparation/reparation-blue-before.jpg";
import reparationBlue2 from "../../public/assets/images/services/reparation/reparation-blue-before-1.jpg";
import reparationBlue3 from "../../public/assets/images/services/reparation/reparation-blue-before-2.jpg";
import reparationBlue4 from "../../public/assets/images/services/reparation/reparation-blue-after.jpg";
import reparationBlue5 from "../../public/assets/images/services/reparation/reparation-blue-after-1.jpg";
import reparationBlue6 from "../../public/assets/images/services/reparation/reparation-blue-after-2.jpg";
import reparationYellow from "../../public/assets/images/services/reparation/reparation-yellow-before.jpg";
import reparationYellow1 from "../../public/assets/images/services/reparation/reparation-yellow-before-1.jpg";
import reparationYellow2 from "../../public/assets/images/services/reparation/reparation-yellow-before-2.jpg";
import reparationYellow3 from "../../public/assets/images/services/reparation/reparation-yellow-before-3.jpg";
import reparationYellow5 from "../../public/assets/images/services/reparation/reparation-yellow-after.jpg";
import reparationYellow6 from "../../public/assets/images/services/reparation/reparation-yellow-after-1.jpg";
import reparationYellow4 from "../../public/assets/images/services/reparation/reparation-yellow-after-2.jpg";
import reparationYellow7 from "../../public/assets/images/services/reparation/reparation-yellow-after-3.jpg";
import reparationYellow8 from "../../public/assets/images/services/reparation/reparation-yellow-after-4.jpg";
import reparationYellow9 from "../../public/assets/images/services/reparation/reparation-yellow-after-5.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Service = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  const images = [
    reparationBlue1,
    reparationBlue2,
    reparationBlue3,
    reparationBlue4,
    reparationBlue5,
    reparationBlue6,
    reparationYellow,
    reparationYellow1,
    reparationYellow2,
    reparationYellow3,
    reparationYellow5,
    reparationYellow6,
    reparationYellow4,
    reparationYellow7,
    reparationYellow8,
    reparationYellow9,
  ];

  return (
    <>
      <Head>
        <title>{t.metadata.vesselService.title}</title>
        <meta name="title" content={t.metadata.vesselService.title} />
        <meta
          name="description"
          content={t.metadata.vesselService.description}
        />
        <meta name="keywords" content="izrada enterijera" />
        <meta property="og:title" content={t.metadata.vesselService.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.vesselService.description}
        />
        <meta property="og:image" content="/assets/images/nautica.jpg" />
      </Head>
      <PageLayout
        pageLayoutImageUrl={reparationBlue4}
        pageLayoutHeading={t.services.vesselService.heading}
        pageLayoutHeadingText={t.pages.vesselService.headingText}
      >
        <div className="service service-vessel">
          <div className="service__content">
            <div className="service__content--info">
              <h2 className="secondary-heading">
                {t.services.vesselService.heading}
              </h2>
              <p>{t.pages.vesselService.text1}</p>
              <br />
              <p>
                {t.pages.vesselService.text2}{" "}
                <Link href="tel:+381637719973" className="text-link">
                  {t.pages.vesselService.text3}{" "}
                </Link>
                {t.pages.vesselService.text4}{" "}
                <Link href="" className="text-link" onClick={scrollToContact}>
                  {t.pages.vesselService.text5}
                </Link>
                .
              </p>
            </div>
            <figure>
              <Image src={serviceImage} alt="HD Nautika servis plovila" />
              <figcaption>{t.pages.vesselService.figcaption}</figcaption>
            </figure>
          </div>
          <div className="service__carousel service-vessel__carousel">
            <h2 className="secondary-heading">
              {t.pages.vesselService.subheading}
            </h2>
            <Carousel
              images={images}
              shouldMaximizeOnClick={true}
              hasMediaButton={false}
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Service;
