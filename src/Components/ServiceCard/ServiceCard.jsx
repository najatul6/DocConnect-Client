import cardImg from '../../assets/banner/teeth.png'
import Button from '../Shared/Button/Button'
const ServiceCard = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 '>
        <div>
        <img src={cardImg} alt="Product Images" />
        </div>
        <div className='mt-7 flex flex-col gap-4'>
          <h4 className='text-3xl font-semibold'>Electro  Gastrology Therapy</h4>
          <div className='space-y-4'>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
          </p>
          <p>
          Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          </div>
          <div>
          <Button customClass={"border border-light-coffee hover:bg-light-coffee"} text={"More Details"}/>
          </div>
        </div>
    </div>
  )
}

export default ServiceCard