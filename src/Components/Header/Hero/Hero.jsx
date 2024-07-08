import Button from "../../Shared/Button/Button"
import bannerImg from "../../../assets/Objects/Group doctor.png"


const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10  min-h-screen pt-[40%] sm:pt-[15%] md:pt-[20%] pb-10  lg:pt-[10%] gap-5">
      <div className="flex-1 flex flex-col justify-center items-start gap-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
        Your Best Medical <br /> Help Center
        </h2>
        <p className="text-sm sm:text-base md:text-lg">
        Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s standard.
        </p>
        <Button customClass={"bg-light-coffee hover:bg-transparent border-light-coffee border duration-300"} text={"All Service"}/> 
    </div>
    <div className="flex-1">
      <img src={bannerImg} alt="" className="w-full" />
    </div>
    </div>
  )
}

export default Hero