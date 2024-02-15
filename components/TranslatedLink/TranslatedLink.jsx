import { useRouter } from "next/router";
import Link from "next/link";

const pathTranslations = {
  en: {
    "/o-nama": "/about-us",
    "/plovila": "/boats",
    "/usluge": "/services",
    "/vanbrodski-motori": "/outboard-engines",
    "/vanbrodski-motori/polovni-motori": "/outboard-engines/used-engines",
    "/vanbrodski-motori/novi-motori": "/outboard-engines/new-engines",
    "/dodatna-oprema": "/additional-equipment",
    "/kontakt": "/contact",
    "/plovila/sportstar-22": "/boats/sportstar-22",
    "/plovila/cerion-27,7-wa": "/boats/cerion-27,7-wa",
    "/plovila/skip-sport-19": "/boats/skip-sport-19",
    "/plovila/eolo-710": "/boats/eolo-710",
    "/plovila/marino-gabry-550": "/boats/marino-gabry-550",
    "/plovila/teorema-20": "/boats/teorema-20",
    "/usluge/mehanicarske-usluge": "/services/mechanic-service",
    "/usluge/servis-plovila": "/services/vessel-service",
    "/usluge/izrada-enterijera": "/services/interior-design",
    "/usluge/zimovnik": "/services/winter-log",
    "/vanbrodski-motori/polovni-motori": "/outboard-engines/used-engines",
    "/dodatna-oprema/propeleri": "/additional-equipment/propellers",
    "/dodatna-oprema/sonari": "/additional-equipment/sonars",
    "/dodatna-oprema/delovi-vanbrodskih-motora":
      "/additional-equipment/outboard-engine-parts",
    "/dodatna-oprema/nauticka-oprema":
      "/additional-equipment/nautical-equipment",
  },
};

const TranslatedLink = ({
  href,
  children,
  className = "",
  onClick = () => {},
}) => {
  const { locale } = useRouter();
  const translatedPath = pathTranslations[locale]?.[href];
  const as = translatedPath ? `/${locale}${translatedPath}` : undefined;

  return (
    <Link href={href} as={as} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default TranslatedLink;
