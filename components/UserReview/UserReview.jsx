const UserReview = ({
  reviewText = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
  reviewerName = "lorem lorem",
  backgroundImageURL = "",
}) => {
  return (
    <div
      className="user-review"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10,10,10, 0.8), rgba(14,54,89, 0.8)), url(${backgroundImageURL.src})`,
      }}
    >
      <span className="user-review__stars">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      <blockquote className="user-review__text">
        &quot;{reviewText}&quot;
      </blockquote>

      <span className="user-review__name">{reviewerName}</span>
    </div>
  );
};

export default UserReview;
