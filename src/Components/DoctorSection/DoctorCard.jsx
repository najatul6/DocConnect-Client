import { CiCalendar } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { name, specialty, reviews, location, status, price, dp } = doctor;
  return (
    <div className="card border">
      <figure className="px-5 pt-5">
        <img src={dp} alt={`${name} profile image`} className="rounded-xl w-full" />
      </figure>
      <div className="card-body space-y-3">
        <div className="flex flex-col justify-center">
          <h2 className="card-title">{name}</h2>
          <p>{specialty}</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p>
            <Rating style={{ maxWidth: 180 }} value={reviews} readOnly />
          </p>
          <p className="flex gap-5 justify-start items-center">
            <IoLocationSharp className="text-xl font-bold" />
            <span>{location}</span>
          </p>
          <p className="flex gap-5 justify-start items-center">
            <CiCalendar className="text-xl font-bold" />
            <span>{status}</span>
          </p>
          <p className="capitalize flex gap-5 justify-start items-center">
            <HiCurrencyDollar />
            <span>{price}</span>
          </p>
        </div>
        <div className="card-actions ">
          <Link to={`${name}`} className="w-full">
          <button className="btn border border-light-coffee text-white bg-transparent hover:bg-light-coffee w-full">View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
