import brandLogo from '../../../assets/logo/brandLogo.svg'

const Navbar = () => {
    const menu=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Appointment',
            path:'/appointment'
        },
        {
            title:'Login',
            path:'/login'
        }

    ]
  return (
    <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center gap-2 '>
            <img src={brandLogo} alt="Doc Connect Logo" className=''/>
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                <span className='text-light-coffee'>Doc</span> Connect
            </p>
        </div>
        <div>
            <ul className='flex justify-end gap-5'>
                {menu.map((item,index)=>(
                    <li key={index}>
                        <a href={item.path} className='text-xl sm:text-2xl md:text-3xl hover:text-light-gray transition-colors duration-500'>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar