import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  return (
    <div>
      <div>
        <h1>What Our Patients Says</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>
        <ReviewCard/>
      </div>
    </div>
  );
};

export default ReviewsSection;
