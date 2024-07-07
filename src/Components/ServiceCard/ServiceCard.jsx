import cardImg from '../../assets/banner/teeth.png'
import Button from '../Shared/Button/Button'
const ServiceCard = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 '>
        <div>
        <img src={cardImg} alt="" />
        </div>
        <div className='space-y-5 border grid grid-cols-1 gap-10'>
          <h4>Electro  Gastrology Therapy</h4>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
          </p>
          <p>
          Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <Button text={More Details}/>
          
        </div>
    </div>
  )
}

export default ServiceCard