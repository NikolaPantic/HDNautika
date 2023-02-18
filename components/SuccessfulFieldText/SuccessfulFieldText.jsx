import { useRouter } from "next/router";

import en from "../../locales/en";
import sr from "../../locales/sr";

const SuccessfulFieldText = ({ condition = false }) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;
  return (
    <span
      className={condition ? "successful-field" : "successful-field__hidden"}
    >
      {t.common.successfulField}
    </span>
  );
};

export default SuccessfulFieldText;
