import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

const OpeningSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-center items-center my-5">
      {/* Opening Hours */}
      <div className="bg-light-green p-10 rounded-xl flex justify-center items-center gap-5 flex-1">
        <LuCalendarClock className="text-3xl font-bold"/>
        <div>
          <h4 className="text-2xl font-bold">Opening Hours</h4>
          <p>Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      {/* Our Locations */}
      <div className="bg-light-coffee p-10 rounded-xl flex justify-center items-center gap-5 flex-1">
        <IoLocationSharp className="text-3xl font-bold"/>
        <div>
          <h4 className="text-2xl font-bold">Our Locations</h4>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      {/* Contact Us */}
      <div className="bg-light-green p-10 rounded-xl flex justify-center items-center gap-5 flex-1">
        <FiPhoneCall className="text-3xl font-bold"/>
        <div>
          <h4 className="text-2xl font-bold">Contact Us</h4>
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
