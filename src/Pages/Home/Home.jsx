import serviceImg from "../../assets/banner/female Doctor.png";
import ContactWithUs from "../../Components/ContactWithUs/ContactWithUs";
import DoctorSection from "../../Components/DoctorSection/DoctorSection";
import Hero from "../../Components/Header/Hero/Hero";
import OpeningSection from "../../Components/OpeningSection/OpeningSection";
import OurService from "../../Components/OurService/OurService";
import ReviewsSection from "../../Components/ReviewsSection/ReviewsSection";

const Home = () => {
  return (
    <div className="mx-auto">
      {/* Hero Section  */}
      <div className="bg-hero-pattern h-auto lg:min-h-screen lg:bg-cover w-full">
        <Hero />
      </div>

      {/* Service Section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-5">
        <div className="p-5">
          <img src={serviceImg} alt="" className="w-full lg:w-3/4 mx-auto" />
        </div>
        <div className="p-5">
          <OurService />
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Opening Details Section  */}
        <OpeningSection />

        {/* Reviews Section  */}
        <ReviewsSection />

        {/* Doctor Section  */}
        <DoctorSection />

        {/* Contact With Us Section  */}
        <ContactWithUs />
      </div>

    </div>
  );
};

export default Home;
