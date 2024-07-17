import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

const ContactContent = () => {
  return (
    <div>
      <h2>Contact With Us</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi.
      </p>
      <div>
        <p className="flex justify-start items-center">
          <FaPhoneVolume />
          +88 01750 14 14 14
        </p>
        <p className="flex justify-start items-center">
          <FaLocationDot />
          Dhanmondi, Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};

export default ContactContent;
