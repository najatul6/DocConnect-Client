import object1 from '../../assets/Objects/from.png'
import object2 from '../../assets/Objects/bg.png'
import SignUpForm from '../../Components/SignUPForm/SignUpForm'

const SignUp = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-4 min-h-screen">
      <div className='relative bg-light-green  w-full hidden md:flex-1 '>
       <div className='absolute top-10 right-10 w-1/2'>
          <img src={object2} alt="background icon" className='w-full'/>
       </div>
       <div className='flex justify-center items-center py-2 lg:min-h-screen '>
        <img src={object1} alt="Log In Page Image" className='w-1/2 lg:w-auto' />
       </div>
      </div>

      {/* Log In From Start Here */}
      <div className='w-full flex-1  lg:py-0 '>
        <div className='flex justify-center min-h-screen items-center py-0 lg:py-2 px-5 '>
        <SignUpForm/>
        </div>
      </div>
      
    </div>
  )
}

export default SignUp