import { FaQuoteLeft } from "react-icons/fa6"
import avatar from '../../assets/Avatar/profile.png'

const ReviewCard = () => {
  return (
    <div>
       <div>
       <div>
       <img src={avatar} alt="Profile Image" />
        <div>
            <h4>Awlad Hossain</h4>
            <p>Product Designer</p>
        </div>
       </div>
       <FaQuoteLeft />
       </div>
        <p>
        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer tool a galley of type and scrambled it to make type specimen book has survived not only five centuries.
        </p>
    </div>
  )
}

export default ReviewCard