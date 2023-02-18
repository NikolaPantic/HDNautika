import Link from "next/link";

const Button = ({
  buttonPath = "#",
  buttonLabel = "label",
  darkMode = false,
}) => {
  return (
    <Link
      href={buttonPath}
      className={darkMode ? "button button__dark" : "button"}
    >
      {buttonLabel}
    </Link>
  );
};

export default Button;
