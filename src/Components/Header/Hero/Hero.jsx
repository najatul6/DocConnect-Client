import Button from "../../Shared/Button/Button"
import bannerImg from "../../../assets/Objects/Group doctor.png"


const Hero = () => {
  return (
    <div className="flex justify-between items-center px-5 border min-h-[800px]">
      <div className="">
        <h2>
        Your Best Medical Help Center
        </h2>
        <p>
        Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s standard.
        </p>
        <Button/> 
    </div>
    <div>
      <img src={bannerImg} alt="" />
    </div>
    </div>
  )
}

export default Hero