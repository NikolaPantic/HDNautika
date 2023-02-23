import { useState } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import SuccessfulFieldText from "../SuccessfulFieldText/SuccessfulFieldText";
import InvalidFieldText from "../InvalidFieldText/InvalidFieldText";
import en from "../../locales/en";
import sr from "../../locales/sr";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [successfulEmail, setSuccessfulEmail] = useState(false);

  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,4}/;

  const sendEmail = () => {
    emailjs
      .sendForm(
        "contact_service",
        "newsletter_template",
        "#newsletter-form",
        "yRSlAyjSNYF9CjZxT"
      )
      .then(() => setSuccessfulEmail(true))
      .catch(() => {
        setInvalidEmail(true);
      });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      id="newsletter-form"
      className="newsletter"
    >
      <div className="newsletter__email-field">
        <label htmlFor="newsletter-email">
          {t.sections.newsletterReviews.text4}
        </label>
        <input
          className={invalidEmail ? "invalid" : ""}
          type="text"
          name="newsletter-email"
          id="newsletter-email"
          placeholder={t.placeholders.email}
          autoComplete="off"
          onChange={(e) => {
            if (invalidEmail) {
              setInvalidEmail(false);
            }
            setSuccessfulEmail(false);
            setEmail(e.target.value);
          }}
        />
        <InvalidFieldText condition={invalidEmail} />
      </div>
      <button
        type="submit"
        onClick={() => {
          if (email.match(emailRegex)) {
            if (invalidEmail) {
              setInvalidEmail(false);
            }
            {
              sendEmail();
            }
          } else {
            setSuccessfulEmail(false);
            setInvalidEmail(true);
          }
        }}
        className="newsletter__button"
      >
        {t.buttons.signUp}
      </button>
      <SuccessfulFieldText condition={successfulEmail} />
    </form>
  );
};

export default Newsletter;
