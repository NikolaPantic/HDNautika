import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Suggestions from "../../components/Suggestions/Suggestions";
import UsedEquipmentComponent from "../../components/UsedEquipmentComponent/UsedEquipmentComponent";
import PageLayout from "../PageLayout/PageLayout";
import { scrollToContact } from "../../data/servicesData";
import en from "../../locales/en";
import sr from "../../locales/sr";

const EquipmentLayout = ({
  isUsedEquipment = false,
  equipmentLayoutBackgroundImage = "",
  equipmentLayoutSubheading = "subheading",
  equipmentLayoutText = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  equipmentLayoutImages = [],
  equipmentLayoutHeading = "heading",
  equipmentLayoutHeadingText = "",
}) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <PageLayout
      pageLayoutImageUrl={equipmentLayoutBackgroundImage}
      pageLayoutHeadingText={equipmentLayoutHeadingText}
      pageLayoutHeading={equipmentLayoutHeading}
    >
      <div className="equipment-layout">
        <h2 className="secondary-heading">{equipmentLayoutSubheading}</h2>
        <div className="equipment-layout--text">
          <p>{equipmentLayoutText}</p>
          <br />
          <p>
            {t.components.equipmentLayout.text1}{" "}
            <Link href="tel:+381641234567" className="text-link">
              {t.components.equipmentLayout.text2}
            </Link>{" "}
            {t.components.equipmentLayout.text3}{" "}
            <Link href="" className="text-link" onClick={scrollToContact}>
              {t.components.equipmentLayout.text4}
            </Link>
            .
          </p>
        </div>

        {isUsedEquipment ? (
          <UsedEquipmentComponent />
        ) : (
          <div className="equipment-layout__images">
            {equipmentLayoutImages.map((e, i) => (
              <Image
                src={e}
                alt={`HD Nautika ${equipmentLayoutSubheading.toLowerCase()}`}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
      <Suggestions />
    </PageLayout>
  );
};

export default EquipmentLayout;
