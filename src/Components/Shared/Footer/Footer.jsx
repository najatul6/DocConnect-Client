import { Link } from "react-router-dom";
import logo from "../../../assets/logo/brandLogo.svg";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <>
      <div className="custom-footer py-20 px-20 flex justify-evenly items-center gap-10 shadow-xl shadow-dark-coffee">
        <div className="flex flex-col justify-start items-start gap-5">
          <Link to="/" className="flex justify-center items-center gap-2">
            <img src={logo} alt="Doc Connect Logo" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="text-light-coffee">Doc</span> Connect
            </p>
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been since the printer took.
          </p>
          <Button
            text={"Appointment"}
            customClass={"border border-light-coffee hover:bg-light-coffee"}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="list-disc pl-5">
            <li>About Us</li>
            <li>Service</li>
            <li>Doctors</li>
            <li>Departments</li>
            <li>Online Payment</li>
            <li>Contact Us</li>
            <li>My Account</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Doc Connect Services</h3>
          <ul className="list-disc pl-5">
            <li>Pediatric Clinic</li>
            <li>Diagnosis Clinic</li>
            <li>Cardiac Clinic</li>
            <li>Laboratory Analysis</li>
            <li>Gynecological Clinic</li>
            <li>Personal Counseling</li>
            <li>Dental Clinic</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Working Hours</h3>
          <ul className="list-disc pl-5">
            <li>Monday - 10 am to 7 pm</li>
            <li>Tuesday - 10 am to 7 pm</li>
            <li>Wednesday - 10 am to 7 pm</li>
            <li>Thursday - 10 am to 7 pm</li>
            <li>Friday - 10 am to 7 pm</li>
            <li>Saturday - 10 am to 7 pm</li>
            <li>Sunday - 10 am to 7 pm</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-md text-white w-full py-3 bg-light-black">
        &copy; Alright Reserved by -{" "}
        <Link
          to="https://www.github.com/najatul6"
          target="_blank"
          className="font-bold underline hover:text-light-coffee text-dark-coffee shadow-inner"
        >
          Najatul islam
        </Link>
      </p>
    </>
  );
};

export default Footer;
