import Image from "next/image";
import { useRouter } from "next/router";
import OvalButton from "../../OvalButton/OvalButton";
import engine from "../../../public/assets/images/equipment/honda-engines.png";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionEngines = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <section className="section-engines">
      <h2 className="secondary-heading">{t.common.outboardEngines}</h2>
      <div className="section-engines__content">
        <div className="section-engines__content--info">
          <p>{t.sections.engines.text}</p>
          <OvalButton
            darkMode={true}
            ovalButtonLabel={t.buttons.viewAll}
            ovalButtonPath="/vanbrodski-motori"
          />
        </div>
        <figure>
          <Image src={engine} alt="HD Nautika vanbrodski motori" />
        </figure>
      </div>
    </section>
  );
};

export default SectionEngines;
