import { useRouter } from "next/router";

import en from "../../locales/en";
import sr from "../../locales/sr";

const InvalidFieldText = ({ condition = false }) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <span className={condition ? "invalid-field" : "invalid-field__hidden"}>
      {t.common.invalidField}
    </span>
  );
};

export default InvalidFieldText;
