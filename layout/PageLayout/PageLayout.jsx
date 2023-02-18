import Form from "../../components/Form/Form";
const PageLayout = ({
  children,
  pageLayoutHeading = "Heading",
  pageLayoutHeadingText = "",
  pageLayoutImageUrl = "",
}) => {
  return (
    <article className="page-layout">
      <div
        className="page-layout__heading"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,10, 0.8), rgba(14,54,89, 0.8)), url(${pageLayoutImageUrl.src})`,
        }}
      >
        <h1 className="primary-heading">{pageLayoutHeading}</h1>
        <p>{pageLayoutHeadingText}</p>
      </div>
      <div className="page-layout__content">{children}</div>

      <Form />
    </article>
  );
};

export default PageLayout;
