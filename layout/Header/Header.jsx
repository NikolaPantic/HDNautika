import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
import logo from "../../public/assets/images/logo.png";
import downArrow from "../../public/assets/svg/arrow-down-icon.svg";
import serbian from "../../public/assets/svg/serbian.png";
import english from "../../public/assets/svg/english.png";
import instagram from "../../public/assets/svg/instagram.svg";
import facebook from "../../public/assets/svg/facebook.svg";
import sportstar from "../../public/assets/images/boats/sportstar22/sportstar-background-removebg-preview.png";
import skip from "../../public/assets/images/boats/skip-sport-19/skip-sport-sea-3.png";
import teorema from "../../public/assets/images/boats/teorema20/teorema-5-removebg-preview.png";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Header = ({ sticky }) => {
  const [isMobileHeaderMenuOpened, setIsMobileHeaderMenuOpened] =
    useState(false);

  const [
    isMobileHeaderBoatsSubmenuOpened,
    setIsMobileHeaderBoatsSubmenuOpened,
  ] = useState(false);

  const [
    isMobileHeaderEquipmentSubmenuOpened,
    setIsMobileHeaderEquipmentSubmenuOpened,
  ] = useState(false);

  const [
    isMobileHeaderEnginesSubmenuOpened,
    setIsMobileHeaderEnginesSubmenuOpened,
  ] = useState(false);

  const [
    isMobileHeaderMainServicesSubmenuOpened,
    setIsMobileHeaderMainServicesSubmenuOpened,
  ] = useState(false);

  const { locale, push } = useRouter();

  const t = locale === "sr" ? sr : en;

  const setLocale = (l) => {
    push("", null, { locale: l });
  };

  const placeholderFunction = () => {};

  const closeMobileMenu = () => {
    if (isMobileHeaderEquipmentSubmenuOpened) {
      setIsMobileHeaderEquipmentSubmenuOpened(false);
    }
    if (isMobileHeaderEnginesSubmenuOpened) {
      setIsMobileHeaderEnginesSubmenuOpened(false);
    }

    if (isMobileHeaderMainServicesSubmenuOpened) {
      setIsMobileHeaderMainServicesSubmenuOpened(false);
    }

    if (isMobileHeaderBoatsSubmenuOpened) {
      setIsMobileHeaderBoatsSubmenuOpened(false);
    }
    setIsMobileHeaderMenuOpened(false);
  };

  const renderDesktopHeaderNavigation = () => (
    <nav className="header__navigation">
      <TranslatedLink className=" header__navigation--logo" href="/">
        <Image src={logo} alt="HD Nautika logo" />
      </TranslatedLink>

      <ul className="header__navigation--services">
        <li className="header__navigation--service-item">
          <TranslatedLink
            href="/plovila"
            className="header__navigation--service-link"
          >
            {t.common.boats}
          </TranslatedLink>
          <Image src={downArrow} alt="down arrow" />
          <ul
            className="header__navigation--catalog--list header__navigation--boats"
            style={{ top: sticky ? "12vh" : "10vh" }}
          >
            <li className="header__navigation--catalog--list-item main-boat">
              <TranslatedLink
                href="/plovila/sportstar-22"
                className="header__navigation--catalog--item-link"
              >
                <Image src={sportstar} alt="Sportstar 22" />
                <div>SPORTSTAR 22</div>
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item other-boats">
              <TranslatedLink
                href="/plovila/skip-sport-19"
                className="header__navigation--catalog--item-link"
              >
                <Image src={skip} alt="SKIP sport 19" />
                <div>Skip sport 19</div>
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item other-boats">
              <TranslatedLink
                href="/plovila/teorema-20"
                className="header__navigation--catalog--item-link"
              >
                <Image src={teorema} alt="down arrow" />
                <div>Teorema 20</div>
              </TranslatedLink>
            </li>
          </ul>
        </li>
        <li className="header__navigation--service-item">
          <TranslatedLink
            href="/usluge"
            className="header__navigation--service-link"
          >
            {t.common.services}
          </TranslatedLink>
          <Image src={downArrow} alt="down arrow" />
          <ul
            className="header__navigation--catalog--list "
            style={{ top: sticky ? "12vh" : "10vh" }}
          >
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/usluge/mehanicarske-usluge"
                className="header__navigation--catalog--item-link"
              >
                {t.services.mechanicService.heading}
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/usluge/servis-plovila"
                className="header__navigation--catalog--item-link"
              >
                {t.services.vesselService.heading}
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/usluge/izrada-enterijera"
                className="header__navigation--catalog--item-link"
              >
                {t.services.interiorDesign.heading}
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/usluge/zimovnik"
                className="header__navigation--catalog--item-link"
              >
                {t.services.winterLog.heading}
              </TranslatedLink>
            </li>
          </ul>
        </li>
        <li className="header__navigation--service-item header__navigation--catalog">
          <TranslatedLink
            href="/vanbrodski-motori"
            className="header__navigation--service-link"
          >
            {t.common.outboardEngines}
          </TranslatedLink>
          <Image src={downArrow} alt="down arrow" />
          <ul
            className="header__navigation--catalog--list"
            style={{ top: sticky ? "12vh" : "10vh" }}
          >
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/vanbrodski-motori/novi-motori"
                className="header__navigation--catalog--item-link"
              >
                {t.common.newOutboardEngines}
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/vanbrodski-motori/polovni-motori"
                className="header__navigation--catalog--item-link"
              >
                {t.common.usedOutboardEngines}
              </TranslatedLink>
            </li>
          </ul>
        </li>
        <li className="header__navigation--service-item header__navigation--catalog">
          <TranslatedLink
            href="/dodatna-oprema"
            className="header__navigation--service-link"
          >
            {t.common.additionalEquipment}
          </TranslatedLink>
          <Image src={downArrow} alt="down arrow" />
          <ul
            className="header__navigation--catalog--list"
            style={{ top: sticky ? "12vh" : "10vh" }}
          >
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/dodatna-oprema/propeleri"
                className="header__navigation--catalog--item-link"
              >
                {t.common.propellers}
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/dodatna-oprema/sonari"
                className="header__navigation--catalog--item-link"
              >
                {t.common.sonars}
              </TranslatedLink>
            </li>

            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/dodatna-oprema/delovi-vanbrodskih-motora"
                className="header__navigation--catalog--item-link"
              >
                {t.common.outboardEngineParts}
              </TranslatedLink>
            </li>
            <li className="header__navigation--catalog--list-item">
              <TranslatedLink
                href="/dodatna-oprema/nauticka-oprema"
                className="header__navigation--catalog--item-link"
              >
                {t.common.nauticalEquipment}
              </TranslatedLink>
            </li>
          </ul>
        </li>
        <li className="header__navigation--service-item">
          <TranslatedLink
            href="/o-nama"
            className="header__navigation--service-link"
          >
            {t.common.aboutUs}
          </TranslatedLink>
        </li>
        <li className="header__navigation--service-item">
          <TranslatedLink
            href="/kontakt"
            className="header__navigation--service-link"
          >
            {t.common.contact}
          </TranslatedLink>
        </li>
      </ul>

      <div className="header__navigation--social">
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

      <div
        className="header__navigation--language"
        style={{ border: sticky ? "" : "none" }}
      >
        <button onClick={() => setLocale("sr")}>
          <Image src={serbian} alt="Srpska zastava" />
        </button>
        <button onClick={() => setLocale("en")}>
          <Image src={english} alt="Zastava Velike Britanije" />
        </button>
      </div>
    </nav>
  );

  const renderMobileHeaderNavigation = () => (
    <nav className="header__mobile-navigation">
      <TranslatedLink
        className=" header__mobile-navigation--logo"
        href="/"
        onClick={closeMobileMenu}
      >
        <Image src={logo} alt="HD Nautika logo" />
      </TranslatedLink>
      <div className="header__hamburger-menu">
        <input
          id="menu-toggle"
          type="checkbox"
          checked={isMobileHeaderMenuOpened}
          onChange={placeholderFunction}
        />
        <label
          className="header__hamburger-menu--button"
          htmlFor="menu-toggle"
          onClick={() => {
            setIsMobileHeaderMenuOpened(!isMobileHeaderMenuOpened);
            if (isMobileHeaderMenuOpened) closeMobileMenu();
          }}
        >
          <span></span>
        </label>

        <ul className="header__mobile-navigation--list">
          <li>
            <div className="header__navigation--language header__mobile-navigation--language">
              <button onClick={() => setLocale("sr")}>
                <Image src={serbian} alt="Srpska zastava" />
              </button>
              <button onClick={() => setLocale("en")}>
                <Image src={english} alt="Zastava Velike Britanije" />
              </button>
            </div>
          </li>
          <li>
            <TranslatedLink onClick={closeMobileMenu} href="/plovila">
              {t.common.boats}
            </TranslatedLink>
            <input
              onChange={placeholderFunction}
              type="checkbox"
              id="boats"
              checked={
                isMobileHeaderMenuOpened
                  ? isMobileHeaderBoatsSubmenuOpened
                    ? true
                    : false
                  : false
              }
            />
            <label
              htmlFor="boats"
              onClick={() =>
                setIsMobileHeaderBoatsSubmenuOpened(
                  !isMobileHeaderBoatsSubmenuOpened
                )
              }
            >
              <Image src={downArrow} alt="arrow" className="down-arrow" />
            </label>
            <ul
              className={
                isMobileHeaderBoatsSubmenuOpened
                  ? "submenu submenu--opened boats-submenu"
                  : "submenu"
              }
            >
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/plovila/sportstar-22"
                >
                  Sportstar 22
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/plovila/skip-sport-19"
                >
                  SKIP sport 19
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/plovila/teorema-20"
                >
                  Teorema 20
                </TranslatedLink>
              </li>
            </ul>
          </li>
          <li>
            <TranslatedLink onClick={closeMobileMenu} href="/usluge">
              {t.common.services}
            </TranslatedLink>
            <input
              onChange={placeholderFunction}
              type="checkbox"
              id="main-services"
              checked={
                isMobileHeaderMenuOpened
                  ? isMobileHeaderMainServicesSubmenuOpened
                    ? true
                    : false
                  : false
              }
            />
            <label
              htmlFor="main-services"
              onClick={() =>
                setIsMobileHeaderMainServicesSubmenuOpened(
                  !isMobileHeaderMainServicesSubmenuOpened
                )
              }
            >
              <Image src={downArrow} alt="arrow" className="down-arrow" />
            </label>
            <ul
              className={
                isMobileHeaderMainServicesSubmenuOpened
                  ? "submenu submenu--opened services-submenu"
                  : "submenu"
              }
            >
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/usluge/mehanicarske-usluge"
                >
                  {t.services.mechanicService.heading}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/usluge/servis-plovila"
                >
                  {t.services.vesselService.heading}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/usluge/izrada-enterijera"
                >
                  {t.services.interiorDesign.heading}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/usluge/zimovnik"
                >
                  {t.services.winterLog.heading}
                </TranslatedLink>
              </li>
            </ul>
          </li>
          <li>
            <TranslatedLink onClick={closeMobileMenu} href="/vanbrodski-motori">
              {t.common.outboardEngines}
            </TranslatedLink>
            <input
              onChange={placeholderFunction}
              type="checkbox"
              id="engines"
              checked={
                isMobileHeaderMenuOpened
                  ? isMobileHeaderEnginesSubmenuOpened
                    ? true
                    : false
                  : false
              }
            />
            <label
              htmlFor="engines"
              onClick={() =>
                setIsMobileHeaderEnginesSubmenuOpened(
                  !isMobileHeaderEnginesSubmenuOpened
                )
              }
            >
              <Image src={downArrow} alt="arrow" className="down-arrow" />
            </label>
            <ul
              className={
                isMobileHeaderEnginesSubmenuOpened
                  ? "submenu submenu--opened engines-submenu"
                  : "submenu"
              }
            >
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/vanbrodski-motori/novi-motori"
                >
                  {t.common.newOutboardEngines}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/vanbrodski-motori/polovni-motori"
                >
                  {t.common.usedOutboardEngines}
                </TranslatedLink>
              </li>
            </ul>
          </li>
          <li>
            <TranslatedLink onClick={closeMobileMenu} href="/dodatna-oprema">
              {t.common.additionalEquipment}
            </TranslatedLink>
            <input
              onChange={placeholderFunction}
              type="checkbox"
              id="services"
              checked={
                isMobileHeaderMenuOpened
                  ? isMobileHeaderEquipmentSubmenuOpened
                    ? true
                    : false
                  : false
              }
            />
            <label
              htmlFor="services"
              onClick={() =>
                setIsMobileHeaderEquipmentSubmenuOpened(
                  !isMobileHeaderEquipmentSubmenuOpened
                )
              }
            >
              <Image src={downArrow} alt="arrow" className="down-arrow" />
            </label>
            <ul
              className={
                isMobileHeaderEquipmentSubmenuOpened
                  ? "submenu submenu--opened additional-equipment-submenu"
                  : "submenu"
              }
            >
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/dodatna-oprema/propeleri"
                >
                  {t.common.propellers}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/dodatna-oprema/sonari"
                >
                  {t.common.sonars}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/dodatna-oprema/delovi-vanbrodskih-motora"
                >
                  {t.common.outboardEngineParts}
                </TranslatedLink>
              </li>
              <li>
                <TranslatedLink
                  onClick={closeMobileMenu}
                  href="/dodatna-oprema/nauticka-oprema"
                >
                  {t.common.nauticalEquipment}
                </TranslatedLink>
              </li>
            </ul>
          </li>
          <li>
            <TranslatedLink onClick={closeMobileMenu} href="/o-nama">
              {t.common.aboutUs}
            </TranslatedLink>
          </li>
          <li>
            <TranslatedLink onClick={closeMobileMenu} href="/kontakt">
              {t.common.contact}
            </TranslatedLink>
          </li>
          <li>
            <div className="header__navigation--social header__mobile-navigation--social">
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
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <header
      className="header"
      style={{
        backgroundColor: sticky ? "#0e3659" : "transparent",
        height: sticky ? "12vh" : "15vh",
      }}
    >
      {renderDesktopHeaderNavigation()}
      {renderMobileHeaderNavigation()}
    </header>
  );
};

export default Header;
