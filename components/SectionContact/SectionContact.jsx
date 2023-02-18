import { useRouter } from "next/router";

import Form from "../Form/Form";

import en from "../../locales/en";
import sr from "../../locales/sr";

const SectionContact = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <section className="section-contact">
      <h2 className="secondary-heading">{t.common.contactForm}</h2>
      <Form />
    </section>
  );
};

export default SectionContact;
