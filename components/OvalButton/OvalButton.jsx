import TranslatedLink from "../TranslatedLink/TranslatedLink";

const OvalButton = ({
  ovalButtonLabel = "Label",
  ovalButtonPath = "/",
  darkMode = false,
  onButtonClick = () => {},
}) => {
  return (
    <TranslatedLink
      href={ovalButtonPath}
      className={darkMode ? "ovalbutton ovalbutton__dark" : "ovalbutton"}
      onClick={onButtonClick}
    >
      {ovalButtonLabel}
    </TranslatedLink>
  );
};

export default OvalButton;
