import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import TranslatedLink from "../../components/TranslatedLink/TranslatedLink";
import logo from "../../public/assets/svg/logo1.svg";
import downArrow from "../../public/assets/svg/arrow-down-icon.svg";
import serbian from "../../public/assets/svg/serbian.png";
import english from "../../public/assets/svg/english.png";
import instagram from "../../public/assets/svg/instagram.svg";
import facebook from "../../public/assets/svg/facebook.svg";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Header = ({ sticky }) => {
  const [isMobileHeaderMenuOpened, setIsMobileHeaderMenuOpened] =
    useState(false);
  const [isMobileHeaderSubmenuOpened, setIsMobileHeaderSubmenuOpened] =
    useState(false);

  const { locale, push } = useRouter();

  const t = locale === "sr" ? sr : en;

  const setLocale = (l) => {
    push("", null, { locale: l });
  };

  const closeMobileMenu = () => {
    if (isMobileHeaderSubmenuOpened) {
      setIsMobileHeaderSubmenuOpened(false);
    }
    setIsMobileHeaderMenuOpened(false);
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: sticky ? "#0e3659" : "transparent",
        height: sticky ? "12vh" : "15vh",
      }}
    >
      <nav className="header__navigation">
        <TranslatedLink className=" header__navigation--logo" href="/">
          <Image src={logo} alt="HD Nautika logo" />
        </TranslatedLink>

        <ul className="header__navigation--services">
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
              href="/plovila"
              className="header__navigation--service-link"
            >
              {t.common.boats}
            </TranslatedLink>
          </li>
          <li className="header__navigation--service-item">
            <TranslatedLink
              href="/usluge"
              className="header__navigation--service-link"
            >
              {t.common.services}
            </TranslatedLink>
          </li>
          <li className="header__navigation--service-item">
            <TranslatedLink
              href="/vanbrodski-motori"
              className="header__navigation--service-link"
            >
              {t.common.outboardEngines}
            </TranslatedLink>
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
              <li className="header__navigation--catalog--list-item">
                <TranslatedLink
                  href="/dodatna-oprema/polovna-oprema"
                  className="header__navigation--catalog--item-link"
                >
                  {t.common.usedEquipment}
                </TranslatedLink>
              </li>
            </ul>
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
            onChange={() => {}}
          />
          <label
            className="header__hamburger-menu--button"
            htmlFor="menu-toggle"
            onClick={() =>
              setIsMobileHeaderMenuOpened(!isMobileHeaderMenuOpened)
            }
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
              <TranslatedLink onClick={closeMobileMenu} href="/o-nama">
                {t.common.aboutUs}
              </TranslatedLink>
            </li>
            <li>
              <TranslatedLink onClick={closeMobileMenu} href="/plovila">
                {t.common.boats}
              </TranslatedLink>
            </li>
            <li>
              <TranslatedLink onClick={closeMobileMenu} href="/usluge">
                {t.common.services}
              </TranslatedLink>
            </li>
            <li>
              <TranslatedLink
                onClick={closeMobileMenu}
                href="/vanbrodski-motori"
              >
                {t.common.outboardEngines}
              </TranslatedLink>
            </li>
            <li className="header__mobile-navigation--list--services">
              <TranslatedLink onClick={closeMobileMenu} href="/dodatna-oprema">
                {t.common.additionalEquipment}
              </TranslatedLink>
              <input
                onChange={() => {}}
                type="checkbox"
                id="services"
                checked={
                  isMobileHeaderMenuOpened
                    ? isMobileHeaderSubmenuOpened
                      ? true
                      : false
                    : false
                }
              />
              <label
                htmlFor="services"
                onClick={() =>
                  setIsMobileHeaderSubmenuOpened(!isMobileHeaderSubmenuOpened)
                }
              >
                <Image src={downArrow} alt="arrow" />
              </label>
              <ul className="header__mobile-navigation--services-list">
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
                <li>
                  <TranslatedLink
                    onClick={closeMobileMenu}
                    href="/dodatna-oprema/polovna-oprema"
                  >
                    {t.common.usedEquipment}
                  </TranslatedLink>
                </li>
              </ul>
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
    </header>
  );
};

export default Header;