import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const ContactContent = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-start">
      <h2 className="text-3xl font-bold capitalize">Contact With Us</h2>
      <p className="text-base text-justify">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi.
      </p>
      <div className="flex flex-col gap-3">
        <p className="flex justify-start items-center text-lg font-bold gap-5">
          <FaPhoneVolume />
          +88 01750 14 14 14
        </p>
        <p className="flex justify-start items-center text-lg font-bold gap-5">
          <FaLocationDot />
          Dhanmondi, Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default ContactContent;
