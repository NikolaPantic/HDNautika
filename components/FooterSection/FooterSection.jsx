const FooterSection = ({ footerSectionHeading = "heading", children }) => {
  return (
    <section className="footer-section">
      <h3 className="footer-section__heading">{footerSectionHeading}</h3>
      <div className="footer-section__content">{children}</div>
    </section>
  );
};

export default FooterSection;
