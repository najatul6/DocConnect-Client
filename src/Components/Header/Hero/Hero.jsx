import Button from "../../Shared/Button/Button"
import bannerImg from "../../../assets/Objects/Group doctor.png"


const Hero = () => {
  return (
    <div className="flex justify-between items-center px-10 min-h-[800px]">
      <div className="flex-1 flex flex-col justify-center items-start gap-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        Your Best Medical <br /> Help Center
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
        Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s standard.
        </p>
        <Button text={"All Service"}/> 
    </div>
    <div className="flex-1">
      <img src={bannerImg} alt="" className="w-full" />
    </div>
    </div>
  )
}

export default Hero