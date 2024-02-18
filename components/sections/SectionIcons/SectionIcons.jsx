import { useRouter } from "next/router";

import InfoCard from '../../InfoCard/InfoCard.jsx'
import anchor from '../../../public/assets/svg/anchor.svg'
import boat from '../../../public/assets/svg/boat.svg'
import document from '../../../public/assets/svg/document.svg'

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionIcons = () => {
    const { locale } = useRouter();
    const t = locale === "sr" ? sr : en;

    const infoCardsData=[
        {
            imageSrc:anchor,
            cardHeading:t.common.yearsOfTrust,
            cardText:t.common.weWereFounded2006,
            cardLink:"/o-nama'",
            linkText:t.common.moreAboutUs},
        {
            imageSrc:boat,
            cardHeading:t.common.vesselOnCredit,
            cardText:t.common.possibilityOfBuyingVesselsOnCredit,
            cardLink:"#form",
            linkText:t.common.sendInquiry},
        {
            imageSrc:document,
            cardHeading:t.common.writtenWarranty,
            cardText:t.common.writtenWarantyOnOutboardEngines,
            cardLink:"/vanbrodski-motori/polovni-motori",
            linkText:t.common.usedOutboardEngines},
        ]

    return <div className="section-icons">
       
       {infoCardsData.map(singleCard=> <InfoCard
            imageSrc={singleCard.imageSrc}
            cardHeading={singleCard.cardHeading}
            cardText={singleCard.cardText}
            cardLink={singleCard.cardLink}
            linkText={singleCard.linkText}
            key={singleCard.cardHeading}
             />
             )}

    </div>
}


export default SectionIcons