import Image from "next/image";
const UsedEquipmentCard = ({
  onCardClick = () => {},
  usedEquipmentCardImageURL = "",
  usedEquipmentCardLabel = "Label",
}) => {
  return (
    <div className="used-equipment-card" onClick={onCardClick}>
      <Image src={usedEquipmentCardImageURL} alt={usedEquipmentCardLabel} />
      <span>{usedEquipmentCardLabel}</span>
    </div>
  );
};

export default UsedEquipmentCard;
