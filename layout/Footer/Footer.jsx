import Image from "next/image";
import { useRouter } from "next/router";
import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
import FooterSection from "../../components/FooterSection/FooterSection";
import instagram from "../../public/assets/svg/instagram.svg";
import facebook from "../../public/assets/svg/facebook.svg";

import en from "../../locales/en";
import sr from "../../locales/sr";
const Footer = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <footer className="footer">
      <FooterSection footerSectionHeading={t.sections.boats.subheading}>
        <span>HD Nautika</span>
        <span>Stevana Sinđelića 13</span>
        <span>11500, Obrenovac</span>
        <span>{t.common.taxID}: 109714376</span>
        <span>
          {t.common.phone}: <a href="tel:+381637719973">+381 63 7719973</a>
        </span>
        <span>
          E-mail: <a href="mailto:e270@open.telekom.rs">e270@open.telekom.rs</a>
        </span>
      </FooterSection>
      <FooterSection footerSectionHeading={t.common.mainMenu}>
        <TranslatedLink href="/o-nama">{t.common.aboutUs}</TranslatedLink>
        <TranslatedLink href="/plovila">{t.common.boats}</TranslatedLink>
        <TranslatedLink href="/usluge">{t.common.services}</TranslatedLink>
        <TranslatedLink href="/vanbrodski-motori">
          {t.common.outboardEngines}
        </TranslatedLink>

        <TranslatedLink href="/dodatna-oprema">
          {t.common.additionalEquipment}
        </TranslatedLink>
        <TranslatedLink href="/kontakt">{t.common.contact}</TranslatedLink>
      </FooterSection>
      <FooterSection footerSectionHeading={t.common.additionalEquipment}>
        <TranslatedLink href="/dodatna-oprema/propeleri">
          {t.common.propellers}
        </TranslatedLink>
        <TranslatedLink href="/dodatna-oprema/sonari">
          {t.common.sonars}
        </TranslatedLink>
        <TranslatedLink href="/dodatna-oprema/delovi-vanbrodskih-motora">
          {t.common.outboardEngineParts}
        </TranslatedLink>
        <TranslatedLink href="/dodatna-oprema/nauticka-oprema">
          {t.common.nauticalEquipment}
        </TranslatedLink>
        <TranslatedLink href="/dodatna-oprema/polovni-motori">
          {t.common.usedEquipment}
        </TranslatedLink>
      </FooterSection>
      <FooterSection footerSectionHeading={t.common.workingTime}>
        <span>
          {t.common.workingDays}: <time>09:00</time>-<time>17:00</time>
        </span>
        <span>{t.common.nonWorkingDays}</span>

        <FooterSection footerSectionHeading={t.common.social}>
          <div className="footer__social--icons">
            <a
              href="https://www.instagram.com/hd_nautika_/"
              rel="noreferrer"
              target="_blank"
            >
              <Image src={instagram} alt="instagram logo" />
            </a>
            <a
              href="https://www.facebook.com/hd.nautika"
              rel="noreferrer"
              target="_blank"
            >
              <Image src={facebook} alt="facebook logo" />
            </a>
          </div>
        </FooterSection>
      </FooterSection>
    </footer>
  );
};

export default Footer;
