import object1 from '../../assets/Objects/from.png'
import object2 from '../../assets/Objects/bg.png'
import LogInForm from '../../Componets/LogInForm/LogInForm'
const Login = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen">
      <div className='relative bg-light-green flex justify-center items-center w-full lg:min-h-screen flex-1'>
       <div className='absolute top-10 right-10 w-1/2'>
          <img src={object2} alt="background icon" className='w-full'/>
       </div>
       <div className='p-3 flex justify-center items-center'>
        <img src={object1} alt="Log In Page Image" className='w-1/2 lg:w-full' />
       </div>
      </div>

      {/* Log In From Start Here */}
      <div className='w-full lg:min-h-screen flex-1 py-5 lg:py-0'>
        <div className='flex justify-center items-center lg:min-h-screen py-0  px-5 '>
        <LogInForm/>
        </div>
      </div>
      
    </div>
  )
}

export default Login