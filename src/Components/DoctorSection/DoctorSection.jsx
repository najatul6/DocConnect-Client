import { doctorsInfo } from "../../Utils/doctorsInfo";
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
      <div className="grid grid-cols-3 gap-5 my-10">
        {
          doctorsInfo.map(doctor=>{
            return <DoctorCard key={doctor.id} doctor={doctor} />
          })
        }
      </div>
    </div>
  );
};

export default DoctorSection;
