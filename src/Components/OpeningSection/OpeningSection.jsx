import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

const OpeningSection = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center my-5">
      {/* Opening Hours */}
      <div>
        <LuCalendarClock />
        <div>
          <h4>Opening Hours</h4>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      {/* Our Locations */}
      <div>
        <IoLocationSharp />
        <div>
          <h4>Our Locations</h4>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      {/* Contact Us */}
      <div>
        <FiPhoneCall />
        <div>
          <h4>Contact Us</h4>
          <div>
            <p>+88 01750 00 00 00 </p>
            <p>+88 01750 00 00 00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
