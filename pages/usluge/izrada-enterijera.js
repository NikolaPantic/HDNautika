import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { scrollToContact } from "../../data/servicesData";
import interior from "../../public/assets/images/services/interior/interior.jpg";
import interior1 from "../../public/assets/images/services/interior/interior-1.jpg";
import interior2 from "../../public/assets/images/services/interior/interior-2.jpg";
import interior3 from "../../public/assets/images/services/interior/interior-3.jpg";
import interior4 from "../../public/assets/images/services/interior/interior-4.jpg";
import interior5 from "../../public/assets/images/services/interior/interior-5.jpg";
import interior6 from "../../public/assets/images/services/interior/interior-6.jpg";
import interior7 from "../../public/assets/images/services/interior/interior-7.jpg";
import interior8 from "../../public/assets/images/services/interior/interior-8.jpg";
import interior9 from "../../public/assets/images/services/interior/sportstar-interior.jpg";
import interior10 from "../../public/assets/images/services/interior/sportstar-interior-1.jpg";
import interior11 from "../../public/assets/images/services/interior/sportstar-interior-2.jpg";
import interior12 from "../../public/assets/images/services/interior/sportstar-interior-3.jpg";
import interior13 from "../../public/assets/images/services/interior/sportstar-interior-4.jpg";
import interior14 from "../../public/assets/images/services/interior/sportstar-interior-red.jpg";
import interior15 from "../../public/assets/images/services/interior/sportstar-interior-red-1.jpg";
import interior16 from "../../public/assets/images/services/interior/sportstar-interior-red-2.jpg";
import interior17 from "../../public/assets/images/services/interior/sportstar-interior-red-3.jpg";
import interior18 from "../../public/assets/images/services/interior/sportstar-interior-red-4.jpg";
import interior19 from "../../public/assets/images/services/interior/sportstar-interior-red-5.jpg";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Interior = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  const images = [
    { src: interior.src, alt: "HD Nautika izrada enterijera" },
    { src: interior1.src, alt: "HD Nautika izrada enterijera" },
    { src: interior2.src, alt: "HD Nautika izrada enterijera" },
    { src: interior3.src, alt: "HD Nautika izrada enterijera" },
    { src: interior4.src, alt: "HD Nautika izrada enterijera" },
    { src: interior5.src, alt: "HD Nautika izrada enterijera" },
    { src: interior6.src, alt: "HD Nautika izrada enterijera" },
    { src: interior7.src, alt: "HD Nautika izrada enterijera" },
    { src: interior8.src, alt: "HD Nautika izrada enterijera" },
    { src: interior9.src, alt: "HD Nautika izrada enterijera" },
    { src: interior10.src, alt: "HD Nautika izrada enterijera" },
    { src: interior11.src, alt: "HD Nautika izrada enterijera" },
    { src: interior12.src, alt: "HD Nautika izrada enterijera" },
    { src: interior13.src, alt: "HD Nautika izrada enterijera" },
    { src: interior14.src, alt: "HD Nautika izrada enterijera" },
    { src: interior15.src, alt: "HD Nautika izrada enterijera" },
    { src: interior16.src, alt: "HD Nautika izrada enterijera" },
    { src: interior17.src, alt: "HD Nautika izrada enterijera" },
    { src: interior18.src, alt: "HD Nautika izrada enterijera" },
    { src: interior19.src, alt: "HD Nautika izrada enterijera" },
  ];

  return (
    <>
      <Head>
        <title>{t.metadata.interiorDesign.title}</title>
        <meta name="title" content={t.metadata.interiorDesign.title} />
        <meta
          name="description"
          content={t.metadata.interiorDesign.description}
        />
        <meta name="keywords" content="izrada enterijera" />
        <meta property="og:title" content={t.metadata.interiorDesign.title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={t.metadata.interiorDesign.description}
        />
        <meta property="og:image" content="/assets/images/nautica.jpg" />
      </Head>
      <PageLayout
        pageLayoutImageUrl={interior13}
        pageLayoutHeading={t.services.interiorDesign.heading}
        pageLayoutHeadingText={t.pages.interiorDesign.headingText}
      >
        <div className="service interior">
          <div className="service__content">
            <div className="service__content--info">
              <h2 className="secondary-heading">
                {t.services.interiorDesign.heading}
              </h2>
              <p>{t.pages.interiorDesign.text1}</p>
              <br />
              <p>
                {t.pages.interiorDesign.text2}{" "}
                <Link className="text-link" href="tel:+38169722767">
                  {t.pages.interiorDesign.text3}
                </Link>{" "}
                {t.pages.interiorDesign.text4}{" "}
                <Link href="" className="text-link" onClick={scrollToContact}>
                  {t.pages.interiorDesign.text5}
                </Link>
                .
              </p>
            </div>
            <figure>
              <Image src={interior} alt="HD Nautika enterijer" />
              <figcaption>{t.pages.interiorDesign.figcaption}</figcaption>
            </figure>
          </div>
          <div className="service__carousel">
            <h2 className="secondary-heading">
              {t.pages.interiorDesign.subheading}
            </h2>
            <Carousel
              images={images}
              shouldMaximizeOnClick={true}
              hasMediaButton={false}
              className="carousel"
            />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Interior;
