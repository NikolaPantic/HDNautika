import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Newsletter from "../../Newsletter/Newsletter";
import UserReview from "../../UserReview/UserReview";
import sportstar from "../../../public/assets/images/boats/sportstar22/sportstar-background.jpg";
import boat from "../../../public/assets/images/boats/sportstar22/sportstar-12.jpg";
import engine from "../../../public/assets/images/boats/sportstar22/sportstar.jpg";

import en from "../../../locales/en";
import sr from "../../../locales/sr";

const SectionNewsletterReviews = () => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  return (
    <section className="section-newsletter-reviews">
      <div className="section-newsletter-reviews__field">
        <h2 className="tertiary-heading">Newsletter</h2>
        <div className="section-newsletter-reviews__field--content">
          <Newsletter />
        </div>
      </div>
      <div className="section-newsletter-reviews__field">
        <h2 className="tertiary-heading">{t.common.reviews}</h2>
        <div className="section-newsletter-reviews__field--content">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={6000}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
            className="section-newsletter-reviews__carousel"
          >
            <UserReview
              backgroundImageURL={boat}
              reviewerName="Srđan"
              reviewText={t.sections.newsletterReviews.text1}
            />
            <UserReview
              backgroundImageURL={sportstar}
              reviewerName="Petar"
              reviewText={t.sections.newsletterReviews.text2}
            />
            <UserReview
              backgroundImageURL={engine}
              reviewerName="Milan"
              reviewText={t.sections.newsletterReviews.text3}
            />
          </Carousel>
          <div>
            <div className="section-newsletter-reviews__field--content--source">
              {t.common.source}: <span>Google reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNewsletterReviews;
