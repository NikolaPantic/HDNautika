/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n,
  async rewrites() {
    return [
      {
        source: "/en/about-us",
        destination: "/en/o-nama",
        locale: false,
      },
      {
        source: "/en/boats",
        destination: "/en/plovila",
        locale: false,
      },
      {
        source: "/en/services",
        destination: "/en/usluge",
        locale: false,
      },
      {
        source: "/en/outboard-engines",
        destination: "/en/vanbrodski-motori",
        locale: false,
      },
      {
        source: "/en/additional-equipment",
        destination: "/en/dodatna-oprema",
        locale: false,
      },
      {
        source: "/en/contact",
        destination: "/en/kontakt",
        locale: false,
      },
      {
        source: "/en/boats/sportstar-22",
        destination: "/en/plovila/sportstar-22",
        locale: false,
      },
      {
        source: "/en/boats/cerion-27,7-wa",
        destination: "/en/plovila/cerion-27,7-wa",
        locale: false,
      },
      {
        source: "/en/boats/eolo-710",
        destination: "/en/plovila/eolo-710",
        locale: false,
      },
      {
        source: "/en/boats/marino-gabry-550",
        destination: "/en/plovila/marino-gabry-550",
        locale: false,
      },
      {
        source: "/en/boats/teorema-20",
        destination: "/en/plovila/teorema-20",
        locale: false,
      },
      {
        source: "/en/services/mechanic-service",
        destination: "/en/usluge/mehanicarske-usluge",
        locale: false,
      },
      {
        source: "/en/services/vessel-service",
        destination: "/en/usluge/servis-plovila",
        locale: false,
      },
      {
        source: "/en/services/interior-design",
        destination: "/en/usluge/izrada-enterijera",
        locale: false,
      },
      {
        source: "/en/services/winter-log",
        destination: "/en/usluge/zimovnik",
        locale: false,
      },
      {
        source: "/en/additional-equipment/propellers",
        destination: "/en/dodatna-oprema/propeleri",
        locale: false,
      },
      {
        source: "/en/additional-equipment/sonars",
        destination: "/en/dodatna-oprema/sonari",
        locale: false,
      },
      {
        source: "/en/additional-equipment/outboard-engine-parts",
        destination: "/en/dodatna-oprema/delovi-vanbrodskih-motora",
        locale: false,
      },
      {
        source: "/en/additional-equipment/nautical-equipment",
        destination: "/en/dodatna-oprema/nauticka-oprema",
        locale: false,
      },
      {
        source: "/en/additional-equipment/used-equipment",
        destination: "/en/dodatna-oprema/polovna-oprema",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
