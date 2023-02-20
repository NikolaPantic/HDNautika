import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import PageLayout from "../layout/PageLayout/PageLayout";
import logo from "../public/assets/svg/logo1.svg";
import phone from "../public/assets/svg/mobile.svg";
import mail from "../public/assets/svg/mail4.svg";
import location from "../public/assets/svg/location.svg";
import sportstarLogo from "../public/assets/images/boats/sportstar22/sportstar-logo.jpg";

import en from "../locales/en";
import sr from "../locales/sr";
const Contact = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <>
      <Head>
        <title>{t.metadata.contact.title}</title>
      </Head>
      <PageLayout
        pageLayoutImageUrl={sportstarLogo}
        pageLayoutHeading={t.common.contact}
        pageLayoutHeadingText={t.pages.contact.headingText}
      >
        <div className="contact">
          <div className="contact__container">
            <h2 className="tertiary-heading">{t.sections.boats.subheading}</h2>
            <div className="contact__container--image">
              {" "}
              <Image src={logo} alt="HD Nautika logo" />
            </div>
            <address className="contact__address">
              <span className="contact__address--row">
                {" "}
                <Image src={location} alt="location" />
                HD Nautika
              </span>
              <span className="contact__address--row">
                Stevana Sinđelića 13
              </span>
              <span className="contact__address--row">11500, Obrenovac</span>
              <span className="contact__address--row">
                {t.common.taxID}: 109714376
              </span>
              <span className="contact__address--row">
                <Image src={phone} alt="phone" />:{" "}
                <Link href="tel:+381637719973">+381 63 7719973</Link>
              </span>
              <span className="contact__address--row">
                <Image src={mail} alt="mail" />:{" "}
                <Link href="mailto:e270@open.telekom.rs">
                  e270@open.telekom.rs
                </Link>
              </span>
            </address>
          </div>
          <div className="contact__container">
            <h2 className="tertiary-heading">{t.pages.contact.subheading2}</h2>
            <a
              href="https://goo.gl/maps/BHz8PYqaAdjY2jBC9"
              className="contact__map"
              rel="noreferrer"
              target="_blank"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5036338780515!2d20.181865815530333!3d44.648060979099824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a15f39941b067%3A0xe5a04be5519ab15!2sHD%20nautika!5e0!3m2!1ssr!2srs!4v1676487020702!5m2!1ssr!2srs"
                // allowfullscreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>{" "}
            </a>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Contact;
