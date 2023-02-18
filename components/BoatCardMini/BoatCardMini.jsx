import Image from "next/image";

const BoatCardMini = ({
  boatCardMiniImageURL,
  BoatCardMiniDescription = "Sportstar 22",
  onCardClick = () => {},
}) => {
  return (
    <button onClick={onCardClick} className="boat-card-mini" href="/">
      <Image src={boatCardMiniImageURL} alt={BoatCardMiniDescription} />
      <span className="boat-card-mini__description">
        {BoatCardMiniDescription}
      </span>
    </button>
  );
};

export default BoatCardMini;
