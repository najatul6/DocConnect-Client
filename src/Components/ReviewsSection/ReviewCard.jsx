import { FaQuoteLeft } from "react-icons/fa6";
import avatar from "../../assets/Avatar/profile.png";

const ReviewCard = () => {
  return (
    <div className="p-12 border rounded-xl container">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <img src={avatar} alt="Avatar Profile" className="w-[60px] h-[60px] rounded-full border border-red-500" />
          <div>
            <h4 className="text-xl font-bold">Awlad Hossain</h4>
            <p>Product Designer</p>
          </div>
        </div>
        <FaQuoteLeft  className="text-5xl text-light-coffee"/>
      </div>
      <p className="mt-5">
        Lorem Ipsum has been the industry is standard dummy text ever since the
        1500s, when an unknown printer tool a galley of type and scrambled it to
        make type specimen book has survived not only five centuries.
      </p>
    </div>
  );
};

export default ReviewCard;
