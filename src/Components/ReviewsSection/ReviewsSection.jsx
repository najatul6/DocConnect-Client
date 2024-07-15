import ReviewCard from "./ReviewCard";

const ReviewsSection = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center text-center w-[75%] mx-auto my-5">
        <h1 className="text-3xl font-bold">What Our Patients Says</h1>
        <p className="text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium dolor emque laudanum, totam rem aperiam, eaque ipsa quae
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
