import Image from "next/image";

const InfoCard=({imageSrc, cardHeading, cardText, cardLink, linkText})=>{

    return      <div className='info-card'>
    <Image src={imageSrc} className='info-card__image'/>
    <h2 className='tertiary-heading'>{cardHeading}</h2>
    <p className="info-card__text">{cardText}</p>
    <a href={cardLink} className="text-link">{linkText}</a>
    </div>;
}

export default InfoCard