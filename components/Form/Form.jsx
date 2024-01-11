import { useState } from "react";
import { useRouter } from "next/router";
import DOMPurify from 'dompurify';
import emailjs from "@emailjs/browser";
import InvalidFieldText from "../InvalidFieldText/InvalidFieldText";
import SuccessfulFieldText from "../SuccessfulFieldText/SuccessfulFieldText";

import en from "../../locales/en";
import sr from "../../locales/sr";

const Form = () => {
  const [firstName, setFirstName] = useState({ value: "", invalid: false });
  const [lastName, setLastName] = useState({ value: "", invalid: false });
  const [phone, setPhone] = useState({ value: "", invalid: false });
  const [email, setEmail] = useState({ value: "", invalid: false });
  const [message, setMessage] = useState({ value: "", invalid: false });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const onlyLettersAndSpaces = (string) => {
    return /^[A-Za-z\s]*$/.test(string);
  };

  const phoneValidation = (phone) => {
    return /[0-9]{9,13}/.test(phone);
  };

  const emailValidation = (email) => {
    return /[\.a-z0-9]+@[a-z]+\.[a-z]{2,4}/.test(email);
  };

  const sendEmail = () => {
    if (
      firstName.value !== "" &&
      lastName.value !== "" &&
      onlyLettersAndSpaces(firstName.value) &&
      onlyLettersAndSpaces(lastName.value) &&
      phoneValidation(phone.value) &&
      emailValidation(email.value) &&
      message.value !== ""
    ) {
      setFirstName((prevState) => ({ ...prevState, ["invalid"]: false }));
      setLastName((prevState) => ({ ...prevState, ["invalid"]: false }));
      setEmail((prevState) => ({ ...prevState, ["invalid"]: false }));
      setPhone((prevState) => ({ ...prevState, ["invalid"]: false }));
      setMessage((prevState) => ({ ...prevState, ["invalid"]: false }));

      emailjs
        .sendForm(
          "contact_service",
          "template_1c8aw4g",
          "#form",
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setIsEmailSent(true);
        })
        .catch();
    }
    if (!onlyLettersAndSpaces(firstName.value) || firstName.value === "") {
      setFirstName((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!onlyLettersAndSpaces(lastName.value) || lastName.value === "") {
      setLastName((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!phoneValidation(phone.value)) {
      setPhone((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (!emailValidation(email.value)) {
      setEmail((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
    if (message.value == "") {
      setMessage((prevState) => ({ ...prevState, ["invalid"]: true }));
    }
  };

  return (
    <form
      id="form"
      className="form"
      autoComplete="off"
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="tertiary-heading">{t.form.heading}</h3>
      <div className="form__fields">
        <div className="form__field">
          <label className="form__field--label" htmlFor="first-name">
            {t.form.firstName}: <span>*</span>
          </label>
          <input
            autoComplete="off"
            type="text"
            name="first-name"
            id="first-name"
            className={
              firstName.invalid
                ? "form__field--input invalid"
                : "form__field--input"
            }
            placeholder={t.placeholders.firstName}
            onChange={(e) => {
              if (firstName.invalid) {
                setFirstName((prevState) => ({
                  ...prevState,
                  ["invalid"]: false,
                }));
              }
              const sanitizedValue = DOMPurify.sanitize(e.target.value.trim());

              setFirstName((prevState) => ({
                ...prevState,
                ["value"]: sanitizedValue,
              }));
            }}
          />
          <InvalidFieldText condition={firstName.invalid} />
        </div>
        <div className="form__field">
          <label className="form__field--label" htmlFor="last-name">
            {t.form.lastName}: <span>*</span>
          </label>
          <input
            autoComplete="off"
            type="text"
            name="last-name"
            id="last-name"
            className={
              lastName.invalid
                ? "form__field--input invalid"
                : "form__field--input"
            }
            placeholder={t.placeholders.lastName}
            onChange={(e) => {
              if (lastName.invalid) {
                setLastName((prevState) => ({
                  ...prevState,
                  ["invalid"]: false,
                }));
              }

              const sanitizedValue = DOMPurify.sanitize(e.target.value.trim());
              setLastName((prevState) => ({
                ...prevState,
                ["value"]: sanitizedValue,
              }));
            }}
          />
          <InvalidFieldText condition={lastName.invalid} />
        </div>
        <div className="form__field">
          <label className="form__field--label" htmlFor="email">
            {t.form.email}: <span>*</span>
          </label>
          <input
            autoComplete="off"
            type="text"
            name="email"
            id="email"
            className={
              email.invalid
                ? "form__field--input invalid"
                : "form__field--input"
            }
            placeholder={t.placeholders.email}
            onChange={(e) => {
              if (email.invalid) {
                setEmail((prevState) => ({
                  ...prevState,
                  ["invalid"]: false,
                }));
              }
              const sanitizedValue = DOMPurify.sanitize(e.target.value.trim());
              setEmail((prevState) => ({
                ...prevState,
                ["value"]: sanitizedValue,
              }));
            }}
          />
          <InvalidFieldText condition={email.invalid} />
        </div>
        <div className="form__field">
          <label className="form__field--label" htmlFor="phone-number">
            {t.form.phone}: <span>*</span>
          </label>
          <input
            autoComplete="off"
            type="tel"
            name="phone-number"
            id="phone-number"
            className={
              phone.invalid
                ? "form__field--input invalid"
                : "form__field--input"
            }
            placeholder={t.placeholders.phone}
            onChange={(e) => {
              if (phone.invalid) {
                setPhone((prevState) => ({
                  ...prevState,
                  ["invalid"]: false,
                }));
              }
              const sanitizedValue = DOMPurify.sanitize(e.target.value.trim());
              setPhone((prevState) => ({
                ...prevState,
                ["value"]: sanitizedValue,
              }));
            }}
          />
          <InvalidFieldText condition={phone.invalid} />
        </div>
        <div className="form__field form__field--wide">
          <label htmlFor="message">
            {t.form.message}: <span>*</span>
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={t.placeholders.message}
            onChange={(e) => {
              if (message.invalid) {
                setMessage((prevState) => ({
                  ...prevState,
                  ["invalid"]: false,
                }));
              }
              const sanitizedValue = DOMPurify.sanitize(e.target.value.trim());
              setMessage((prevState) => ({
                ...prevState,
                ["value"]: sanitizedValue,
              }));
            }}
            className={message.invalid ? "invalid" : ""}
          />

          <InvalidFieldText condition={message.invalid} />
        </div>
      </div>

      <button className="ovalbutton ovalbutton__dark" onClick={sendEmail}>
        {t.buttons.sendRequest}
      </button>
      <SuccessfulFieldText condition={isEmailSent} />
    </form>
  );
};

export default Form;
