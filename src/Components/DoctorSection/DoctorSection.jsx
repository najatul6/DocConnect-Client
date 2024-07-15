import SectionsHeader from "../Shared/SectionsHeader/SectionsHeader";
import DoctorCard from "./DoctorCard";

const DoctorSection = () => {
  return (
    <div>
      <SectionsHeader
        title={"Our Expert Doctors"}
        subTitle={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      />
      <div>
        <DoctorCard />
      </div>
    </div>
  );
};

export default DoctorSection;
